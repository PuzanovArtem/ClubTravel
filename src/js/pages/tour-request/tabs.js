export function initTabs() {
  const tabs = document.querySelectorAll('.form__tab')
  const forms = document.querySelectorAll('.form__state')

  function removeActiveClasses() {
    tabs.forEach(tab => tab.classList.remove('active'))
    forms.forEach(form => form.classList.remove('active'))
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      removeActiveClasses()

      tab.classList.add('active')
      forms[index].classList.add('active')
    })
  })
}
