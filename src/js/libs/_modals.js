import GraphModal from 'graph-modal';

const modalThank = document.querySelector('[data-graph-target="modal-thank"]');
const buttonThank = document.querySelector('[data-graph-path="modal-thank"]');

if (modalThank && buttonThank) {
    buttonThank.addEventListener('click', () => {
        new GraphModal('modal').open('modal-thank');
    });

    //buttonThank.click();
}
