import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

if (document.querySelector('.team-org__swiper')) {
    new Swiper('.team-org__swiper', {

        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 10,

        navigation: {
            nextEl: ".swiper__org-button-next",
            prevEl: ".swiper__org-button-prev",
        },

    });
}
