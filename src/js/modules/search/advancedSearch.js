export function initializeAdvancedSearch() {
  const searchButton = document.querySelector('.search-row__sub')

  const parent = document.querySelector('.search-row')

  searchButton.addEventListener('click', e => {
    e.preventDefault()

    parent.classList.toggle('active')
  })
}
