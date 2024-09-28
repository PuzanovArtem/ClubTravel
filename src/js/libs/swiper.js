import 'swiper/css/bundle'
import Swiper from 'swiper/bundle'

export const headerSlider = () => {
  const config = {
    enabled: false,
    grabCursor: true,
    navigation: {
      nextEl: '.header__button--next',
      prevEl: '.header__button--prev',
    },
    breakpoints: {
      769: {
        enabled: true,
      },
    },
  }

  new Swiper('.header__slider', config)
}

export const cardSlider = () => {
  new Swiper('.search-content__swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

export const mainCompanySlider = () => {
  const config = {
    loop: true,
    navigation: {
      nextEl: '.main-company__swiper-button-next',
      prevEl: '.main-company__swiper-button-prev',
      enabled: true,
    },
    touchEventsTarget: 'wrapper',
    spaceBetween: 10,
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
        slidesPerView: 3,
        spaceBetween: 11,
      },
    },
  }

  new Swiper('.main-company__swiper', config)
}

export const mainHotSlider = () => {
  const config = {
    loop: true,
    navigation: {
      nextEl: '.main-hot__swiper-button-next',
      prevEl: '.main-hot__swiper-button-prev',
      enabled: true,
    },
    touchEventsTarget: 'wrapper',
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  }

  new Swiper('.main-hot__swiper', config)
}

export const mainWinterSlider = () => {
  const config = {
    loop: true,
    navigation: {
      nextEl: '.main-winter__swiper-button-next',
      prevEl: '.main-winter__swiper-button-prev',
      enabled: true,
    },
    touchEventsTarget: 'wrapper',

    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  }

  new Swiper('.main-winter__swiper', config)
}

export const mainSummerSlider = () => {
  try {
    const config = {
      loop: true,
      navigation: {
        nextEl: '.main-summer__swiper-button-next',
        prevEl: '.main-summer__swiper-button-prev',
        enabled: true,
      },
      touchEventsTarget: 'wrapper',

      breakpoints: {
        375: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    }

    new Swiper('.main-summer__swiper', config)
  } catch (error) {
    console.error('Swiper initialization error:', error)
  }

  new Swiper('.search-content__swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

export const hotelCardSlider = () => {
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  })
  new Swiper('.gallery-top', {
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
  })
}
