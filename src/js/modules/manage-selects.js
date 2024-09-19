export const manageSelects = () => {
  const addChildButton = document.querySelector('.hotel-card-sidebar__add-child')
  const selects = document.querySelectorAll('.hotel-card-sidebar__item--guests.hidden')
  let currentIndex = 0

  addChildButton.addEventListener('click', function () {
    if (currentIndex < selects.length) {
      selects[currentIndex].classList.remove('hidden')
      selects[currentIndex].classList.add('visible')
      currentIndex++
    }

    if (currentIndex === selects.length) {
      addChildButton.style.display = 'none'
    }
  })

  const deleteBtns = document.querySelectorAll('.icon--cross')

  deleteBtns.forEach(button => {
    button.addEventListener('click', function () {
      const selectContainer = this.closest('.hotel-card-sidebar__item--guests')

      if (selectContainer) {
        selectContainer.classList.add('hidden')
        selectContainer.classList.remove('visible')

        if (currentIndex > 0) {
          currentIndex--
          addChildButton.style.display = 'flex'
        }
      }
    })
  })
}

manageSelects()
