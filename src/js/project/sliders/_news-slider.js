import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

Swiper.use([Pagination]);

if (document.querySelector('.news__swiper')) {
    new Swiper('.news__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,

        pagination: {
            el: ".news__pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
}

if (document.querySelector('.news-page__swiper')) {
    new Swiper('.news-page__swiper', {
        loop: true,
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