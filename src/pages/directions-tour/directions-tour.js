import { Counter, updateTotalChildren } from '../../js/modules/counter.js';
import { checkboxFilter } from '../../js/modules/checkbox.js';
import { header } from '../../js/components/header.js';
import { initSearchBar } from '../../js/components/search.js';

document.addEventListener('DOMContentLoaded', () => {
    header();
    checkboxFilter();
    initSearchBar();

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