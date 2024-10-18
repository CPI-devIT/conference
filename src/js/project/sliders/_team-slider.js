import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

if (document.querySelector('.team__swiper')) {

    const allBlocks = document.querySelectorAll('.team__list');
    allBlocks.forEach((block) => {
        new Swiper(block.querySelector('.team__swiper'), {

            speed: 800,
            slidesPerGroup: 1,
            slidesPerView: 1,
            spaceBetween: 10,

            navigation: {
                nextEl: block.querySelector(".swiper-controls__button--next"),
                prevEl: block.querySelector(".swiper-controls__button--prev")
            },

        });
    })
}
