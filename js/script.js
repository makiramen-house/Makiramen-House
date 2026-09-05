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