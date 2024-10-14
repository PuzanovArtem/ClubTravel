export const hotDeals = () => {
  const elements = {
    hotDealsRow: document.querySelectorAll('.hot-deals__body-row'),
    hotDealsBtn: document.querySelectorAll('.hot-deals__body-btn'),
    hotDealsAddition: document.querySelectorAll('.hot-deals__addition'),
    hotDealsAdditionRow: document.querySelectorAll('.hotDeals__addition-body-row'),
    hotDealsAdditionDropDown: document.querySelectorAll('.hot-deals__addition-body-dropdown'),
    hotDealsDropDown: document.querySelectorAll('.hot-deals__dropdown'),
  }

  const toggleClass = (collection, index, activeClass) => {
    if (collection[index]) {
      collection.forEach((elem, i) => {
        if (i !== index) elem.classList.remove(activeClass)
      })
      collection[index].classList.toggle(activeClass)
    }
  }

  const toggleButtonState = index => {
    if (elements.hotDealsBtn[index]) {
      elements.hotDealsBtn.forEach((btn, i) => {
        btn.innerHTML = i === index && !btn.classList.contains('hot-deals__body-btn_active') ? 'Закрыть' : 'Открыть'
      })
    }
  }

  const updateDropdownText = index => {
    const dropdown = elements.hotDealsAdditionDropDown[index]
    if (dropdown) {
      const textElement = dropdown.firstElementChild
      if (textElement) {
        textElement.textContent = !dropdown.classList.contains('hot-deals__addition-body-dropdown_active')
          ? 'скрыть предложения'
          : 'открыть предложения'
      }
    }
  }

  elements.hotDealsBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      toggleClass(elements.hotDealsRow, index, 'hot-deals__body-row_active')
      toggleClass(elements.hotDealsBtn, index, 'hot-deals__body-btn_active')
      toggleClass(elements.hotDealsAddition, index, 'hot-deals__addition_active')
      toggleButtonState(index)
    })
  })

  elements.hotDealsAdditionDropDown.forEach((dropdown, index) => {
    dropdown.addEventListener('click', () => {
      toggleClass(elements.hotDealsAdditionDropDown, index, 'hot-deals__addition-body-dropdown_active')
      toggleClass(elements.hotDealsAdditionRow, index, 'hot-deals__addition-body-row_active')
      toggleClass(elements.hotDealsDropDown, index, 'hot-deals__dropdown_active')
      updateDropdownText(index)
    })
  })
}
