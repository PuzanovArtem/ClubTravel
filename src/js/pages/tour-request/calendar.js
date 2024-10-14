import AirDatepicker from 'air-datepicker'

export class TourCalendar {
  constructor() {
    this.calendar = document.querySelector('.calendar')
    this.calendarBtn = document.querySelector('.calendar__btn')
    this.calendarMain = document.querySelector('.calendar__main')
    this.startDateElem = document.getElementById('start-date')
    this.finalDateElem = document.getElementById('final-date')
    this.currentSelDate = new Date()
    this.currentNextDate = new Date()
    this.datepicker = undefined
    this.counterValueElem = document.querySelector('.form__counter-value')
    this.init()
  }

  init() {
    this.open()
    this.airDatepicker()
    this.initCounter()
  }

  newDate(start = true, finish = false) {
    if (start) {
      this.startDateElem.textContent = this.formatDate(this.currentSelDate)
      document.dispatchEvent(new Event('startDate'))
    } else {
      this.startDateElem.textContent = 'Выберите дату'
    }

    if (finish) {
      this.finalDateElem.textContent = this.formatDate(this.currentNextDate)
      document.dispatchEvent(new Event('finalDate'))
    } else {
      this.finalDateElem.textContent = 'Выберите дату'
    }
    this.updateCounter()
  }

  airDatepicker() {
    const context = this
    const maxDate = new Date().setFullYear(new Date().getFullYear() + 5)

    this.datepicker = new AirDatepicker('#el', {
      range: true,
      toggleSelected: true,
      multipleDatesSeparator: ' - ',
      minDate: new Date(),
      onSelect({ date }) {
        const selectedDates = date

        if (selectedDates[1]) {
          context.currentNextDate = new Date(selectedDates[1])
          context.newDate(true, true)
          context.datepicker?.update({
            minDate: new Date(),
            maxDate: maxDate,
          })
          context.calendar.classList.remove('calendar_active')
        } else if (selectedDates[0]) {
          context.currentSelDate = new Date(selectedDates[0])
          context.newDate()
          context.datepicker?.update({
            minDate: new Date(selectedDates[0]),
            maxDate: new Date(selectedDates[0]).setDate(selectedDates[0].getDate() + 18),
          })
        } else {
          context.datepicker?.update({
            minDate: new Date(),
            maxDate: maxDate,
          })
          context.newDate(false, false)
        }
      },
    })
  }

  updateCounter() {
    const daysBetween = Math.floor((this.currentNextDate - this.currentSelDate) / (1000 * 60 * 60 * 24))
    this.counterValueElem.textContent = daysBetween > 0 ? daysBetween : 0
  }

  initCounter() {
    const incrementBtn = document.querySelector('.form__counter-increment')
    const decrementBtn = document.querySelector('.form__counter-decrement')

    incrementBtn.addEventListener('click', () => {
      let currentCount = +this.counterValueElem.textContent
      if (currentCount < 18) {
        currentCount++
        this.counterValueElem.textContent = currentCount
        this.updateFinishDate(currentCount)
      }
    })

    decrementBtn.addEventListener('click', () => {
      let currentCount = +this.counterValueElem.textContent
      if (currentCount > 1) {
        currentCount--
        this.counterValueElem.textContent = currentCount
        this.updateFinishDate(currentCount)
      }
    })
  }

  updateFinishDate(num) {
    const finishDate = new Date(this.currentSelDate)
    finishDate.setDate(this.currentSelDate.getDate() + num)

    this.datepicker?.clear()
    this.datepicker?.selectDate(this.currentSelDate)
    this.datepicker?.selectDate(finishDate)
  }

  formatDate(date) {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const formatDay = day < 10 ? '0' + day : day
    const formatMonth = month < 10 ? '0' + month : month
    return `${formatDay}.${formatMonth}.${year}`
  }

  open() {
    this.calendarBtn.addEventListener('click', () => {
      this.calendar.classList.toggle('calendar_active')
    })

    document.addEventListener('click', e => {
      if (!this.calendar.contains(e.target) && !this.calendarBtn.contains(e.target)) {
        this.calendar.classList.remove('calendar_active')
      }
    })
  }
}
