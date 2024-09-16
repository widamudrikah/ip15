const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        const activeItem = document.querySelector('.accordion-item.active');
        
        if (activeItem && activeItem !== item) {
            activeItem.classList.remove('active');
        }
        
        item.classList.toggle('active');
    });
});
