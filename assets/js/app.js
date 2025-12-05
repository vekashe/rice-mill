document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu toggle
    window.hamburgerToggle = function() {
        const headerSec = document.querySelector('.header');
        headerSec.classList.toggle('open');
    };
    
    // Initialize Swiper for the product slider
    // Check if Swiper is loaded and the slider element exists
    if (typeof Swiper !== 'undefined' && document.querySelector('.product-slider')) {
        new Swiper('.product-slider', {
            slidesPerView: 1.5,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1200: { slidesPerView: 3.5 },
            }
        });
    }
});
