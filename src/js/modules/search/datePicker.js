import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import { Russian } from 'flatpickr/dist/l10n/ru.js'

export function initializeDatePicker() {
  const datePicker = flatpickr('#date-picker', {
    dateFormat: 'd.m.Y',
    defaultDate: '16.08.2024',
    onChange: function (selectedDates, dateStr, instance) {
      document.getElementById('selected-date').innerText = dateStr
    },
    locale: Russian,
  })

  document.getElementById('date-picker').addEventListener('click', function () {
    datePicker.open()
  })
}
