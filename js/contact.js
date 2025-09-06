// Contact page location selection functionality
document.addEventListener('DOMContentLoaded', function() {
    const locationButtons = document.querySelectorAll('.branch-card__button--contact');
    const contactForm = document.getElementById('contact-form');
    const selectedLocationDisplay = document.getElementById('selected-location-display');
    const locationInfo = document.getElementById('location-info');
    const locationInput = document.getElementById('location');

    // Location data
    const locations = {
        brighton: {
            name: 'Degirmen Restaurant and Bakery',
            address: '236 A Brighton Beach Ave, Brooklyn, NY 11235',
            phone: '+1 234 567 8900',
            email: 'brighton@degirmen.com',
            hours: 'Mon - Sun: 7:30 AM - 10:00 PM',
            mapUrl: 'https://www.google.com/maps/dir/?api=1&destination=236+A+Brighton+Beach+Ave+Brooklyn+NY+11235'
        }
    };

    // Auto-open Brighton by default (no selection UI)
    const defaultKey = 'brighton';
    locationInput.value = defaultKey;
    contactForm.style.display = 'block';
    updateLocationDisplay(defaultKey);

    function updateLocationDisplay(locationKey) {
        const location = locations[locationKey];
        
        // Update selected location display
        selectedLocationDisplay.innerHTML = `
            <div style="background: var(--bg-darker); padding: 15px; border-radius: 10px; margin: 20px 0;">
                <strong>Selected Location:</strong> ${location.name}
            </div>
        `;
        
        // Update location info
        locationInfo.innerHTML = `
            <li><i class="fas fa-map-marker-alt"></i> ${location.address}</li>
            <li><i class="fas fa-location-arrow"></i> <a href="${location.mapUrl}" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none;">Get Directions</a></li>
            <li><i class="fas fa-envelope"></i> ${location.email}</li>
            <li><i class="fas fa-clock"></i> ${location.hours}</li>
        `;
    }

    // Basic client-side sanitization to reduce injection vectors
    function sanitizeInput(text) {
        if (typeof text !== 'string') return '';
        return text
            .replace(/[<>]/g, '') // strip angle brackets
            .replace(/[\u0000-\u001F\u007F]/g, '') // strip control chars
            .trim();
    }

    // Handle form submission
    const contactFormElement = document.querySelector('.contact-form');
    if (contactFormElement) {
        contactFormElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const location = sanitizeInput(formData.get('location'));
            const name = sanitizeInput(formData.get('name'));
            const email = sanitizeInput(formData.get('email'));
            const subject = sanitizeInput(formData.get('subject'));
            const message = sanitizeInput(formData.get('message'));
            
            // Validate location is selected
            if (!location) {
                alert('Please select a location first.');
                return;
            }
            
            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            alert(`Thank you, ${name}! Your message has been sent to our ${locations[location].name}. We'll get back to you soon.`);
            
            // Reset form
            this.reset();
            locationInput.value = '';
            contactForm.style.display = 'none';
            
            // Remove selection state
            document.querySelectorAll('.branch-card__button--contact').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Scroll back to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}); 