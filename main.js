import { headerSlider } from './src/js/libs/swiper';
import { mainCompanySlider } from './src/js/libs/swiper';
import { mainHotSlider } from './src/js/libs/swiper';
import { mainWinterSlider} from './src/js/libs/swiper';
import { mainSummerSlider} from './src/js/libs/swiper';
import '/src/js/components/header.js';
import '/src/js/modules/counter.js';
import './src/js/components/search.js';


document.addEventListener('DOMContentLoaded',()=>{
    headerSlider()
});

document.addEventListener('DOMContentLoaded',()=>{
    mainCompanySlider()
})

document.addEventListener('DOMContentLoaded',()=>{
    mainHotSlider()
})

document.addEventListener('DOMContentLoaded',()=>{
    mainWinterSlider()
})

document.addEventListener('DOMContentLoaded',()=>{
    mainSummerSlider()
})


