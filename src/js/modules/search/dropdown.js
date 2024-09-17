export function toggleDropdown(dropdown) {
  dropdown.classList.toggle('dropdown--open')
}

export function setDropdownValue(dropdown, value) {
  dropdown.querySelector('.dropdown__current').textContent = value
  dropdown.classList.remove('dropdown--open')
}

export function initializeDropdowns() {
  const dropdownRows = document.querySelectorAll('.dropdown__row')
  const dropdownItems = document.querySelectorAll('.dropdown__list .dropdown__item')
  const dropdowns = document.querySelectorAll('.dropdown')

  dropdownRows.forEach(row => {
    row.addEventListener('click', () => {
      toggleDropdown(row.parentElement)
    })
  })

  dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      const dropdown = item.closest('.dropdown')
      setDropdownValue(dropdown, item.textContent)
    })
  })

  window.addEventListener('click', e => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('dropdown--open')
      }
    })
  })
}
