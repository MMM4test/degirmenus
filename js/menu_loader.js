// Build menuData from menu.xlsx at runtime. Requires XLSX library.
(function() {
    if (!window.location.pathname.includes('menu.html')) return;

    // Helper: normalize category key to match existing HTML data-category attributes
    function toCategoryKey(raw) {
        return String(raw || '').trim().toLowerCase();
    }

    // Helper: ensure price string like "$12.34"; return empty string if invalid
    function toPriceString(value) {
        if (value === null || value === undefined) return '';
        const num = typeof value === 'number' ? value : parseFloat(String(value).replace(/[^0-9.\-]/g, ''));
        if (isNaN(num)) return '';
        return `$${num.toFixed(2)}`;
    }

    // Load and parse the workbook, then overwrite global menuData
    async function loadMenuFromXlsx() {
        try {
            const response = await fetch('menu.xlsx');
            if (!response.ok) throw new Error(`Failed to fetch menu.xlsx: ${response.status}`);
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });

            // Use the first sheet by default
            const firstSheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[firstSheetName];
            const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });

            // Expected columns (case-insensitive): Category, Name, Ingredients, Description, Price, Icon(optional), Sizes(optional)
            const built = {};

            rows.forEach(row => {
                const category = toCategoryKey(row.Category || row.category || row.CATEGORY);
                const name = String(row.Name || row.name || '').trim();
                const ingredients = String(row.Ingredients || row.ingredients || '').trim();
                const description = String(row.Description || row.description || '').trim();
                const rawPrice = row.Price || row.price || '';
                const price = toPriceString(rawPrice);
                const icon = row.Icon || row.icon || '';
                const sizes = row.Sizes || row.sizes || '';

                // Skip items that don't have a valid price
                if (!price) return;
                if (!category || !name) return;

                if (!built[category]) {
                    built[category] = {
                        title: capitalizeCategory(category),
                        sizes: String(sizes || ''),
                        items: [],
                        icon: iconToHtml(icon, category)
                    };
                }

                built[category].items.push({
                    name,
                    ingredients,
                    description,
                    price
                });
            });

            // If nothing parsed, keep existing menuData
            if (Object.keys(built).length === 0) return;

            // Overwrite global menuData to drive rendering
            window.menuData = built;
            // Notify listeners that fresh data is available
            try {
                document.dispatchEvent(new CustomEvent('menuDataLoaded', { detail: { source: 'xlsx' } }));
            } catch (e) {
                // no-op if CustomEvent unsupported
            }
        } catch (err) {
            console.error('Error loading menu.xlsx:', err);
        }
    }

    function capitalizeCategory(key) {
        // Keep original formatting for known categories; otherwise simple capitalize
        const mapping = {
            'seafood dishes': 'Seafood Dishes',
            'kids menu': 'Kids Menu',
            'chicken world': 'Chicken World',
            'fried foods': 'Fried Foods',
            'bbq': 'Bbq'
        };
        if (mapping[key]) return mapping[key];
        return key.replace(/\b\w/g, c => c.toUpperCase());
    }

    function iconToHtml(iconCellValue, categoryKey) {
        const fallbackMap = {
            'burger': '<i class="fas fa-hamburger"></i>',
            'steak': '<i class="fas fa-fire-burner"></i>',
            'bbq': '<i class="fas fa-fire"></i>',
            'seafood dishes': '<i class="fas fa-fish"></i>',
            'doner': '<i class="fas fa-hotdog"></i>',
            'kids menu': '<i class="fas fa-child"></i>',
            'soups': '<i class="fas fa-bowl-food"></i>',
            'salads': '<i class="fas fa-leaf"></i>',
            'pide': '<i class="fas fa-bread-slice"></i>',
            'pizza': '<i class="fas fa-pizza-slice"></i>',
            'pastas': '<i class="fas fa-utensils"></i>',
            'chicken world': '<i class="fas fa-drumstick-bite"></i>',
            'fried foods': '<i class="fas fa-bacon"></i>'
        };
        const trimmed = String(iconCellValue || '').trim();
        if (trimmed) return trimmed; // allow custom HTML icon
        return fallbackMap[categoryKey] || '';
    }

    // Kick off loader as early as possible
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadMenuFromXlsx);
    } else {
        loadMenuFromXlsx();
    }
})();


