import '../../js/components/search.js';
import '../../js/modules/counter.js';
import { hotelCardSlider, mainHotSlider } from '../../js/libs/swiper.js';
import { changePlace } from '../../js/pages/hotel-card/hotel-card-sidebar.js';
import { header } from '../../js/components/header.js';
import { manageSelects } from '../../js/modules/manage-selects.js';
import { select } from '../../js/components/select.js';



document.addEventListener('DOMContentLoaded', () => {
    header();
    hotelCardSlider();
    mainHotSlider();
    changePlace();
    select;
    manageSelects();
})