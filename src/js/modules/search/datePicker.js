import AirDatepicker from 'air-datepicker'
// import 'air-datepicker/air-datepicker.css'

export class SearchCalendar {
  constructor() {
    this.datePickerElement = document.getElementById('date-picker')
    this.selectedDateElem = document.getElementById('selected-date')
    this.datepickerContainer = null
    this.datepicker = null
    this.init()
  }

  init() {
    this.createDatepickerContainer()
    this.initDatepicker()
    this.addEventListeners()
  }

  createDatepickerContainer() {
    this.datepickerContainer = document.createElement('div')
    this.datepickerContainer.style.display = 'none'
    this.datepickerContainer.style.zIndex = '1000'
    this.datePickerElement.appendChild(this.datepickerContainer)
  }

  addEventListeners() {
    this.datePickerElement.addEventListener('click', e => {
      e.stopPropagation()
      this.toggleDatepicker()
    })

    document.addEventListener('click', e => {
      if (!this.datePickerElement.contains(e.target) && this.datepickerContainer.style.display === 'block') {
        this.hideDatepicker()
      }
    })
  }

  toggleDatepicker() {
    if (this.datepickerContainer.style.display === 'none') {
      this.showDatepicker()
    } else {
      this.hideDatepicker()
    }
  }

  showDatepicker() {
    this.datepickerContainer.style.display = 'block'
    this.datePickerElement.classList.add('active')
    if (this.datepicker) {
      this.datepicker.show()
    }
  }

  hideDatepicker() {
    this.datepickerContainer.style.display = 'none'
    this.datePickerElement.classList.remove('active')
    if (this.datepicker) {
      this.datepicker.hide()
    }
  }

  initDatepicker() {
    const context = this

    this.datepicker = new AirDatepicker(this.datepickerContainer, {
      autoClose: true,
      onSelect({ date }) {
        context.updateSelectedDate(date)
        context.hideDatepicker()
      },
    })
  }

  updateSelectedDate(date) {
    if (date) {
      const formattedDate = this.formatDate(date)
      this.selectedDateElem.textContent = formattedDate
    } else {
      this.selectedDateElem.textContent = 'Выберите дату'
    }
  }

  formatDate(date) {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const formatDay = day < 10 ? '0' + day : day
    const formatMonth = month < 10 ? '0' + month : month
    return `${formatDay}.${formatMonth}.${year}`
  }
}
