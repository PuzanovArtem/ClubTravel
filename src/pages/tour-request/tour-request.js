import { Counter, updateTotalChildrenForm } from '../../js/modules/counter.js'
import { Food } from '../../js/pages/tour-request/food.js'
import { header } from '/src/js/components/header.js'
import { initStarSelection } from '../../js/pages/tour-request/stars.js'
import { initTabs } from '../../js/pages/tour-request/tabs.js'
import { initializeDropCountry } from '/src/js/pages/tour-request/drop-country '
import { initializeDropdowns } from '../../js/modules/search/dropdown.js'
import { manageSelects } from '../../js/modules/manage-selects.js'
import { select } from '../../js/components/select.js'
import { phoneValidator, tourValidator } from '../../js/libs/validator.js'
import { TourCalendar } from '../../js/pages/tour-request/calendar.js'

document.addEventListener('DOMContentLoaded', () => {
  header()
  initializeDropCountry()
  manageSelects()
  initializeDropdowns()
  select
  initTabs()
  initStarSelection()
  tourValidator()
  phoneValidator()
  new TourCalendar()
  new Food()
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
