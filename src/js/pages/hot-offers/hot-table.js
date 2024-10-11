export const hotDeals = () => {
  const hotDealsRow = document.querySelectorAll('.hot-deals__body-row')
  const hotDealsBtn = document.querySelectorAll('.hot-deals__body-btn')
  const hotDealsAddition = document.querySelectorAll('.hot-deals__addition')
  const hotDealsAdditionRow = document.querySelectorAll('.hotDeals__addition-body-row')
  const hotDealsAdditionDropDown = document.querySelectorAll('.hot-deals__addition-body-dropdown')
  const hotDealsDropDown = document.querySelectorAll('.hot-deals__dropdown')
  const hotDealsIcon = document.querySelectorAll('.hot-deals__icon--triangle-down') // Находим иконку

  const toggleActiveClassForHotDealsRow = index => {
    if (!hotDealsRow[index].classList.contains('hot-deals__body-row_active')) {
      hotDealsRow.forEach(elem => {
        if (elem.classList.contains('hot-deals__body-row_active')) {
          elem.classList.remove('hot-deals__body-row_active')
        }
      })
      hotDealsRow[index].classList.add('hot-deals__body-row_active')
    } else {
      hotDealsRow[index].classList.remove('hot-deals__body-row_active')
    }
  }

  const toggleActiveClassForHotDealsBtn = index => {
    if (!hotDealsBtn[index].classList.contains('hot-deals__body-btn_active')) {
      hotDealsBtn.forEach(elem => {
        if (elem.classList.contains('hot-deals__body-btn_active')) {
          elem.classList.remove('hot-deals__body-btn_active')
        }
        elem.innerHTML = 'Открыть'
      })
      hotDealsBtn[index].classList.add('hot-deals__body-btn_active')
      hotDealsBtn[index].innerHTML = 'Закрыть'
    } else {
      hotDealsBtn[index].classList.remove('hot-deals__body-btn_active')
      hotDealsBtn[index].innerHTML = 'Открыть'
    }
  }

  const toggleActiveClassForHotDealsAddition = index => {
    if (!hotDealsAddition[index].classList.contains('hot-deals__addition_active')) {
      hotDealsAddition.forEach(elem => {
        if (elem.classList.contains('hot-deals__addition_active')) {
          elem.classList.remove('hot-deals__addition_active')
        }
      })
      hotDealsAddition[index].classList.add('hot-deals__addition_active')
    } else {
      hotDealsAddition[index].classList.remove('hot-deals__addition_active')
    }
  }

  hotDealsBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      toggleActiveClassForHotDealsRow(index)
      toggleActiveClassForHotDealsBtn(index)
      toggleActiveClassForHotDealsAddition(index)
    })
  })

  const toggleActiveClassForHotDealsAdditionDropDown = index => {
    if (!hotDealsAdditionDropDown[index].classList.contains('hot-deals__addition-body-dropdown_active')) {
      hotDealsAdditionDropDown.forEach(elem => {
        if (elem.classList.contains('hot-deals__addition-body-dropdown_active')) {
          elem.classList.remove('hot-deals__addition-body-dropdown_active')
          elem.childNodes[0].textContent = 'открыть предложения'
        }
      })
      hotDealsAdditionDropDown[index].classList.add('hot-deals__addition-body-dropdown_active')
      hotDealsAdditionDropDown[index].childNodes[0].textContent = 'скрыть предложения'
    } else {
      hotDealsAdditionDropDown[index].classList.remove('hot-deals__addition-body-dropdown_active')
      hotDealsAdditionDropDown[index].childNodes[0].textContent = 'открыть предложения'
    }
  }

  const toggleActiveClassForHotDealsAdditionRow = index => {
    if (
      !hotDealsAdditionDropDown[index].parentNode.parentNode.classList.contains('hot-deals__addition-body-row_active')
    ) {
      hotDealsAdditionRow.forEach(elem => {
        if (elem.classList.contains('hot-deals__addition-body-row_active')) {
          elem.classList.remove('hot-deals__addition-body-row_active')
        }
      })
      hotDealsAdditionDropDown[index].parentNode.parentNode.classList.add('hot-deals__addition-body-row_active')
    } else {
      hotDealsAdditionDropDown[index].parentNode.parentNode.classList.remove('hot-deals__addition-body-row_active')
    }
  }

  const toggleActiveClassForHotDealsDropDown = index => {
    if (!hotDealsDropDown[index].classList.contains('hot-deals__dropdown_active')) {
      hotDealsDropDown.forEach(elem => {
        if (elem.classList.contains('hot-deals__dropdown_active')) {
          elem.classList.remove('hot-deals__dropdown_active')
        }
      })
      hotDealsDropDown[index].classList.add('hot-deals__dropdown_active')
    } else {
      hotDealsDropDown[index].classList.remove('hot-deals__dropdown_active')
    }
  }

  const toggleIconRotation = index => {
    if (!hotDealsIcon[index].classList.contains('hot-deals__icon--rotated')) {
      hotDealsIcon[index].classList.add('hot-deals__icon--rotated')
    } else {
      hotDealsIcon[index].classList.remove('hot-deals__icon--rotated')
    }
  }

  hotDealsAdditionDropDown.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      toggleActiveClassForHotDealsAdditionDropDown(index)
      toggleActiveClassForHotDealsAdditionRow(index)
      toggleActiveClassForHotDealsDropDown(index)
      toggleIconRotation(index) // Переворот стрелки
    })
  })
}
