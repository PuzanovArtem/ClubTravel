// import { Calendar } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import multiMonthPlugin from "@fullcalendar/multimonth";
// import interactionPlugin from "@fullcalendar/interaction";

// document.addEventListener("DOMContentLoaded", function () {
//   var calendarEl = document.getElementById("calendar");
//   var showCalendarBtn = document.getElementById("showCalendarBtn");
//   var calendarVisible = false;
//   var calendar;

//   var calendar = new Calendar(calendarEl, {
//     plugins: [dayGridPlugin, multiMonthPlugin, interactionPlugin],
//     initialView: "multiMonthYear",
//     views: {
//       multiMonthYear: {
//         type: "multiMonth",

//         duration: { months: 4 },
//       },
//     },
//     headerToolbar: {
//       left: "prev",
//         right: "next",

//     },
//     initialDate: "2024-06-01",
//     events: [
//       { title: "450€", start: "2024-06-22" },
//       { title: "455€", start: "2024-06-15" },
//       { title: "455€", start: "2024-07-27" },
//       { title: "455€", start: "2024-07-20" },
//       { title: "455€", start: "2024-08-17" },
//         { title: "455€", start: "2024-08-24" },
//        { title: "455€", start: "2024-09-21" },
//       { title: "455€", start: "2024-09-28" },
//     ],
//     eventDidMount: function (info) {
//       let dayEvents = info.el
//         .closest(".fc-daygrid-day")
//         .querySelector(".fc-daygrid-day-events");
//       if (dayEvents) {
//         let customDiv = document.createElement("div");
//         customDiv.classList.add("custom-div");
//         customDiv.innerText = `${info.event.title}`;
//         dayEvents.appendChild(customDiv);
//       }
//     },

//     dateClick: function (info) {
//       info.dayEl.style.backgroundColor = "#F68521";
//       info.dayEl.style.color = "white";
//     },
//     dayCellDidMount: function (info) {
//       let dateStr = info.date.toISOString().split("T")[0];
//       let hasEvent = calendar.getEvents().some((event) => {
//         let eventDateStr = event.start.toISOString().split("T")[0];
//         return eventDateStr === dateStr;
//       });
//       if (!hasEvent) {
//         info.el.classList.add("fc-no-event");
//       }
//     },

//   });

//   function showCalendar() {
//     calendarEl.classList.toggle("activeCal");
//     calendar.render();

//     calendarVisible = !calendarVisible;
//   }

//     showCalendarBtn.addEventListener("click", showCalendar);

//     function handleResize() {
//         const width = window.innerWidth;
//         console.log(width);
//         if (width <= 600) {
//             console.log('hi');
//       calendar.views("multiMonthYear", { duration: { months: 1 } });
//     } else if (width <= 900) {
//       calendar.changeView("multiMonthYear", { duration: { months: 2 } });
//     } else {
//       calendar.changeView("multiMonthYear", { duration: { months: 4 } });
//     }
//   }

//   window.addEventListener('resize', handleResize);

//   handleResize();
// });

import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin from "@fullcalendar/interaction";

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var showCalendarBtn = document.getElementById("showCalendarBtn");
  const hideCalBtn = document.querySelector(".search-content__filter-cal-btn");
  const filter = document.querySelector(".search-content__filter-wrapper");
  const wrapperCal = document.querySelector(
    ".search-content__filter-wrapper-cal"
  );
  const calTitle = document.querySelector(".search-content__calendar-subtitle");
  var calendarVisible = false;
  var calendar;

  function initializeCalendar(months) {
    if (calendar) {
      calendar.destroy();
    }

    calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, multiMonthPlugin, interactionPlugin],
      initialView: "multiMonthYear",
      views: {
        multiMonthYear: {
          type: "multiMonth",
          duration: { months: months },
        },
      },
      headerToolbar: {
        left: "prev",
        right: "next",
      },
      initialDate: "2024-06-01",
      events: [
        { title: "450€", start: "2024-06-22" },
        { title: "455€", start: "2024-06-15" },
        { title: "455€", start: "2024-07-27" },
        { title: "455€", start: "2024-07-20" },
        { title: "455€", start: "2024-08-17" },
        { title: "455€", start: "2024-08-24" },
        { title: "455€", start: "2024-09-21" },
        { title: "455€", start: "2024-09-28" },
      ],
      eventDidMount: function (info) {
        let dayEvents = info.el
          .closest(".fc-daygrid-day")
          .querySelector(".fc-daygrid-day-events");
        if (dayEvents) {
          let customDiv = document.createElement("div");
          customDiv.classList.add("custom-div");
          customDiv.innerText = `${info.event.title}`;
          dayEvents.appendChild(customDiv);
        }
      },
      dateClick: function (info) {
        info.dayEl.style.backgroundColor = "#F68521";
        info.dayEl.style.color = "white";
      },
      dayCellDidMount: function (info) {
        let dateStr = info.date.toISOString().split("T")[0];
        let hasEvent = calendar.getEvents().some((event) => {
          let eventDateStr = event.start.toISOString().split("T")[0];
          return eventDateStr === dateStr;
        });
        if (!hasEvent) {
          info.el.classList.add("fc-no-event");
        }
      },
    });

    if (calendarVisible) {
      calendar.render();
    }
  }

  function showCalendar() {
    calendarEl.classList.add("activeCal");
    calendar.render();
    calendarVisible = !calendarVisible;

    calTitle.classList.add("active");

    wrapperCal.classList.add("active");

    filter.classList.add("nonactive");
  }

  showCalendarBtn.addEventListener("click", showCalendar);

  function hideCalendar() {
    calendarEl.classList.remove("activeCal");

    calTitle.classList.remove("active");

    setTimeout(() => {
      filter.classList.remove("nonactive");

      wrapperCal.classList.remove("active");
    }, "500");
  }

  hideCalBtn.addEventListener("click", hideCalendar);

  function handleResize() {
    const width = window.innerWidth;
    if (width <= 650) {
      initializeCalendar(1);
    } else if (width <= 900) {
      initializeCalendar(2);
    } else if (width <= 1219) {
      initializeCalendar(3);
    } else {
      initializeCalendar(4);
    }
  }

  window.addEventListener("resize", handleResize);

  handleResize();
});
