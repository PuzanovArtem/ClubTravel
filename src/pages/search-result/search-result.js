import '../../js/components/search.js';
import { Counter, updateTotalChildren } from '../../js/modules/counter.js';
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