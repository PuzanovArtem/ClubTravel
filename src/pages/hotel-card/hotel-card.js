import '../../js/components/search.js';
import { hotelCardSlider, mainHotSlider } from '../../js/libs/swiper.js';
import { changePlace } from '../../js/pages/hotel-card/hotel-card-sidebar.js';
import { header } from '../../js/components/header.js';
import { select } from '../../js/components/select.js';


document.addEventListener('DOMContentLoaded', () => {
    header();
    hotelCardSlider();
    mainHotSlider();
    changePlace();
    select;
})