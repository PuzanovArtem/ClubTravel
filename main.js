import '/src/js/modules/counter.js'
import {
  headerSlider,
  mainCompanySlider,
  mainHotSlider,
  mainSummerSlider,
  mainWinterSlider,
} from './src/js/libs/swiper'

import { header } from './src/js/components/header.js'

import { initSearchBar } from './src/js/components/search'
document.addEventListener('DOMContentLoaded', () => {
  header()
  headerSlider()
  mainCompanySlider()
  mainHotSlider()
  mainWinterSlider()
  mainSummerSlider()
  initSearchBar()
})
