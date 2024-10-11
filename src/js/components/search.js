// import { SearchCalendar } from '/src/js/modules/search/datePicker'
import { initializeAdvancedSearch } from '/src/js/modules/search/advancedSearch'
import { initializeDropdowns } from '/src/js/modules/search/dropdown'
import { priceSlider } from '/src/js/modules/search/priceSlider'

export const initSearchBar = () => {
  initializeDropdowns()
  // new SearchCalendar()
  initializeAdvancedSearch()
  priceSlider()
}
