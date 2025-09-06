/* ---------- Navigation handling ---------- */
const menuButton = document.querySelector('.nav__menu-button');
const navList = document.querySelector('.nav__list');

// Mobile menu handling
menuButton?.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuButton?.contains(e.target) && !navList?.contains(e.target) && navList?.classList.contains('active')) {
        menuButton.classList.remove('active');
        navList.classList.remove('active');
    }
});

// Close menu when clicking on a link
navList?.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        menuButton.classList.remove('active');
        navList.classList.remove('active');
    });
});

/* ---------- Sticky header ---------- */
const header = document.querySelector('.header');
const headerHeight = header?.offsetHeight || 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header?.classList.add('header--sticky');
        document.body.style.paddingTop = headerHeight + 'px';
    } else {
        header?.classList.remove('header--sticky');
        document.body.style.paddingTop = '0';
    }
});

/* ---------- Menu page functionality ---------- */
if (window.location.pathname.includes('menu.html')) {
    const categoriesNav = document.querySelectorAll('.nav-categories__item');
    const menuTitleText = document.getElementById('menu-title-text');
    const menuIcon = document.getElementById('menu-icon');
    const menuSizes = document.getElementById('menu-sizes');
    const foodList = document.getElementById('food-list');

    // Initialize menu with data loaded from external file
    function initializeMenu() {
        // Check if menuData is available
        if (Object.keys(menuData).length > 0) {
            // Find the currently active category in HTML or default to 'burger'
            const activeNavItem = document.querySelector('.nav-categories__item--active');
            const defaultCategory = activeNavItem ? activeNavItem.getAttribute('data-category') : 'burger';
            
            // Make sure the category exists in menuData, otherwise use the first available
            const categoryToShow = menuData[defaultCategory] ? defaultCategory : Object.keys(menuData)[0];
            
            // Update active navigation item to match what we're showing
            categoriesNav.forEach(nav => nav.classList.remove('nav-categories__item--active'));
            const navItem = document.querySelector(`[data-category="${categoryToShow}"]`);
            if (navItem) {
                navItem.classList.add('nav-categories__item--active');
            }
            
            renderMenu(categoryToShow);
        }
    }

    // Call initialize function after DOM and menu data are loaded
    function tryInitialize() {
        if (typeof menuData !== 'undefined' && Object.keys(menuData).length > 0) {
            initializeMenu();
        } else {
            setTimeout(tryInitialize, 50);
        }
    }

    // React to Excel loader updates as well
    document.addEventListener('menuDataLoaded', () => {
        if (typeof menuData !== 'undefined' && Object.keys(menuData).length > 0) {
            initializeMenu();
        }
    });

    // Start initialization process
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInitialize);
    } else {
        tryInitialize();
    }

    const foodDetailsPanel = document.querySelector('.food-details-panel');
    const foodDetailsOverlay = document.querySelector('.food-details-overlay');
    const closeButton = document.querySelector('.food-details__close');
    const foodDetailsOrderButton = document.querySelector('.food-details__order-button');

    function openDetailsPanel(item) {
        if (!foodDetailsPanel) return;

        foodDetailsPanel.querySelector('.food-details__name').textContent = item.name;
        foodDetailsPanel.querySelector('.food-details__ingredients').textContent = item.ingredients;
        foodDetailsPanel.querySelector('.food-details__description').textContent = item.description;
        foodDetailsPanel.querySelector('.food-details__price').textContent = item.price;

        // Add to cart functionality
        foodDetailsOrderButton.onclick = () => {
            addToCart(item);
            closeDetailsPanel();
        };

        foodDetailsPanel.classList.add('active');
        foodDetailsOverlay.classList.add('active');
    }

    function closeDetailsPanel() {
        if (!foodDetailsPanel) return;
        foodDetailsPanel.classList.remove('active');
        foodDetailsOverlay.classList.remove('active');
    }

    closeButton?.addEventListener('click', closeDetailsPanel);
    foodDetailsOverlay?.addEventListener('click', closeDetailsPanel);

    /* Render menu items */
    function renderMenu(categoryKey) {
        const data = menuData[categoryKey];
        if (menuTitleText) menuTitleText.textContent = data.title;
        if (menuIcon && data.icon) menuIcon.innerHTML = data.icon;
        if (menuSizes) menuSizes.textContent = data.sizes;
        if (!foodList) return;

        foodList.innerHTML = ''; // Clear list
        const itemsToRender = (data.items || []).filter(item => {
            const price = (item && typeof item.price === 'string') ? item.price.trim() : '';
            return !!price; // only skip items without price
        });

        if (itemsToRender.length === 0) {
            const emptyEl = document.createElement('li');
            emptyEl.className = 'food-item food-item--empty';
            emptyEl.innerHTML = '<div class="food-item__info"><h2 class="food-item__name">No items available</h2></div>';
            foodList.appendChild(emptyEl);
            return;
        }

        itemsToRender.forEach(item => {
            const li = document.createElement('li');
            li.className = 'food-item';

            li.innerHTML = `
                <div class="food-item__info">
                    <h2 class="food-item__name">${item.name}</h2>
                    <p class="food-item__ingredients">${item.ingredients}</p>
                </div>
                <span class="food-item__price">${item.price}</span>
            `;
            li.addEventListener('click', () => openDetailsPanel(item));
            foodList.appendChild(li);
        });
    }

    /* Draggable Categories Navigation */
    const tabsBox = document.querySelector(".tabs-box");
    const arrowIcons = document.querySelectorAll(".categories-icon i");

    let isDragging = false;
    let startX, scrollLeft;
    let touchStartX;

    const handleIcons = (scrollVal) => {
        if (!tabsBox) return;
        let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
        arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
        arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            if (!tabsBox) return;
            // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
            let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
            handleIcons(scrollWidth);
        });
    });

    const dragging = (e) => {
        if(!isDragging || !tabsBox) return;
        e.preventDefault();
        tabsBox.classList.add("dragging");
        const x = e.type === "mousemove" ? e.movementX : e.touches[0].clientX - touchStartX;
        tabsBox.scrollLeft -= x;
        if (e.type === "touchmove") {
            touchStartX = e.touches[0].clientX;
        }
        handleIcons(tabsBox.scrollLeft);
    }

    const dragStop = () => {
        isDragging = false;
        tabsBox?.classList.remove("dragging");
    }

    const dragStart = (e) => {
        isDragging = true;
        if (e.type === "touchstart") {
            touchStartX = e.touches[0].clientX;
        } else {
            startX = e.pageX - (tabsBox?.offsetLeft || 0);
            scrollLeft = tabsBox?.scrollLeft || 0;
        }
    }

    // Initialize arrow visibility
    setTimeout(() => {
        handleIcons(0);
    }, 100);

    // Mouse Events
    tabsBox?.addEventListener("mousedown", dragStart);
    tabsBox?.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    // Touch Events
    tabsBox?.addEventListener("touchstart", dragStart, { passive: false });
    tabsBox?.addEventListener("touchmove", dragging, { passive: false });
    tabsBox?.addEventListener("touchend", dragStop);

    // Prevent menu click during drag
    tabsBox?.addEventListener("click", (e) => {
        if (tabsBox.classList.contains("dragging")) {
            e.preventDefault();
        }
    });

    /* Category nav click handling */
    categoriesNav.forEach(item => {
        item.addEventListener("click", () => {
            if (tabsBox?.classList.contains("dragging")) return;
            
            // Update active class
            categoriesNav.forEach(i => i.classList.remove('nav-categories__item--active'));
            item.classList.add('nav-categories__item--active');

            const categoryKey = item.getAttribute('data-category');
            renderMenu(categoryKey);
        });
    });
}

