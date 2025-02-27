document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let index = 0;

    function showNextSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        index = (index + 1) % slides.length;
    }

    setInterval(showNextSlide, 3000);
});
