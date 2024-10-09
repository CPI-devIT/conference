import { throttle } from '../utils/index.js';

const animateHeroImage = () => {
    const img = document.querySelector('.hero__img');

    if (img) {
        let lastPosition = window.scrollY;

        const changeClasses = () => {
            const scrollDistance = window.scrollY;

            if (lastPosition > scrollDistance) { 
                // скролим вверх
                img.classList.add('hero__img--bottom');
                img.classList.remove('hero__img--top');
            } else if (lastPosition < scrollDistance) {
                // скролим вниз
                img.classList.remove('hero__img--bottom');
                img.classList.add('hero__img--top');
            } else {
                img.classList.remove('hero__img--bottom');
                img.classList.remove('hero__img--top');
            }

            lastPosition = scrollDistance
        }

        changeClasses();

        const changeClassesTrottle = throttle(changeClasses);
        window.addEventListener('scroll', changeClassesTrottle);
    };
};

animateHeroImage();