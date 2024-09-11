export const changePlace = () => {

function handleResize(event) {
  const item = document.getElementById('first-block');
  const list1 = document.getElementById('hotel-card-info');
  const list2 = document.getElementById('hotel-card-sidebar');

   if (!event.matches) {
    list2.insertBefore(item, list2.firstChild);
  } else {
    list1.insertBefore(item, list1.firstChild);
  }
}

const mediaQuery = window.matchMedia('(max-width: 767px)');

mediaQuery.addEventListener('change', handleResize);
handleResize(mediaQuery);
}

