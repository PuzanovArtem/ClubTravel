export function initializeAdvancedSearch() {
  const searchButton = document.querySelector('.search-row__sub')
  const parent = document.querySelector('.search-row')
  const categoryButtons = document.querySelectorAll('.category__btns')

  searchButton.addEventListener('click', e => {
    e.preventDefault()
    parent.classList.toggle('active')
  })

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active')
    })
  })
}
