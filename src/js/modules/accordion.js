export const accordion = () => {
    const buttons = document.querySelectorAll('.search-content__hotel-offer-btn');

    buttons.forEach(button => {

    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const tableContainer = document.querySelector(targetId);

        if (tableContainer) {
            tableContainer.classList.toggle('active');
        }

        if (this.innerText === 'ОТКРЫТЬ') {
            console.log(true);
    this.innerText = 'ЗАКРЫТЬ';
  } else {
    this.innerText = 'ОТКРЫТЬ';
  }

        this.classList.toggle('active');

        const card = this.closest('.search-content__hotel-offer-card');
        
        if (card) {
            card.classList.toggle('active');
        }
    });
});

}



