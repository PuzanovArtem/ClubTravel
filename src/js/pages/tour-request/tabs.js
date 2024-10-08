export function initTabs() {
  const tabs = document.querySelectorAll('.form__tab')
  const forms = document.querySelectorAll('.form__state')

  // Функция для удаления активных классов
  function removeActiveClasses() {
    tabs.forEach(tab => tab.classList.remove('active'))
    forms.forEach(form => form.classList.remove('active'))
  }

  // Добавляем обработчики событий для кнопок табов
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      removeActiveClasses() // Удаляем активные классы

      // Добавляем активные классы к нажатой кнопке и соответствующей форме
      tab.classList.add('active')
      forms[index].classList.add('active')
    })
  })
}
