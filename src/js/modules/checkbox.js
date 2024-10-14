export const checkboxFilter = () => {
  const cards = document.querySelectorAll('.season-tours__card')
  const checkboxes = document.querySelectorAll('.directions__checkbox input')
  const allCheckbox = document.querySelector('input[data-f="all"]')

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.dataset.f !== 'all' && checkbox.checked) {
        allCheckbox.checked = false
      }

      if (checkbox.dataset.f === 'all' && checkbox.checked) {
        checkboxes.forEach(box => {
          if (box !== allCheckbox) {
            box.checked = false
          }
        })
      }

      const selectedCountries = Array.from(checkboxes)
        .filter(checkbox1 => checkbox1.checked)
        .map(checkbox2 => checkbox2.dataset.f)

      if (selectedCountries.includes('all')) {
        cards.forEach(card => {
          card.style.display = 'block'
        })
      } else {
        cards.forEach(card => {
          const cardCountry = card.classList[1]

          if (selectedCountries.includes(cardCountry)) {
            card.style.display = 'block'
          } else {
            card.style.display = 'none'
          }
        })
      }
    })
  })
}
