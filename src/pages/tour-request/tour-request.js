import { Counter, updateTotalChildrenForm } from '../../js/modules/counter.js'
import { header } from '/src/js/components/header.js'
import { initializeDropCountry } from '/src/js/pages/tour-request/drop-country '
import { initializeDropdowns } from '../../js/modules/search/dropdown.js'
import { manageSelects } from '../../js/modules/manage-selects.js'
import { select } from '../../js/components/select.js'
document.addEventListener('DOMContentLoaded', () => {
  header()
  initializeDropCountry()
  manageSelects()
  initializeDropdowns()
  select
  new Counter({ selector: '#counter-10', initCount: 0, step: 1 })

  new Counter({ selector: '#counter-3', initCount: 0, step: 1, displaySelector: '#adults-display-form' })

  for (let i = 4; i <= 9; i++) {
    new Counter({
      selector: `#counter-${i}`,
      initCount: 0,
      step: 1,
      displaySelector: '#kids-display-form',
      onUpdate: updateTotalChildrenForm,
      dataCounterType: 'child',
    })
  }
})
