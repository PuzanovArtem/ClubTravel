import '../../js/components/search.js';
import '../../js/modules/counter.js';
import { accordion } from '../../js/modules/accordion.js';
import { calendarSearch } from '../../js/modules/vcalendar.js';
import { cardSlider } from '../../js/libs/swiper.js';
import { header } from '../../js/components/header.js';
import { select } from '../../js/components/select.js';




document.addEventListener('DOMContentLoaded', () => {
    header();
    cardSlider();
    accordion();
    calendarSearch();
    select;
})