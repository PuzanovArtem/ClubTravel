export const accordion = () => {
  const buttons = document.querySelectorAll('.search-content__hotel-offer-btn')

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target')
      const tableContainer = document.querySelector(targetId)
      const card = this.closest('.search-content__hotel-offer-card')

      if (tableContainer && card) {
        const isActive = tableContainer.classList.toggle('active')
        card.classList.toggle('active', isActive)
        this.innerText = isActive ? 'ЗАКРЫТЬ' : 'ОТКРЫТЬ'
        this.classList.toggle('active', isActive)
      }
    })
  })
}
