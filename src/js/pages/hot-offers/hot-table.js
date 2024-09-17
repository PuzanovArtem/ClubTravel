// document.addEventListener('DOMContentLoaded', () => {
//   const hotDealsRow = document.querySelectorAll('.hot-deals__body-row')
//   const hotDealsBtn = document.querySelectorAll('.hot-deals__body-btn')

//   const hotDealsAddition = document.querySelectorAll('.hot-deals__addition')
//   const hotDealsAdditionRow = document.querySelectorAll('.hotDeals__addition-body-row')
//   const hotDealsAdditionDropDown = document.querySelectorAll('.hot-deals__addition-body-dropdown')
//   const hotDealsDropDown = document.querySelectorAll('.hot-deals__dropdown')

//   const toggleActiveClassForHotDealsRow = index => {
//     if (!hotDealsRow[index].classList.contains('hot-deals__body-row_active')) {
//       hotDealsRow.forEach(elem => {
//         elem.classList.contains('hot-deals__body-row_active')
//           ? elem.classList.remove('hot-deals__body-row_active')
//           : null
//       })

//       hotDealsRow[index].classList.add('hot-deals__body-row_active')
//     } else {
//       hotDealsRow[index].classList.remove('hot-deals__body-row_active')
//     }
//   }

//   const toggleActiveClassForHotDealsBtn = index => {
//     if (!hotDealsBtn[index].classList.contains('hot-deals__body-btn_active')) {
//       hotDealsBtn.forEach(elem => {
//         elem.classList.contains('hot-deals__body-btn_active')
//           ? elem.classList.remove('hot-deals__body-btn_active')
//           : null
//         elem.innerHTML = 'Открыть'
//       })

//       hotDealsBtn[index].classList.add('hot-deals__body-btn_active')
//       hotDealsBtn[index].innerHTML = 'закрыть'
//     } else {
//       hotDealsBtn[index].classList.remove('hot-deals__body-btn_active')
//       hotDealsBtn[index].innerHTML = 'Открыть'
//     }
//   }

//   const toggleActiveClassForHotDealsAddition = index => {
//     if (!hotDealsAddition[index].classList.contains('hot-deals__addition_active')) {
//       hotDealsAddition.forEach(elem => {
//         elem.classList.contains('hot-deals__addition_active')
//           ? elem.classList.remove('hot-deals__addition_active')
//           : null
//       })

//       hotDealsAddition[index].classList.add('hot-deals__addition_active')
//     } else {
//       hotDealsAddition[index].classList.remove('hot-deals__addition_active')
//     }
//   }

//   hotDealsBtn.forEach((elem, index) => {
//     elem.addEventListener('click', () => {
//       toggleActiveClassForHotDealsRow(index)
//       toggleActiveClassForHotDealsBtn(index)
//       toggleActiveClassForHotDealsAddition(index)
//     })
//   })

//   const toggleActiveClassForHotDealsAdditionDropDown = index => {
//     if (!hotDealsAdditionDropDown[index].classList.contains('hot-deals__addition-body-dropdown_active')) {
//       hotDealsAdditionDropDown.forEach(elem => {
//         elem.classList.contains('hot-deals__addition-body-dropdown_active')
//           ? elem.classList.remove('hot-deals__addition-body-dropdown_active')
//           : null

//         elem.childNodes[0].textContent = 'открыть предложения'
//       })

//       hotDealsAdditionDropDown[index].classList.add('hot-deals__addition-body-dropdown_active')
//       hotDealsAdditionDropDown[index].childNodes[0].textContent = 'скрыть предложения'
//     } else {
//       hotDealsAdditionDropDown[index].classList.remove('hot-deals__addition-body-dropdown_active')
//       hotDealsAdditionDropDown[index].childNodes[0].textContent = 'открыть предложения'
//     }
//   }

//   const toggleActiveClassForHotDealsAdditionRow = index => {
//     if (
//       !hotDealsAdditionDropDown[index].parentNode.parentNode.classList.contains('hot-deals__addition-body-row_active')
//     ) {
//       hotDealsAdditionRow.forEach(elem => {
//         elem.classList.contains('hot-deals__addition-body-row_active')
//           ? elem.classList.remove('hot-deals__addition-body-row_active')
//           : null
//       })
//       hotDealsAdditionDropDown[index].parentNode.parentNode.classList.add('hot-deals__addition-body-row_active')
//       console.log('add')
//     } else {
//       hotDealsAdditionDropDown[index].parentNode.parentNode.classList.remove('hot-deals__addition-body-row_active')
//       console.log('remove')
//     }
//   }

//   const toggleActiveClassForHotDealsDropDown = index => {
//     if (!hotDealsDropDown[index].classList.contains('hot-deals__dropdown_active')) {
//       hotDealsDropDown.forEach(elem => {
//         elem.classList.contains('hot-deals__dropdown_active')
//           ? elem.classList.remove('hot-deals__dropdown_active')
//           : null
//       })
//       hotDealsDropDown[index].classList.add('hot-deals__dropdown_active')
//     } else {
//       hotDealsDropDown[index].classList.remove('hot-deals__dropdown_active')
//     }
//   }

//   hotDealsAdditionDropDown.forEach((elem, index) => {
//     elem.addEventListener('click', () => {
//       toggleActiveClassForHotDealsAdditionDropDown(index)
//       toggleActiveClassForHotDealsAdditionRow(index)
//       toggleActiveClassForHotDealsDropDown(index)
//     })
//   })
// })


document.addEventListener('DOMContentLoaded', () => {
  const hotDealsRow = document.querySelectorAll('.hot-deals__body-row');
  const hotDealsBtn = document.querySelectorAll('.hot-deals__body-btn');
  const hotDealsAddition = document.querySelectorAll('.hot-deals__addition');
  const hotDealsAdditionDropDown = document.querySelectorAll('.hot-deals__addition-body-dropdown');
  const hotDealsDropDown = document.querySelectorAll('.hot-deals__dropdown');

  const toggleActiveClass = (elements, index, activeClass, defaultText, activeText) => {
    elements.forEach((elem, i) => {
      if (i === index) {
        elem.classList.toggle(activeClass);
        if (elem.tagName === 'BUTTON') {
          elem.innerHTML = elem.classList.contains(activeClass) ? activeText : defaultText;
        }
      } else {
        elem.classList.remove(activeClass);
        if (elem.tagName === 'BUTTON') {
          elem.innerHTML = defaultText;
        }
      }
    });
  };

  hotDealsBtn.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      toggleActiveClass(hotDealsRow, index, 'hot-deals__body-row_active');
      toggleActiveClass(hotDealsBtn, index, 'hot-deals__body-btn_active', 'Открыть', 'Закрыть');
      toggleActiveClass(hotDealsAddition, index, 'hot-deals__addition_active');
    });
  });

  hotDealsAdditionDropDown.forEach((elem, index) => {
    elem.addEventListener('click', () => {
      toggleActiveClass(hotDealsAdditionDropDown, index, 'hot-deals__addition-body-dropdown_active', 'открыть предложения', 'скрыть предложения');
      toggleActiveClass(document.querySelectorAll('.hot-deals__addition-body-row'), index, 'hot-deals__addition-body-row_active');
      toggleActiveClass(hotDealsDropDown, index, 'hot-deals__dropdown_active');
    });
  });
});
