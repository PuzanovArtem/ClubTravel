export function initializeAdvancedSearch() {
  const searchButton = document.querySelector('.search__advance--search')

  const parent = document.querySelector('.search-row')

  searchButton.addEventListener('click', e => {
    e.preventDefault()

    parent.classList.toggle('active')
  })
}
