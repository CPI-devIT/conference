import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll();

export const scrollToBlock = (link) => {
    const id = link.getAttribute('href').slice(1);
    const anchor = document.getElementById(id);

    if (anchor) {
        setTimeout(() => {
            scroll.animateScroll(anchor, link, {
                header: '.header'
            });

            localStorage.clear();
        })
    } else {
        localStorage.setItem("isRedirect", "true");
        localStorage.setItem("id", id);
        window.location.href = `/`;
    }
};

const scrollToBlockAfterRedirect = () => {
    if (localStorage.getItem("isRedirect")) {
        setTimeout(() => {
            const header = document.querySelector('.header');
            let headerHeight = header ? header.offsetHeight : 0;

            const id = localStorage.getItem("id");
            const anchor = document.getElementById(id);

            if (anchor) {
                const position = anchor.getBoundingClientRect().y;
                scroll.animateScroll(position - headerHeight);
            }

            localStorage.clear();
        })
    }
}

scrollToBlockAfterRedirect();