/* ---------- Home page functionality ---------- */
if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    /* Populate Featured Dishes */
    function populateFeaturedDishes() {
        const featuredList = document.querySelector('.featured-dishes__list');
        if (!featuredList) return;

        // Clear existing items
        featuredList.innerHTML = '';

        // Featured dishes
        const featuredDishes = [
            {
                name: 'Turkish Pizza',
                ingredients: 'Traditional Turkish pizza with special blend of spices and fresh ingredients',
                price: '$19.99'
            },
            {
                name: 'Gourmet Burger',
                ingredients: 'Juicy Turkish-style burger with premium toppings',
                price: '$19.99'
            },
            {
                name: 'Fresh Salad',
                ingredients: 'Crisp Mediterranean salad with olive oil dressing',
                price: '$19.99'
            },
            {
                name: 'Traditional Soup',
                ingredients: 'Homemade Turkish soup with authentic spices',
                price: '$19.99'
            },
            {
                name: 'Refreshing Ayran',
                ingredients: 'Traditional Turkish yogurt drink',
                price: '$19.99'
            }
        ];

        // Create list items for each featured dish
        featuredDishes.forEach(dish => {
            const listItem = document.createElement('div');
            listItem.className = 'food-item';
            listItem.innerHTML = `
                <div class="food-item__info">
                    <h3 class="food-item__name">${dish.name}</h3>
                    <p class="food-item__ingredients">${dish.ingredients}</p>
                </div>
                <div class="food-item__price">${dish.price}</div>
            `;
            featuredList.appendChild(listItem);
        });
    }

    // Initialize featured dishes
    populateFeaturedDishes();
}

