import { initializeDropdowns } from '/src/js/modules/search/dropdown'
import { initializeCounters } from '/src/js/modules/search/counter'
import { initializeDatePicker } from '/src/js/modules/search/datePicker'
import { initializeAdvancedSearch } from '/src/js/modules/search/advancedSearch'
import { priceSlider } from '/src/js/modules/search/priceSlider'

document.addEventListener('DOMContentLoaded', () => {
  initializeDropdowns()
  initializeCounters()
  initializeDatePicker()
  initializeAdvancedSearch()
  priceSlider()
})

// function toggleDropdown(dropdown) {
//     dropdown.classList.toggle('dropdown--open');
// }

// function setDropdownValue(dropdown, value) {
//     dropdown.querySelector('.dropdown__current').textContent = value;
//     dropdown.classList.remove('dropdown--open');
// }

// document.querySelectorAll('.dropdown__row').forEach(function(row) {
//     row.addEventListener('click', function() {
//         toggleDropdown(this.parentElement);
//     });
// });

// document.querySelectorAll('.dropdown__list .dropdown__item').forEach(function(item) {
//     item.addEventListener('click', function() {
//         const dropdown = this.closest('.dropdown');
//         setDropdownValue(dropdown, this.textContent);
//     });
// });

// window.addEventListener('click', function(e) {
//     document.querySelectorAll('.dropdown').forEach(function(dropdown) {
//         if (!dropdown.contains(e.target)) {
//             dropdown.classList.remove('dropdown--open');
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   function setupCounter(counterId, displayId, incrementId, decrementId, max = 10) {
//     const counter = document.getElementById(counterId);
//     const display = document.getElementById(displayId);
//     const incrementButton = document.getElementById(incrementId);
//     const decrementButton = document.getElementById(decrementId);

//     incrementButton.addEventListener("click", function () {
//       let currentValue = parseInt(counter.textContent, 10);
//       if (currentValue < max) {
//         currentValue++;
//         counter.textContent = currentValue;
//         display.textContent = currentValue;
//       }
//     });

//     decrementButton.addEventListener("click", function () {
//       let currentValue = parseInt(counter.textContent, 10);
//       if (currentValue > 0) {
//         currentValue--;
//         counter.textContent = currentValue;
//         display.textContent = currentValue;
//       }
//     });
//   }

//   setupCounter('adults-counter-value', 'adults-display', 'adults-increment', 'adults-decrement');
//   setupCounter('kids-counter-value', 'kids-display', 'kids-increment', 'kids-decrement');
// });

// // calendar
// document.addEventListener('DOMContentLoaded', function() {
//   var datePicker = flatpickr("#date-picker", {
//     dateFormat: "d.m.Y",
//     defaultDate: "16.08.2024",
//     onChange: function(selectedDates, dateStr, instance) {
//       document.getElementById("selected-date").innerText = dateStr;
//     },
//     locale: "ru",
//   });

//   document.getElementById('date-picker').addEventListener('click', function() {
//     datePicker.open();
//   });
// });

// //Расширеный поиск

// document.addEventListener('DOMContentLoaded', function() {
//   const searchButton = document.querySelector('.search__advance--search');
//   const closeButton = document.querySelector('.search__btn-close');
//   const searchLine = document.querySelector('.search__line');
//   const searchPanel = document.querySelector('.search-row__panel');

//   searchButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     searchLine.style.display = 'block';
//     closeButton.style.display = 'inline-block';
//     searchPanel.style.display = 'block';
//     searchButton.classList.add('active');
//   });

//   closeButton.addEventListener('click', function(e) {
//     e.preventDefault();
//     searchLine.style.display = 'none';
//     closeButton.style.display = 'none';
//     searchPanel.style.display = 'none';
//     searchButton.classList.remove('active');
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   console.log('DOM fully loaded and parsed');
//   priceSlider();
// });

// function priceSlider() {
//   console.log('Initializing price slider...');

//   const slider = document.querySelector('.category__slider');

//   if (!slider) {
//     console.error('Slider element not found');
//     return;
//   }

//   console.log('Slider element found, initializing noUiSlider...');

//   // Инициализация ползунка
//   noUiSlider.create(slider, {
//     range: {
//       'min': 300,
//       'max': 6000,
//     },
//     start: [1700, 3500],
//     connect: true,
//     tooltips: [true, true],
//     step: 200,
//     format: {
//       to: function (value) {
//         return Math.round(value) + '€';
//       },
//       from: function (value) {
//         return Math.round(value);
//       },
//     }
//   });

//   slider.noUiSlider.on('update', function (values, handle) {
//     console.log(`Handle ${handle} moved to ${values[handle]}`);
//   });

//   console.log('Slider initialized successfully');
// }

// document.querySelectorAll('.category__btns--svg').forEach(function(button) {
//   button.addEventListener('click', function() {
//     this.classList.toggle('clicked');
//   });
// });
