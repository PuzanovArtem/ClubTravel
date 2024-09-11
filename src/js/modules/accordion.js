export const accordion = () => {
    const buttons = document.querySelectorAll('.search-content__hotel-offer-btn');

    buttons.forEach(button => {

    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const tableContainer = document.querySelector(targetId);

        if (tableContainer) {
            tableContainer.classList.toggle('active');
        }

        this.classList.toggle('active');

        const card = this.closest('.search-content__hotel-offer-card');
        
        if (card) {
            card.classList.toggle('active');
        }
    });
});

}



