console.log('hello');

let select = function () {
    const selectCust = document.querySelectorAll('.select__custom');
    const selectItems = document.querySelectorAll('.select__item');

    selectCust.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItems.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.classList.toggle('is-active');
    }

    function selectChoose() {


        let text = this.innerText;
        let select = this.closest('.select');
        let currentText = select.querySelector('.select__selected');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};

select();