import { throttle } from '../utils/index.js';

export const stickyHeader = () => {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const burgerMenu = document.querySelector('.burger-menu');

    if (hero && header) {
        const heroHeight = hero.offsetHeight;

        const changeClasses = () => {
            // if (!burgerMenu.classList.contains('burger-menu--active')) {
                const scrollDistance = window.scrollY;

                if (scrollDistance > heroHeight) {
                    header.classList.add('header--fixed');
                } else {
                    header.classList.remove('header--fixed');
                }
            // }
        }

        changeClasses();

        const changeClassesTrottle = throttle(changeClasses);
        window.addEventListener('scroll', changeClassesTrottle);
    };
};
