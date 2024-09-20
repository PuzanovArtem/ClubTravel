import '/src/js/modules/counter.js'
import './src/js/components/search.js'
import {
  headerSlider,
  mainCompanySlider,
  mainHotSlider,
  mainSummerSlider,
  mainWinterSlider,
} from './src/js/libs/swiper'

import { header } from './src/js/components/header.js'

document.addEventListener('DOMContentLoaded', () => {
  header()
  headerSlider()
  mainCompanySlider()
  mainHotSlider()
  mainWinterSlider()
  mainSummerSlider()
})
