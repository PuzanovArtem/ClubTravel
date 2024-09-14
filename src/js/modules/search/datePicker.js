// import flatpickr from "flatpickr";

export function initializeDatePicker() {
    const datePicker = flatpickr("#date-picker", {
        dateFormat: "d.m.Y",
        defaultDate: "16.08.2024",
        onChange: function(selectedDates, dateStr, instance) {
            document.getElementById("selected-date").innerText = dateStr;
        },
        locale: "ru",
    });

    document.getElementById('date-picker').addEventListener('click', function() {
        datePicker.open();
    });
}
