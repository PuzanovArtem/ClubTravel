export function setupCounter(counterId, displayId, incrementId, decrementId, max = 10) {
    const counter = document.getElementById(counterId);
    const display = document.getElementById(displayId);
    const incrementButton = document.getElementById(incrementId);
    const decrementButton = document.getElementById(decrementId);

    incrementButton.addEventListener("click", function () {
        let currentValue = parseInt(counter.textContent, 10);
        if (currentValue < max) {
            currentValue++;
            counter.textContent = currentValue;
            display.textContent = currentValue;
        }
    });

    decrementButton.addEventListener("click", function () {
        let currentValue = parseInt(counter.textContent, 10);
        if (currentValue > 0) {
            currentValue--;
            counter.textContent = currentValue;
            display.textContent = currentValue;
        }
    });
}

export function initializeCounters() {
    setupCounter('adults-counter-value', 'adults-display', 'adults-increment', 'adults-decrement');
    setupCounter('kids-counter-value', 'kids-display', 'kids-increment', 'kids-decrement');
}
