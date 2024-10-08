import { throttle } from '../utils/index.js';

export const stickyHeader = () => {
    const header = document.querySelector('.header');
    const burgerMenu = document.querySelector('.burger-menu');

    if (header) {

        const changeClasses = () => {
            if (!burgerMenu.classList.contains('burger-menu--active')) {
                const scrollDistance = window.scrollY;

                if (scrollDistance > 500) {
                    header.classList.add('header--fixed');
                } else {
                    header.classList.remove('header--fixed');
                }
            }
        }

        changeClasses();

        const changeClassesTrottle = throttle(changeClasses);
        window.addEventListener('scroll', changeClassesTrottle);
    };
};
