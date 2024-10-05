import { Counter, updateTotalChildren } from '/src/js/modules/counter'
import { header } from '/src/js/components/header'
import { hotDeals } from '/src/js/pages/hot-offers/hot-table'
import { initSearchBar } from '/src/js/components/search'

document.addEventListener('DOMContentLoaded', () => {
  header()
  initSearchBar()
  hotDeals()

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
