export const header = () => {
  const burger = document.querySelector('.burger');
  const sideMenu = document.querySelector('.sidebar');

  if (burger && sideMenu) {
    burger.addEventListener('click', event => {
      const isActive = sideMenu.classList.contains('sidebar_active');

      document.body.style.overflow = isActive ? '' : 'hidden';
      sideMenu.classList.toggle('sidebar_active');
      burger.classList.toggle('burger_active');
    });

    document.addEventListener('click', event => {
      if (
        sideMenu.classList.contains('sidebar_active') &&
        !sideMenu.contains(event.target) &&
        !burger.contains(event.target)
      ) {
        sideMenu.classList.remove('sidebar_active');
        burger.classList.remove('burger_active');
        document.body.style.overflow = '';
      }
    });

    return
  } 

    console.log('Burger or sidebar not found');
  
};
