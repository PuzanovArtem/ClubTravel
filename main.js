import {
  headerSlider,
  mainCompanySlider,
  mainHotSlider,
  mainWinterSlider,
  mainSummerSlider,
} from './src/js/libs/swiper'

import {
  header,
} from './src/js/components/header.js'
  
import '/src/js/modules/counter.js'
import './src/js/components/search.js'

document.addEventListener('DOMContentLoaded', () => {
  header()
  headerSlider()
  mainCompanySlider()
  mainHotSlider()
  mainWinterSlider()
  mainSummerSlider()
})
