export function toggleDropdown(dropdown) {
  dropdown.classList.toggle('dropdown--open')
  const dropdownList = dropdown.querySelector('.dropdown__list')
  if (dropdown.classList.contains('dropdown--open')) {
    dropdownList.classList.add('active')
  } else {
    dropdownList.classList.remove('active')
  }
}

export function setDropdownValue(dropdown, value) {
  dropdown.querySelector('.dropdown__current').textContent = value
  dropdown.classList.remove('dropdown--open')
  dropdown.querySelector('.dropdown__list').classList.remove('active')
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
        dropdown.querySelector('.dropdown__list').classList.remove('active')
      }
    })
  })
}
