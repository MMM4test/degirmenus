# Reads PRICES.csv (semicolon-delimited) and updates prices in menu_data.js
# Matching is done by normalizing dish names (lowercased, non-alphanumerics removed)
# If exact match not found and current price is a placeholder ($15.99), perform fuzzy matching using bigram Dice similarity.

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
# Build absolute paths robustly
$parent = Split-Path -Parent $root
$csvPath = Join-Path $parent 'PRICES.csv'
$menuPath = Join-Path $parent 'menu_data.js'

if (-not (Test-Path $csvPath)) {
    Write-Error "CSV not found: $csvPath"
    exit 1
}
if (-not (Test-Path $menuPath)) {
    Write-Error "menu_data.js not found: $menuPath"
    exit 1
}

function Canonicalize([string]$s) {
    if (-not $s) { return "" }
    $s = $s.ToLowerInvariant()
    $s = $s -replace 'kebap', 'kebab'
    $s = $s -replace 'sish', 'shish'
    $s = $s -replace 'iskenden', 'iskender'
    $s = $s -replace '\bw\b', 'with'
    $s = $s -replace 'menemenwithsucuk', 'menemenwithsujuk'
    $s = $s -replace 'sogan', 'sogan'
    return $s
}

function Normalize-Name([string]$s) {
    if (-not $s) { return "" }
    $s = Canonicalize $s
    # Replace special quotes and dashes
    $s = $s -replace '[“”’‘`"ʼ‚‛‹›—–-]', ''
    # Remove everything except a-z and 0-9
    $s = $s -replace '[^a-z0-9]', ''
    return $s
}

function Normalize-Price([string]$p) {
    if (-not $p) { return $null }
    $p = $p -replace '\$', ''
    $p = $p -replace '\s', ''
    $p = $p -replace ',', '.'
    try {
        $val = [decimal]::Parse($p, [System.Globalization.CultureInfo]::InvariantCulture)
        return ('$' + $val.ToString('0.00', [System.Globalization.CultureInfo]::InvariantCulture))
    } catch {
        return $null
    }
}

function Get-Bigrams([string]$s) {
    $s = Normalize-Name $s
    $list = New-Object System.Collections.Generic.List[string]
    if ($s.Length -lt 2) { return $list }
    for ($i = 0; $i -lt $s.Length - 1; $i++) {
        $list.Add($s.Substring($i,2))
    }
    return $list
}

function Get-DiceSimilarity([string]$a, [string]$b) {
    $aBits = Get-Bigrams $a
    $bBits = Get-Bigrams $b
    if ($aBits.Count -eq 0 -and $bBits.Count -eq 0) { return 1.0 }
    $aSet = [System.Collections.Generic.HashSet[string]]::new($aBits)
    $bSet = [System.Collections.Generic.HashSet[string]]::new($bBits)
    $intersection = 0
    foreach ($token in $aSet) {
        if ($bSet.Contains($token)) { $intersection++ }
    }
    $den = $aSet.Count + $bSet.Count
    if ($den -eq 0) { return 0.0 }
    return (2.0 * $intersection) / $den
}

# Import semicolon-delimited CSV
$rows = Import-Csv -Path $csvPath -Delimiter ';'

$map = @{}
foreach ($r in $rows) {
    $name = $r.name
    $price = $r.price
    if ([string]::IsNullOrWhiteSpace($name) -or [string]::IsNullOrWhiteSpace($price)) { continue }
    $key = Normalize-Name $name
    $val = Normalize-Price $price
    if ($val) { $map[$key] = $val }
}

Write-Output ("Entries loaded from CSV: " + $map.Count)

# Load menu_data.js content
$content = Get-Content -Raw -Path $menuPath

# Helper to count placeholder occurrences
function Get-PlaceholderCount([string]$text) {
    return ([regex]::Matches($text, '"price"\s*:\s*"\$15\.99"').Count)
}

$beforeCount = Get-PlaceholderCount $content
Write-Output ("Items at $15.99 before: " + $beforeCount)

# Regex to capture each item's name and its subsequent price within the same object block
$pattern = '"name"\s*:\s*"(?<n>[^\"]+)"(?<rest>[\s\S]*?)"price"\s*:\s*"(?<p>[^\"]*)"'
$regex = New-Object System.Text.RegularExpressions.Regex($pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)

$updatedCount = 0
$fuzzyCount = 0
$matchedNames = New-Object System.Collections.Generic.HashSet[string]
$evaluator = {
    param($m)
    $origName = $m.Groups['n'].Value
    $rest = $m.Groups['rest'].Value
    $oldPrice = $m.Groups['p'].Value
    $key = Normalize-Name $origName
    if ($map.ContainsKey($key)) {
        $newPrice = $map[$key]
        $null = $matchedNames.Add($origName)
        if ($newPrice -ne $oldPrice) { $script:updatedCount++ }
        return ('"name": "' + $origName + '"' + $rest + '"price": "' + $newPrice + '"')
    } else {
        # Only attempt fuzzy update if placeholder price
        if ($oldPrice -eq '$15.99') {
            $bestScore = 0.0
            $bestKey = $null
            foreach ($k in $map.Keys) {
                $score = Get-DiceSimilarity $origName $k
                if ($score -gt $bestScore) { $bestScore = $score; $bestKey = $k }
            }
            if ($bestKey -and $bestScore -ge 0.45) {
                $newPrice = $map[$bestKey]
                $script:fuzzyCount++
                if ($newPrice -ne $oldPrice) { $script:updatedCount++ }
                return ('"name": "' + $origName + '"' + $rest + '"price": "' + $newPrice + '"')
            }
        }
        return $m.Value
    }
}

$newContent = $regex.Replace($content, $evaluator)

$afterCount = Get-PlaceholderCount $newContent
if ($newContent -ne $content) {
    Set-Content -Path $menuPath -Value $newContent -Encoding UTF8
}

Write-Output ("Updated prices for items: " + $updatedCount)
Write-Output ("Fuzzy matches applied: " + $fuzzyCount)
Write-Output ("Items at $15.99 after: " + $afterCount)
Write-Output ("Matched item names: " + ($matchedNames -join ', ')) 