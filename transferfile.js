
window.addEventListener('scroll', function () {
    const section = document.querySelector('.file-transfer-section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        section.classList.add('visible');
    }
});
