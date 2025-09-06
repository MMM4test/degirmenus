document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS (replace with your actual public key)
    const EMAILJS_PUBLIC_KEY = "Et48VAH1IaGBmwnTy"; // Your EmailJS public key
    const EMAILJS_SERVICE_ID = "service_johghno"; // Your EmailJS service ID  
    const EMAILJS_TEMPLATE_ID = "template_fgm2vmp"; // Your EmailJS template ID
    const ADMIN_EMAIL = "suwdash13@gmail.com"; // Admin email address for receiving reservations

    // Check if EmailJS is configured
    const isEmailJSConfigured = EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY" && 
                               EMAILJS_SERVICE_ID && EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" && 
                               EMAILJS_TEMPLATE_ID && EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID";

    console.log('EmailJS Configuration Check:', {
        publicKey: EMAILJS_PUBLIC_KEY,
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        isConfigured: isEmailJSConfigured,
        emailjsAvailable: typeof emailjs !== 'undefined'
    });

    if (isEmailJSConfigured && typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('EmailJS initialized successfully');
        
        // Test EmailJS connectivity
        console.log('Testing EmailJS connectivity...');
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            customer_name: 'Test User',
            customer_email: 'test@example.com',
            test: 'This is a connectivity test'
        }).then(function(response) {
            console.log('✅ EmailJS connectivity test successful:', response);
        }).catch(function(error) {
            console.error('❌ EmailJS connectivity test failed:', error);
        });
    } else {
        console.warn('EmailJS not initialized:', {
            configured: isEmailJSConfigured,
            available: typeof emailjs !== 'undefined'
        });
    }

    const customerCountInput = document.getElementById('customer-count');
    const tables = document.querySelectorAll('.reservation-table');
    const selectedTablesDisplay = document.getElementById('selected-tables-display');
    const reservationForm = document.getElementById('reservationForm');
    let selectedTables = [];

    // Location selection functionality
    let selectedLocation = null;
    const locationButtons = document.querySelectorAll('.branch-card__button--reserve');
    const reservationSection = document.getElementById('reservationSection');
    const selectedLocationName = document.getElementById('selectedLocationName');
    
    // Table layouts for different locations
    const tableLayouts = {
        'Degirmen Restaurant and Bakery': {
            tables: [
                // Row 1
                '1A', '1B', '1C', '1D', '1E', '1F',
                // Row 2 
                '2A', '2B', '2C', '2D', '2E', '2F', '2G',
                // Row 3
                '3B', '3C', '3D', '3E', '3F'
            ],
            gridStructure: [
                ['1A', '1B', '1C', '1D', '1E', '1F', null],
                ['2A', '2B', '2C', '2D', '2E', '2F', '2G'],
                [null, '3B', '3C', '3D', '3E', '3F', null]
            ]
        },
        'Second Location': {
            tables: [
                // Different layout for future location
                '1A', '1B', '1C', '1D',
                '2A', '2B', '2C', '2D', '2E',
                '3A', '3B', '3C', '3D'
            ],
            gridStructure: [
                ['1A', '1B', '1C', '1D', null, null, null],
                ['2A', '2B', '2C', '2D', '2E', null, null],
                ['3A', '3B', '3C', '3D', null, null, null]
            ]
        }
    };
    
    // Function to generate table layout based on location
    function generateTableLayout(location) {
        const layout = tableLayouts[location];
        if (!layout) return;
        
        const reservationMap = document.querySelector('.reservation-map');
        reservationMap.innerHTML = '';
        
        layout.gridStructure.forEach(row => {
            row.forEach(tableId => {
                if (tableId === null) {
                    const placeholder = document.createElement('div');
                    placeholder.className = 'placeholder-table';
                    reservationMap.appendChild(placeholder);
                } else {
                    const table = document.createElement('div');
                    table.className = 'reservation-table';
                    table.dataset.table = tableId;
                    table.textContent = tableId;
                    reservationMap.appendChild(table);
                }
            });
        });
        
        // Reset selected tables when layout changes
        selectedTables = [];
        updateSelectedTablesDisplay();
        
        // Re-initialize table click handlers for new tables
        initializeTableHandlers();
    }
    
    // Handle location selection
    locationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const location = this.dataset.location;
            selectedLocation = location;
            
            // Update all location buttons
            locationButtons.forEach(btn => {
                btn.classList.remove('selected');
                btn.textContent = 'Select Location';
            });
            
            // Mark selected location
            this.classList.add('selected');
            this.textContent = '✓ Selected';
            
            // Show reservation section
            reservationSection.style.display = 'block';
            selectedLocationName.textContent = location;
            
            // Generate table layout for selected location
            generateTableLayout(location);
            
            // Scroll to reservation section
            reservationSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
            
            console.log('Location selected:', location);
        });
    });

    // Create a map of table positions based on the grid layout
    const gridMap = new Map();
    let currentRow = 0;
    let currentCol = 0;
    document.querySelector('.reservation-map').childNodes.forEach(node => {
        if (node.nodeType !== 1) return; // Only process element nodes
        
        if (node.classList.contains('reservation-table')) {
            const tableId = node.dataset.table;
            gridMap.set(tableId, { row: currentRow, col: currentCol });
        }
        currentCol++;
        if (currentCol >= 7) {
            currentCol = 0;
            currentRow++;
        }
    });

    // Helper function to check for adjacency
    function isAdjacent(tableId1, tableId2) {
        // New rule: Tables in the first row are not considered adjacent to each other.
        if (tableId1.startsWith('1') && tableId2.startsWith('1')) {
            return false;
        }

        const pos1 = gridMap.get(tableId1);
        const pos2 = gridMap.get(tableId2);
        if (!pos1 || !pos2) return false;

        const rowDiff = Math.abs(pos1.row - pos2.row);
        const colDiff = Math.abs(pos1.col - pos2.col);

        return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
    }

    // Helper function to check if a new table is connected to the selection
    function isConnectedToSelection(newTableId) {
        if (selectedTables.length === 0) {
            return true; // First selection is always allowed
        }
        return selectedTables.some(selectedId => isAdjacent(newTableId, selectedId));
    }

    // New function to check if the entire selection remains a single connected component
    function isSelectionContiguous(tables) {
        if (tables.length <= 1) {
            return true;
        }

        const visited = new Set();
        const queue = [tables[0]];
        visited.add(tables[0]);

        while (queue.length > 0) {
            const current = queue.shift();
            for (const other of tables) {
                if (!visited.has(other) && isAdjacent(current, other)) {
                    visited.add(other);
                    queue.push(other);
                }
            }
        }

        return visited.size === tables.length;
    }

    function updateSelectedTablesDisplay() {
        if (selectedTables.length === 0) {
            selectedTablesDisplay.textContent = 'No table selected';
        } else {
            // Sort the tables for consistent display
            selectedTables.sort((a, b) => {
                const rowA = parseInt(a, 10);
                const rowB = parseInt(b, 10);
                const colA = a.slice(-1);
                const colB = b.slice(-1);

                if (rowA !== rowB) {
                    return rowA - rowB;
                }
                return colA.localeCompare(colB);
            });
            selectedTablesDisplay.textContent = selectedTables.join(', ');
        }
    }

    function handleCustomerCountChange() {
        const customerCount = parseInt(customerCountInput.value, 10) || 1;
        const maxSelection = Math.max(1, Math.ceil(customerCount / 4));

        if (selectedTables.length > maxSelection) {
            const tablesToDeselect = selectedTables.slice(maxSelection);
            selectedTables = selectedTables.slice(0, maxSelection);

            tablesToDeselect.forEach(tableId => {
                document.querySelector(`[data-table="${tableId}"]`).classList.remove('selected');
            });
            
            updateSelectedTablesDisplay();
        }
    }

    // Function to initialize table click handlers
    function initializeTableHandlers() {
        const tables = document.querySelectorAll('.reservation-table');
        
        // Remove existing event listeners by cloning nodes
        tables.forEach(table => {
            const newTable = table.cloneNode(true);
            table.parentNode.replaceChild(newTable, table);
        });
        
        // Add new event listeners
        document.querySelectorAll('.reservation-table').forEach(table => {
            table.addEventListener('click', function() {
                const tableId = this.dataset.table;
                const isSelected = selectedTables.includes(tableId);
                const customerCount = parseInt(customerCountInput.value, 10) || 1;
                const maxSelection = Math.max(1, Math.ceil(customerCount / 4));

                if (isSelected) {
                    // When deselecting, check if the remaining selection is still contiguous.
                    const remainingTables = selectedTables.filter(t => t !== tableId);
                    if (!isSelectionContiguous(remainingTables)) {
                        alert('You cannot deselect this table as it would split your selection. Please deselect from the ends of your selection.');
                        return;
                    }
                    selectedTables = remainingTables;
                    this.classList.remove('selected');
                } else {
                    // When adding a table, check capacity and adjacency.
                    if (selectedTables.length >= maxSelection) {
                        alert(`With ${customerCount} guests, you can select a maximum of ${maxSelection} table(s).`);
                        return;
                    }

                    if (isConnectedToSelection(tableId)) {
                        selectedTables.push(tableId);
                        this.classList.add('selected');
                    } else {
                        alert('Please select a table adjacent to your current selection.');
                    }
                }
                updateSelectedTablesDisplay();
            });
        });
        
        // Update grid map for the new layout
        updateGridMap();
    }
    
    // Function to update grid map based on current tables
    function updateGridMap() {
        gridMap.clear();
        let currentRow = 0;
        let currentCol = 0;
        
        document.querySelector('.reservation-map').childNodes.forEach(node => {
            if (node.nodeType !== 1) return; // Only process element nodes
            
            if (node.classList.contains('reservation-table')) {
                const tableId = node.dataset.table;
                gridMap.set(tableId, { row: currentRow, col: currentCol });
            }
            currentCol++;
            if (currentCol >= 7) {
                currentCol = 0;
                currentRow++;
            }
        });
    }

    // Initialize table handlers for the default layout (will be overridden when location is selected)
    const initialTables = document.querySelectorAll('.reservation-table');
    if (initialTables.length > 0) {
        initializeTableHandlers();
    }
    
    customerCountInput.addEventListener('input', handleCustomerCountChange);

    // Set min date for date picker
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('reservation-date').setAttribute('min', today);

    // Function to send email to admin via EmailJS
    function sendReservationEmail(reservationData) {
        console.log('Attempting to send reservation email:', reservationData);
        console.log('EmailJS Configuration Status:', {
            configured: isEmailJSConfigured,
            emailjsAvailable: typeof emailjs !== 'undefined'
        });

        if (!isEmailJSConfigured || typeof emailjs === 'undefined') {
            console.warn('EmailJS not configured. Using fallback method.');
            return Promise.resolve(true); // Return success for demo
        }

        const templateParams = {
            customer_name: reservationData.fullName,
            customer_email: reservationData.email,
            customer_phone: reservationData.phone,
            reservation_date: reservationData.date,
            reservation_time: reservationData.time,
            guest_count: reservationData.guests,
            selected_tables: reservationData.tables,
            restaurant_location: reservationData.location
        };

        console.log('Sending email with params:', templateParams);

        return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                return true;
            })
            .catch(function(error) {
                console.error('Failed to send email:', error);
                console.error('Error details:', {
                    name: error.name,
                    message: error.message,
                    status: error.status,
                    text: error.text
                });
                return false;
            });
    }

    // Fallback function to display reservation details (when EmailJS is not configured)
    function showReservationDetails(reservationData) {
        const detailsMessage = `
📧 RESERVATION DETAILS TO SEND TO ADMIN:

👤 Customer: ${reservationData.fullName}
📧 Email: ${reservationData.email}
📱 Phone: ${reservationData.phone}
🏢 Location: ${reservationData.location}
📅 Date: ${reservationData.date}
🕐 Time: ${reservationData.time}
👥 Guests: ${reservationData.guests}
🪑 Tables: ${reservationData.tables}

📋 Admin should receive this information via email.
To enable automatic emails, please configure EmailJS following the setup guide.
        `;
        
        console.log('Reservation Details:', detailsMessage);
        return detailsMessage;
    }

    // Function to show reservation confirmation
    function showReservationConfirmation(reservationData) {
        let confirmationMessage = `
🎉 Reservation Confirmed! 🎉

Thank you, ${reservationData.fullName}!

🏢 Location: ${reservationData.location}
📅 Date: ${reservationData.date}
🕐 Time: ${reservationData.time}
👥 Guests: ${reservationData.guests}
🪑 Table(s): ${reservationData.tables}

📧 Confirmation sent to: ${reservationData.email}
📱 Contact: ${reservationData.phone}

We look forward to serving you at Degirmen!
Our team will contact you shortly to confirm your reservation.
        `;

        // If EmailJS is not configured, add admin details
        if (!isEmailJSConfigured) {
            confirmationMessage += `\n\n${showReservationDetails(reservationData)}`;
        }
        
        alert(confirmationMessage);
    }

    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!selectedLocation) {
            alert('Please select a restaurant location first.');
            return;
        }
        
        if (selectedTables.length === 0) {
            alert('Please select at least one table from the map.');
            return;
        }

        // Collect form data
        const reservationData = {
            fullName: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('reservation-date').value,
            time: document.getElementById('reservation-time').value,
            guests: document.getElementById('customer-count').value,
            tables: selectedTables.join(', '),
            location: selectedLocation
        };

        // Show loading state
        const submitButton = document.querySelector('.reservation-form__submit');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Send email to admin
        sendReservationEmail(reservationData)
            .then(function(success) {
                if (success) {
                    showReservationConfirmation(reservationData);
                    
                    // Reset form
                    reservationForm.reset();
                    selectedTables = [];
                    updateSelectedTablesDisplay();
                    document.querySelectorAll('.reservation-table.selected').forEach(table => {
                        table.classList.remove('selected');
                    });
                    
                    // Set today's date as minimum again
                    document.getElementById('reservation-date').setAttribute('min', today);
                } else {
                    alert('There was an error sending your reservation. Please try again later or contact us directly in store.');
                }
            })
            .finally(function() {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    });
}); 