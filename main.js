import {
  headerSlider,
  mainCompanySlider,
  mainHotSlider,
  mainWinterSlider,
  mainSummerSlider,
} from './src/js/libs/swiper'

import '/src/js/components/header.js'
import '/src/js/modules/counter.js'
import './src/js/components/search.js'

document.addEventListener('DOMContentLoaded', () => {
  headerSlider()
  mainCompanySlider()
  mainHotSlider()
  mainWinterSlider()
  mainSummerSlider()
})
