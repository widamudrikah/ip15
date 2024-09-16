document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 1;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            if (index === currentSlide) {
                slide.classList.add('active');
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                slide.classList.add('prev');
            } else if (index === (currentSlide + 1) % slides.length) {
                slide.classList.add('next');
            }
        });
    }

    document.querySelector('.arrow.left').addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    });

    document.querySelector('.arrow.right').addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    });

    updateSlides(); // Initial call to set the first slide
});
