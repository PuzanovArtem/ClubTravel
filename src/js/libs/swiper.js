import Swiper from "swiper/bundle";
import "swiper/css/bundle";

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
};


export const hotelCardSlider = () => {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, 
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      loopedSlides: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
}
