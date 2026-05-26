document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Simple Interactive Logic for Responsive Navigation Bar Toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggle active classes on elements
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
            
            // Core Accessibilty Optimization Rule
            const isExpanded = menuToggle.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Dynamic Navigation Tracking Highlight Engine
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Close mobile layout window menu upon node interaction execution
            if(window.innerWidth < 768) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
            }
        });
    });
});