/* ---------- Cart Functionality ---------- */
const cartPanel = document.querySelector('.cart-panel');
const cartOverlay = document.querySelector('.cart-overlay');
const openCartButton = document.querySelector('.nav__cart-button');
const closeCartButton = document.querySelector('.cart-panel__close');
const cartBadge = document.querySelector('.nav__cart-badge');
const cartBody = document.querySelector('.cart-panel__body');
const cartTotalPriceEl = document.querySelector('.cart-panel__total-price');

let cart = JSON.parse(localStorage.getItem('degirmenCart')) || [];

function openCart() {
    cartPanel?.classList.add('active');
    cartOverlay?.classList.add('active');
}

function closeCart() {
    cartPanel?.classList.remove('active');
    cartOverlay?.classList.remove('active');
}

function updateCart() {
    renderCartItems();
    updateCartBadge();
    updateCartTotal();
    localStorage.setItem('degirmenCart', JSON.stringify(cart));
}

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCart();
    // Optional: show a confirmation
    openCart();
}

function renderCartItems() {
    if (!cartBody) return;
    cartBody.innerHTML = '';

    if (cart.length === 0) {
        cartBody.innerHTML = '<li class="cart-panel__empty-message">Your cart is empty.</li>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItemEl = document.createElement('li');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="cart-item__info">
                <h4 class="cart-item__name">${item.name}</h4>
                <div class="cart-item__controls" data-index="${index}">
                    <button class="cart-item__qty-btn" data-action="decrease">-</button>
                    <span class="cart-item__qty">${item.quantity}</span>
                    <button class="cart-item__qty-btn" data-action="increase">+</button>
                </div>
            </div>
            <div class="cart-item__price">$${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}</div>
            <button class="cart-item__remove" data-action="remove" aria-label="Remove item">&times;</button>
        `;
        cartBody.appendChild(cartItemEl);
    });

    // Attach listeners after rendering
    cartBody.querySelectorAll('.cart-item__qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            const idx = parseInt(btn.parentElement.getAttribute('data-index'));
            if (action === 'increase') {
                cart[idx].quantity++;
            } else if (action === 'decrease') {
                cart[idx].quantity = Math.max(1, cart[idx].quantity - 1);
            }
            updateCart();
        });
    });

    cartBody.querySelectorAll('.cart-item__remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = Array.from(cartBody.children).indexOf(btn.parentElement);
            cart.splice(idx, 1);
            updateCart();
        });
    });
}

function updateCartBadge() {
    if (!cartBadge) return;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateCartTotal() {
    if (!cartTotalPriceEl) return;
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity, 0);
    cartTotalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;
}

openCartButton?.addEventListener('click', openCart);
closeCartButton?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', closeCart);

// Initialize cart on all pages
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});