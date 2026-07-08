import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

let dailySwiper = null;
let worldSwiper = null;
let gallerySwiper = null;

function initDailySwiper() {
  if (dailySwiper) return;

  dailySwiper = new Swiper('.daily-swiper', {
    modules: [Autoplay],
    loop: true,
    speed: 800,
    slidesPerView: 1.2,
    spaceBetween: 16,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
}

function initWorldSwiper() {
  if (window.innerWidth < 1440) {
    if (!worldSwiper) {
      worldSwiper = new Swiper('.world-swiper', {
        modules: [Navigation],
        loop: true,
        speed: 800,
        slidesPerView: 1,

        navigation: {
          prevEl: '.world-prev',
          nextEl: '.world-next',
        },
      });
    }
  } else {
    if (worldSwiper) {
      worldSwiper.destroy(true, true);
      worldSwiper = null;
    }
  }
}

function initGallerySwiper() {
  if (!gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation],
      loop: true,
      speed: 800,
      slidesPerView: 1,

      navigation: {
        prevEl: '.gallery-prev',
        nextEl: '.gallery-next',
      },
    });
  }
}

function initSliders() {
  initDailySwiper();
  initWorldSwiper();
  initGallerySwiper();
}

document.addEventListener('DOMContentLoaded', initSliders);

window.addEventListener('resize', () => {
  initWorldSwiper();
});