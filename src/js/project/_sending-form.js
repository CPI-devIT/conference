import GraphModal from 'graph-modal';

const sendForm = () => {
    const form = document.querySelector('.registration__form')
    const buttonSubmit = form.querySelector('.registration__button')

    if (form) {

        const submit = (event) => {
            event.preventDefault()

            const data = {
                registration_email: form.querySelector('#registration-email').value,
                registration_name: form.querySelector('#registration-name').value
            }

            fetch('https://nayka.mpcenter.ru/wp-json/custom-api/v1/send-mail/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then((response) => {
                if (response.status === 200) {
                    new GraphModal('modal').open('modal-form-success');
                    form.querySelector('#registration-email').value = '';
                    form.querySelector('#registration-name').value = ''

                    if (buttonSubmit) {
                        buttonSubmit.setAttribute('disabled', true)
                    }
                } else {
                    new GraphModal('modal').open('modal-form-error');
                }
            }).catch((error) => {
                new GraphModal('modal').open('modal-form-error');
            })
        }

        form.addEventListener('submit', submit)
    }
}

sendForm();