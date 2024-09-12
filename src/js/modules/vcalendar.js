import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import multiMonthPlugin from '@fullcalendar/multimonth'
import ruLocale from '@fullcalendar/core/locales/ru'

export const calendarSearch = () =>  {
  const calendarEl = document.getElementById('calendar')
  const showCalendarBtn = document.getElementById('showCalendarBtn')
  const hideCalBtn = document.querySelector('.search-content__filter-cal-btn')
  const filter = document.querySelector('.search-content__filter-wrapper')
  const wrapperCal = document.querySelector('.search-content__filter-wrapper-cal')
  const calTitle = document.querySelector('.search-content__calendar-subtitle')
  let calendarVisible = false
  let calendar

  function initializeCalendar(months) {
    if (calendar) {
      calendar.destroy()
    }

    calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, multiMonthPlugin, interactionPlugin],
      
      initialView: 'multiMonthYear',
      
      locale: ruLocale,
      
      views: {
        multiMonthYear: {
          type: 'multiMonth',
          duration: { months: months },
          titleFormat: { year: 'numeric', month: 'long' },
        },
      },

      headerToolbar: {
        left: 'prev',
        right: 'next',
      },

      initialDate: '2024-06-01',

      events: [
        { title: '450€', start: '2024-06-22' },
        { title: '455€', start: '2024-06-15' },
        { title: '455€', start: '2024-07-27' },
        { title: '455€', start: '2024-07-20' },
        { title: '455€', start: '2024-08-17' },
        { title: '455€', start: '2024-08-24' },
        { title: '455€', start: '2024-09-21' },
        { title: '455€', start: '2024-09-28' },
      ],

      eventDidMount: function (info) {
        const dayEvents = info.el.closest('.fc-daygrid-day').querySelector('.fc-daygrid-day-events')

        if (dayEvents) {
          const customDiv = document.createElement('div')

          customDiv.classList.add('custom-div')

          customDiv.innerText = `${info.event.title}`

          dayEvents.appendChild(customDiv)
        }
      },

      dateClick: function (info) {
         const previouslySelected = document.querySelector('.fc-day-selected')

        if (previouslySelected) {
          previouslySelected.classList.remove('fc-day-selected')
        }

        info.dayEl.classList.add('fc-day-selected')

        const selectedDateEl = document.getElementById('selectedDate')

        const options = { year: 'numeric', month: 'long', day: 'numeric' }

        const formattedDate = info.date.toLocaleDateString('ru-RU', options)

        selectedDateEl.innerHTML = `Предложения на <span>${formattedDate}</span> от <span>455€</span>`
      },

      datesSet: function () {
        const titleElement = document.querySelector('.fc-toolbar-title')

        if (titleElement) {
          let [month, year] = titleElement.innerText.split(' ')

          month = month.charAt(0).toUpperCase() + month.slice(1)

          titleElement.innerText = `${month} ${year}`
        }
      },

      dayCellDidMount: function (info) {
        const dateStr = info.date.toISOString().split('T')[0]

        const hasEvent = calendar.getEvents().some(event => {

          const eventDateStr = event.start.toISOString().split('T')[0]

          return eventDateStr === dateStr
        })

        if (!hasEvent) {
          info.el.classList.add('fc-no-event')
        }
      },
    })

    if (calendarVisible) {
      calendar.render()
    }
  }

  function showCalendar() {
    calendarEl.classList.add('activeCal')

    calendar.render()

    calendarVisible = !calendarVisible

    calTitle.classList.add('active')

    wrapperCal.classList.add('active')

    filter.classList.add('nonactive')
  }

  showCalendarBtn.addEventListener('click', showCalendar)

  function hideCalendar() {
    calendarEl.classList.remove('activeCal')

    calTitle.classList.remove('active')

    setTimeout(() => {
      filter.classList.remove('nonactive')

      wrapperCal.classList.remove('active')
    }, '500')
  }

  hideCalBtn.addEventListener('click', hideCalendar)

  function handleResize() {
    const width = window.innerWidth
    if (width <= 650) {
      initializeCalendar(1)
    } else if (width <= 900) {
      initializeCalendar(2)
    } else if (width <= 1219) {
      initializeCalendar(3)
    } else {
      initializeCalendar(4)
    }
  }

  window.addEventListener('resize', handleResize)

  handleResize()
}
