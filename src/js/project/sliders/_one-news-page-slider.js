import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

if (document.querySelector('.news-page__swiper')) {
    new Swiper('.news-page__swiper', {
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 10,

        navigation: {
            nextEl: ".swiper-controls__button--next",
            prevEl: ".swiper-controls__button--prev",
            disabledClass: "swiper-controls__button--disable"
        },

    });
}