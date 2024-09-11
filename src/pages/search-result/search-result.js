import '../../js/components/select.js';
import '../../js/components/search.js';
import '../../js/components/header.js';
import { accordion } from '../../js/modules/accordion.js';
import { calendarSearch } from '../../js/modules/vcalendar.js';
import { cardSlider } from '../../js/libs/swiper.js';



document.addEventListener('DOMContentLoaded',() => {
    cardSlider()
    accordion()
    calendarSearch()
})