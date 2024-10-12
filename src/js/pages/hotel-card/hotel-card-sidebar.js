export const changePlace = () => {
  function handleResize(event) {
    const firstBlock = document.querySelector('.hotel-card-sidebar__first-block')
    const cardInfo = document.querySelector('.hotel-card-info__wrapper')
    const cardSidebar = document.querySelector('.hotel-card-sidebar')

    if (!event.matches) {
      cardSidebar.insertBefore(firstBlock, cardSidebar.firstChild)
    } else {
      cardInfo.insertBefore(firstBlock, cardInfo.firstChild)
    }
  }

  const mediaQuery = window.matchMedia('(max-width: 900px)')

  mediaQuery.addEventListener('change', handleResize)
  handleResize(mediaQuery)
}
