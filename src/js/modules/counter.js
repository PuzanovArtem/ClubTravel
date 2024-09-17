class Counter {
  constructor({ selector, initCount = 0, step = 1, displaySelector = null }) {
    const parent = document.querySelector(selector)

    this.count = initCount
    this.step = step

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
  }

  addListener() {
    this.refs.buttonDecrement.addEventListener('click', this.onDecrement.bind(this))
    this.refs.buttonIncrement.addEventListener('click', this.onIncrement.bind(this))
  }

  onDecrement() {
    this.count -= this.step
    this.updateCount()
  }

  onIncrement() {
    this.count += this.step
    this.updateCount()
  }
}

// Инициализация счетчиков с передачей значения
new Counter({ selector: '#counter-1', initCount: 0, step: 1, displaySelector: '#adults-display' })
new Counter({ selector: '#counter-2', initCount: 0, step: 1, displaySelector: '#kids-display' })

// Инициализация счетчика без передачи значения
// new Counter({ selector: '#counter-3', initCount: 0, step: 1 }); // Без displaySelector
