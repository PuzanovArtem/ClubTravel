import { initializeDropdowns } from '/src/js/modules/search/dropdown'
import { initializeDatePicker } from '/src/js/modules/search/datePicker'
import { initializeAdvancedSearch } from '/src/js/modules/search/advancedSearch'
import { priceSlider } from '/src/js/modules/search/priceSlider'



export const initSearchBar = () => {
  initializeDropdowns()
  initializeDatePicker()
  initializeAdvancedSearch()
  priceSlider()
}