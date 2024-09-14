import noUiSlider from 'nouislider';

export function priceSlider() {
    console.log('Initializing price slider...');

    const slider = document.querySelector('.category__slider');
  
    if (!slider) {
        console.error('Slider element not found');
        return;
    }

    console.log('Slider element found, initializing noUiSlider...');

    noUiSlider.create(slider, {
        range: {
            'min': 300,
            'max': 6000,
        },
        start: [1700, 3500],
        connect: true,
        tooltips: [true, true],
        step: 200,
        format: {
            to: function (value) {
                return Math.round(value) + '€';
            },
            from: function (value) {
                return Math.round(value);
            },
        }
    });

    slider.noUiSlider.on('update', function (values, handle) {
        console.log(`Handle ${handle} moved to ${values[handle]}`);
    });

    console.log('Slider initialized successfully');
}
