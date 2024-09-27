export const header = () => {
  const burger = document.querySelector('.burger')
  const sideMenu = document.querySelector('.sidebar')

  if (!burger || !sideMenu) {
    console.error('Burger or sidebar not found')
    return
  }

  burger.addEventListener('click', () => {
    const isActive = sideMenu.classList.contains('sidebar_active')

    document.body.style.overflow = isActive ? '' : 'hidden'
    sideMenu.classList.toggle('sidebar_active')
    burger.classList.toggle('burger_active')
  })

  document.addEventListener('click', event => {
    const isOutClick =
      sideMenu.classList.contains('sidebar_active') &&
      !sideMenu.contains(event.target) &&
      !burger.contains(event.target)

    if (isOutClick) {
      sideMenu.classList.remove('sidebar_active')
      burger.classList.remove('burger_active')
      document.body.style.overflow = ''
    }
  })
}
