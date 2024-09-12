import '../../js/components/header.js';
import '../../js/components/search.js';
import { hotelCardSlider, mainHotSlider } from '../../js/libs/swiper.js';
import { changePlace } from '../../js/pages/hotel-card/hotel-card-sidebar.js';


document.addEventListener('DOMContentLoaded',() => {
    hotelCardSlider();
    mainHotSlider();
    changePlace();
})