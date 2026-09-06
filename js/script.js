document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");
    const prevButton = document.querySelector(".slider-prev");
    const nextButton = document.querySelector(".slider-next");

    let currentSlide = 0;
    let autoSlide;


    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }


        // Remove active from all slides
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });


        // Remove active from all dots
        dots.forEach((dot) => {
            dot.classList.remove("active");
        });


        // Activate current slide
        if (slides[currentSlide]) {
            slides[currentSlide].classList.add("active");
        }


        // Activate current dot
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }
    }


    function nextSlide() {
        showSlide(currentSlide + 1);
    }


    function previousSlide() {
        showSlide(currentSlide - 1);
    }


    function startAutoSlide() {

        clearInterval(autoSlide);

        autoSlide = setInterval(() => {
            nextSlide();
        }, 5000);

    }


    function resetAutoSlide() {
        startAutoSlide();
    }


    // NEXT BUTTON
    if (nextButton) {

        nextButton.addEventListener("click", () => {

            nextSlide();
            resetAutoSlide();

        });

    }


    // PREVIOUS BUTTON
    if (prevButton) {

        prevButton.addEventListener("click", () => {

            previousSlide();
            resetAutoSlide();

        });

    }


    // DOTS
    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);
            resetAutoSlide();

        });

    });


    // START SLIDER
    showSlide(0);
    startAutoSlide();

});

document.addEventListener("DOMContentLoaded", () => {

    const aboutVideo = document.getElementById("aboutVideo");

    if (!aboutVideo) return;

    aboutVideo.muted = true;
    aboutVideo.setAttribute("muted", "");
    aboutVideo.setAttribute("playsinline", "");
    aboutVideo.setAttribute("webkit-playsinline", "");

    const playVideo = () => {
        aboutVideo.play().catch(() => {
            // Mobile browser blocked autoplay.
            // It will play after the user interacts with the page.
        });
    };

    // Try immediately
    playVideo();

    // Try again when About section becomes visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                playVideo();
            } else {
                aboutVideo.pause();
            }
        });
    }, {
        threshold: 0.25
    });

    observer.observe(aboutVideo);

    // Try again after user interaction
    ["touchstart", "click", "scroll"].forEach(event => {
        document.addEventListener(event, playVideo, {
            once: true,
            passive: true
        });
    });

});


// ===============================
// MOBILE MENU TOGGLE
// ===============================

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuToggle && mobileMenu) {

    mobileMenuToggle.addEventListener('click', () => {

        const isOpen = mobileMenu.classList.toggle('active');

        mobileMenuToggle.setAttribute(
            'aria-expanded',
            isOpen ? 'true' : 'false'
        );

    });

}


// Close when clicking a navigation link
if (mobileMenu) {

    const mobileLinks = mobileMenu.querySelectorAll('a');

    mobileLinks.forEach(link => {

        link.addEventListener('click', () => {

            mobileMenu.classList.remove('active');

            if (mobileMenuToggle) {
                mobileMenuToggle.setAttribute(
                    'aria-expanded',
                    'false'
                );
            }

        });

    });

}
// ===============================
// MENU CATEGORY TABS
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    const menuTabs = document.querySelectorAll(".menu-tab");
    const menuCategories = document.querySelectorAll(".menu-category");

    menuTabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const category = tab.dataset.category;

            // Remove active from all tabs
            menuTabs.forEach(item => {
                item.classList.remove("active");
            });

            // Remove active from all categories
            menuCategories.forEach(section => {
                section.classList.remove("active");
            });

            // Activate clicked tab
            tab.classList.add("active");

            // Activate matching category
            const selectedCategory = document.getElementById(category);

            if (selectedCategory) {
                selectedCategory.classList.add("active");
            }

        });

    });

});