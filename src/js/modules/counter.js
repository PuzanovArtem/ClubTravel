document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const decrementButton = counter.querySelector('.decrement');
        const incrementButton = counter.querySelector('.increment');
        const counterValue = counter.querySelector('.counter-value');

        let value = parseInt(counterValue.textContent, 10);

        decrementButton.addEventListener('click', () => {
            value--;
            counterValue.textContent = value;
        });

        incrementButton.addEventListener('click', () => {
            value++;
            counterValue.textContent = value;
        });
    });
});
