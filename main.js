import { Counter, updateTotalChildren } from './src/js/modules/counter.js'
import { headerSlider, mainCompanySlider, mainHotSlider, mainSummerSlider, mainWinterSlider } from '/src/js/libs/swiper'

// import { header } from './src/js/components/header.js'

import { initSearchBar } from './src/js/components/search'
document.addEventListener('DOMContentLoaded', () => {
  // header()
  headerSlider()
  mainCompanySlider()
  mainHotSlider()
  mainWinterSlider()
  mainSummerSlider()
  initSearchBar()

  new Counter({ selector: '#counter-1', initCount: 0, step: 1, displaySelector: '#adults-display' })

  new Counter({
    selector: '#counter-2',
    initCount: 0,
    step: 1,
    displaySelector: '#kids-display',
    onUpdate: updateTotalChildren,
    dataCounterType: 'child',
  })
})

document.addEventListener('DOMContentLoaded', () => {
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
})
