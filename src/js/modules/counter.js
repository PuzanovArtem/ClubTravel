export class Counter {
  constructor({ selector, initCount = 0, step = 1, displaySelector = null, onUpdate = null }) {
    const parent = document.querySelector(selector);

    if (!parent) {
      return; 
    }

    this.count = initCount;
    this.step = step;
    this.onUpdate = onUpdate;

    this.refs = {
      buttonDecrement: parent.querySelector('button[data-action="decrement"]'),
      buttonIncrement: parent.querySelector('button[data-action="increment"]'),
      spanCount: parent.querySelector('span'),
      displayElement: displaySelector ? document.querySelector(displaySelector) : null,
    };

    this.addListener();
    this.updateCount();
  }

  updateCount() {
    this.refs.spanCount.textContent = this.count;
    if (this.refs.displayElement) {
      this.refs.displayElement.textContent = this.count;
    }
    if (this.onUpdate) {
      this.onUpdate();
    }
  }

  addListener() {
    this.refs.buttonDecrement.addEventListener('click', this.onDecrement.bind(this));
    this.refs.buttonIncrement.addEventListener('click', this.onIncrement.bind(this));
  }

  onDecrement() {
    if (this.count > 0) {
      this.count -= this.step;
      this.updateCount();
    }
  }

  onIncrement() {
    this.count += this.step;
    this.updateCount();
  }
}

export function updateTotalChildren() {
  const counters = document.querySelectorAll('[data-counter-type="child"] span');
  let totalChildren = 0;

  counters.forEach(counter => {
    totalChildren += parseInt(counter.textContent, 10);
  });

  document.getElementById('kids-display').textContent = totalChildren;
}





