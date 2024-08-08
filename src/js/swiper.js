import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


document.addEventListener('DOMContentLoaded', () => {
    try {
        const headerSwiper = new Swiper(".header__slider", {
          enabled: false,
          grabCursor: true,
          navigation: {
            nextEl: ".header-button-next",
            prevEl: ".header-button-prev",
          },
          breakpoints: {
            769: {
              enabled: true,
            },
          },
        });
      } catch (error) {
        console.log("Swiper initialization error:", error);
      }
  });