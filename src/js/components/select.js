export const select = () => {
  const selectCust = document.querySelectorAll('.select__custom');
  const selectItems = document.querySelectorAll('.select__item');

  function selectToggle() {
    this.classList.toggle('is-active');
  }

  function selectChoose() {
    const text = this.innerText;
    const selectBlock = this.closest('.select');
    const currentText = selectBlock.querySelector('.select__selected');
    currentText.innerText = text;
    selectBlock.classList.remove('is-active');
  }

  selectCust.forEach(item => {
    item.addEventListener('click', selectToggle);
  });

  selectItems.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  // Закриття селекту при натисканні за його межами
  document.addEventListener('click', function (e) {
    selectCust.forEach(item => {
      if (!item.contains(e.target)) {
        item.classList.remove('is-active');
      }
    });
  });
};

select();

