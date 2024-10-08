export const stream = () => {
    const preview = document.querySelector('.stream__preview');
    const video = document.querySelector('.stream__video');

    if (preview && video) {
        const clickHandler = () => {
            video.classList.add('stream__video--active');
            preview.classList.add('stream__preview--hidden');
            preview.removeEventListener(clickHandler);
        }

        preview.addEventListener('click', clickHandler);
    }
}
