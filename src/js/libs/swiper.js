import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";

export const headerSlider = () => {
  try {
    const config = {
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
    };

    const headerSwiper = new Swiper(".header__slider", config);
  } catch (error) {
    console.log("Swiper initialization error:", error);
  }
};


export const cardSlider = () => {
const swiper = new Swiper('.search-content__swiper-container', {
            loop: true, 
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
}

export const mainCompanySlider = () => {
  try {
    const config = {
      loop: true,
      navigation: {
        nextEl: ".main-company__swiper-button-next",
        prevEl: ".main-company__swiper-button-prev",
        enabled: true,
      },
      touchEventsTarget: 'wrapper',

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        
        804: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 11,
        },
      },
    };

    const mainCompanySwiper = new Swiper(".main-company__swiper", config);
  } catch (error) {
    console.log("Swiper initialization error:", error);
  }
};

export const mainHotSlider = () => {
  try {
    const config = {
      loop: true,
      navigation: {
        nextEl: ".main-hot__swiper-button-next",
        prevEl: ".main-hot__swiper-button-prev",
        enabled: true,
      },
      touchEventsTarget: 'wrapper',

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        
        804: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 11,
        },
      },
    };

    const mainHotSlider = new Swiper(".main-hot__swiper", config);
  } catch (error) {
    console.log("Swiper initialization error:", error);
  }
};

export const mainWinterSlider = () => {
  try {
    const config = {
      loop: true,
      navigation: {
        nextEl: ".main-winter__swiper-button-next",
        prevEl: ".main-winter__swiper-button-prev",
        enabled: true,
      },
      touchEventsTarget: 'wrapper',

      breakpoints: {
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    };

    const mainWinterSlider = new Swiper(".main-winter__swiper", config);
  } catch (error) {
    console.log("Swiper initialization error:", error);
  }
};

export const mainSummerSlider = () => {
  try {
    const config = {
      loop: true,
      navigation: {
        nextEl: ".main-summer__swiper-button-next",
        prevEl: ".main-summer__swiper-button-prev",
        enabled: true,
      },
      touchEventsTarget: 'wrapper',

      breakpoints: {
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    };

    const mainSummerSlider = new Swiper(".main-summer__swiper", config);
  } catch (error) {
    console.log("Swiper initialization error:", error);
  }
};