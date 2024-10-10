function setupDropdownToggle(dropDown, btn) {
  btn.addEventListener('click', function () {
    dropDown.classList.toggle('drop-country_active')
  })

  document.addEventListener('click', function (e) {
    if (!dropDown.contains(e.target) && !btn.contains(e.target)) {
      dropDown.classList.remove('drop-country_active')
    }
  })
}

function setupAccordion(allAccordions, countryMainDrop, tourMainDrop, dropDown) {
  allAccordions.forEach(function (accordion) {
    const accordionBtn = accordion.querySelector('.accordion__btn')
    const liItems = accordion.querySelectorAll('li')
    const city = accordion.querySelector('.accordion__country').textContent

    accordionBtn.addEventListener('click', function () {
      accordion.classList.toggle('accordion_active')
    })

    liItems.forEach(function (li) {
      li.addEventListener('click', function () {
        countryMainDrop.textContent = city
        tourMainDrop.textContent = li.textContent
        dropDown.classList.remove('drop-country_active')
        document.dispatchEvent(new Event('selectTour'))
      })
    })
  })
}

export function initializeDropCountry() {
  const dropDown = document.querySelector('.drop-country')
  const countryMainDrop = document.querySelector('.drop-country__county')
  const tourMainDrop = document.querySelector('.drop-country__tour')
  const btn = document.querySelector('.drop-country__btn')
  const allAccordions = document.querySelectorAll('.accordion')

  setupDropdownToggle(dropDown, btn)
  setupAccordion(allAccordions, countryMainDrop, tourMainDrop, dropDown)
}
