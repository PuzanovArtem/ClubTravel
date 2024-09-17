export function initializeAdvancedSearch() {
  const searchButton = document.querySelector('.search__advance--search')
  const closeButton = document.querySelector('.search__btn-close')
  const searchLine = document.querySelector('.search__line')
  const searchPanel = document.querySelector('.search-row__panel')
  // const parent = document.querySelector('.search-row')

  // searchButton.addEventListener('click', e => {
  //   e.preventDefault()

  //   parent.classList.toggle('active')
  // })

  searchButton.addEventListener('click', function (e) {
    e.preventDefault()

    searchLine.style.display = 'block'
    closeButton.style.display = 'inline-block'
    searchPanel.style.display = 'block'

    searchButton.classList.add('active')
  })

  closeButton.addEventListener('click', function (e) {
    e.preventDefault()

    searchLine.style.display = 'none'
    closeButton.style.display = 'none'
    searchPanel.style.display = 'none'

    searchButton.classList.remove('active')
  })
}
