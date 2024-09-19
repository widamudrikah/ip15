document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-btn');
    const iphoneImage = document.getElementById('iphoneImage');

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newImage = this.getAttribute('data-image');
            iphoneImage.classList.remove('active');
            setTimeout(() => {
                iphoneImage.src = newImage; 
                iphoneImage.classList.add('active'); 
            }, 300); 
        });
    });
});
