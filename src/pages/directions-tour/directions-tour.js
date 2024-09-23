import '../../js/components/search.js';
import { Counter, updateTotalChildren } from '../../js/modules/counter.js';
import { header } from '../../js/components/header.js';

document.addEventListener('DOMContentLoaded', () => {
    header();

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