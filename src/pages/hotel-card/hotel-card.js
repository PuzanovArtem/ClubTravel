import { Counter, updateTotalChildren } from '../../js/modules/counter.js'
import { hotelCardSlider, mainHotSlider } from '../../js/libs/swiper.js'
import { changePlace } from '../../js/pages/hotel-card/hotel-card-sidebar.js'
import { header } from '../../js/components/header.js'
import { initSearchBar } from '../../js/components/search.js'
import { manageSelects } from '../../js/modules/manage-selects.js'
import { select } from '../../js/components/select.js'

document.addEventListener('DOMContentLoaded', () => {
  header();
  hotelCardSlider();
  mainHotSlider();
  changePlace();
  select
  manageSelects();
  initSearchBar();
  
  new Counter({ selector: '#counter-1', initCount: 0, step: 1, displaySelector: '#adults-display' })

  for (let i = 2; i <= 7; i++) {
    new Counter({
      selector: `#counter-${i}`,
      initCount: 0,
      step: 1,
      displaySelector: '#kids-display',
      onUpdate: updateTotalChildren,
      dataCounterType: 'child',
    })
  }
})
