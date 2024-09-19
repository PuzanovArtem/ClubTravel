// class Counter {
//   constructor({ selector, initCount = 0, step = 1, displaySelector = null }) {
//     const parent = document.querySelector(selector)

//     this.count = initCount
//     this.step = step

//     this.refs = {
//       buttonDecrement: parent.querySelector('button[data-action="decrement"]'),
//       buttonIncrement: parent.querySelector('button[data-action="increment"]'),
//       spanCount: parent.querySelector('span'),
//       displayElement: displaySelector ? document.querySelector(displaySelector) : null,
//     }

//     this.addListener()
//     this.updateCount()
//   }

//   updateCount() {
//     this.refs.spanCount.textContent = this.count
//     if (this.refs.displayElement) {
//       this.refs.displayElement.textContent = this.count
//     }
//   }

//   addListener() {
//     this.refs.buttonDecrement.addEventListener('click', this.onDecrement.bind(this))
//     this.refs.buttonIncrement.addEventListener('click', this.onIncrement.bind(this))
//   }

//   onDecrement() {
//     this.count -= this.step
//     this.updateCount()
//   }

//   onIncrement() {
//     this.count += this.step
//     this.updateCount()
//   }
// }

// // Инициализация счетчиков с передачей значения
// new Counter({ selector: '#counter-1', initCount: 0, step: 1, displaySelector: '#adults-display' })
// new Counter({ selector: '#counter-3', initCount: 0, step: 1, displaySelector: '#kids-display' })
// new Counter({ selector: '#counter-2', initCount: 0, step: 1, displaySelector: '#kids-display' })
// new Counter({ selector: '#counter-4', initCount: 0, step: 1, displaySelector: '#kids-display' })
// new Counter({ selector: '#counter-5', initCount: 0, step: 1, displaySelector: '#kids-display' })
// new Counter({ selector: '#counter-6', initCount: 0, step: 1, displaySelector: '#kids-display' })
// new Counter({ selector: '#counter-7', initCount: 0, step: 1, displaySelector: '#kids-display' })

// // Инициализация счетчика без передачи значения
// // new Counter({ selector: '#counter-3', initCount: 0, step: 1 }); // Без displaySelector



class Counter {
  constructor({ selector, initCount = 0, step = 1, displaySelector = null, onUpdate = null }) {
    const parent = document.querySelector(selector)

    this.count = initCount
    this.step = step
    this.onUpdate = onUpdate

    this.refs = {
      buttonDecrement: parent.querySelector('button[data-action="decrement"]'),
      buttonIncrement: parent.querySelector('button[data-action="increment"]'),
      spanCount: parent.querySelector('span'),
      displayElement: displaySelector ? document.querySelector(displaySelector) : null,
    }

    this.addListener()
    this.updateCount()
  }

  updateCount() {
    this.refs.spanCount.textContent = this.count
    if (this.refs.displayElement) {
      this.refs.displayElement.textContent = this.count
    }
    if (this.onUpdate) {
      this.onUpdate()
    }
  }

  addListener() {
    this.refs.buttonDecrement.addEventListener('click', this.onDecrement.bind(this))
    this.refs.buttonIncrement.addEventListener('click', this.onIncrement.bind(this))
  }

  onDecrement() {
    if (this.count > 0) {
      this.count -= this.step
      this.updateCount()
    }
  }

  onIncrement() {
    this.count += this.step
    this.updateCount()
  }
}

function updateTotalChildren() {
  const counters = document.querySelectorAll('[data-counter-type="child"] span')
  let totalChildren = 0

  counters.forEach(counter => {
    totalChildren += parseInt(counter.textContent, 10)
  })

  document.getElementById('kids-display').textContent = totalChildren
}

new Counter({ selector: '#counter-1', initCount: 0, step: 1, displaySelector: '#adults-display' })
new Counter({
  selector: '#counter-2',
  initCount: 0,
  step: 1,
  displaySelector: '#kids-display',
  onUpdate: updateTotalChildren,
  dataCounterType: 'child',
})


function initCounterIfExists({ selector, initCount, step, displaySelector, onUpdate, dataCounterType }) {
  const parent = document.querySelector(selector);
  if (parent) {
    new Counter({
      selector,
      initCount,
      step,
      displaySelector,
      onUpdate,
      dataCounterType
    });
  }
}

// Ініціалізація лічильників тільки якщо елементи існують
initCounterIfExists({
  selector: '#counter-3',
  initCount: 0,
  step: 1,
  displaySelector: '#kids-display',
  onUpdate: updateTotalChildren,
  dataCounterType: 'child',
});

initCounterIfExists({
  selector: '#counter-4',
  initCount: 0,
  step: 1,
  displaySelector: '#kids-display',
  onUpdate: updateTotalChildren,
  dataCounterType: 'child',
});

initCounterIfExists({
  selector: '#counter-5',
  initCount: 0,
  step: 1,
  displaySelector: '#kids-display',
  onUpdate: updateTotalChildren,
  dataCounterType: 'child',
});

initCounterIfExists({
  selector: '#counter-6',
  initCount: 0,
  step: 1,
  displaySelector: '#kids-display',
  onUpdate: updateTotalChildren,
  dataCounterType: 'child',
});

initCounterIfExists({
  selector: '#counter-7',
  initCount: 0,
  step: 1,
  displaySelector: '#kids-display',
  onUpdate: updateTotalChildren,
  dataCounterType: 'child',
});


//  document.body.insertAdjacentHTML('beforeend', '<div>Загальна кількість дітей: <span id="total-children-display">0</span></div>');

// export const secondCounter = () => {
//   new Counter({
//     selector: '#counter-3',
//     initCount: 0,
//     step: 1,
//     displaySelector: '#kids-display',
//     onUpdate: updateTotalChildren,
//     dataCounterType: 'child',
//   })
//   new Counter({
//     selector: '#counter-4',
//     initCount: 0,
//     step: 1,
//     displaySelector: '#kids-display',
//     onUpdate: updateTotalChildren,
//     dataCounterType: 'child',
//   })
//   new Counter({
//     selector: '#counter-5',
//     initCount: 0,
//     step: 1,
//     displaySelector: '#kids-display',
//     onUpdate: updateTotalChildren,
//     dataCounterType: 'child',
//   })
//   new Counter({
//     selector: '#counter-6',
//     initCount: 0,
//     step: 1,
//     displaySelector: '#kids-display',
//     onUpdate: updateTotalChildren,
//     dataCounterType: 'child',
//   })
//   new Counter({
//     selector: '#counter-7',
//     initCount: 0,
//     step: 1,
//     displaySelector: '#kids-display',
//     onUpdate: updateTotalChildren,
//     dataCounterType: 'child',
//   })
// }
