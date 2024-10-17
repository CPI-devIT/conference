import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

if (document.querySelector('.team__swiper')) {
    new Swiper('.team__swiper', {

        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 10,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
}
