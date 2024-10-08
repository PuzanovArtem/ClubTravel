export class Food {
  constructor() {
    this.food = document.querySelector('.food')
    this.foodMain = document.querySelector('.food__list')
    this.allLi = this.food.querySelectorAll('li')
    this.currentSelect = document.querySelector('.food__btn-info')
    this.errorFood = document.querySelector('.form__error-food')
    this.init()
  }

  init() {
    this.setupSelect()
    this.setupOpen()
    this.setupObserver()
  }

  setupSelect() {
    this.allLi.forEach(item => {
      item.addEventListener('click', () => {
        this.currentSelect.textContent = item.textContent
        this.errorFood.classList.remove('form__error-food_active')
        document.dispatchEvent(new Event('selectFood'))
      })
    })
  }

  setupOpen() {
    this.food.addEventListener('click', () => {
      this.food.classList.toggle('food_active')
    })

    document.addEventListener('click', e => {
      if (!this.food.contains(e.target)) {
        this.food.classList.remove('food_active')
      }
    })
  }

  setupObserver() {
    const mainDropHeight = this.foodMain.offsetHeight

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (window.innerHeight > 700 && entry.boundingClientRect.top > 0) {
          if (entry.isIntersecting) {
            this.food.classList.add('food_bottom')
            this.food.classList.remove('food_top')
          } else {
            this.food.classList.add('food_top')
            this.food.classList.remove('food_bottom')
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: `0px 0px -${mainDropHeight + 30}px 0px`,
      threshold: 1,
    })

    document.querySelectorAll('.food__btn').forEach(item => {
      observer.observe(item)
    })
  }
}
