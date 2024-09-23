import './src/js/components/search.js'
import { Counter, updateTotalChildren } from './src/js/modules/counter.js'
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
  mainSummerSlider();
  
  new Counter({ selector: '#counter-1', initCount: 0, step: 1, displaySelector: '#adults-display' });
  
  new Counter({
  selector: '#counter-2',
  initCount: 0,
  step: 1,
  displaySelector: '#kids-display',
  onUpdate: updateTotalChildren,
  dataCounterType: 'child',
})
})
