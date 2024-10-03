import JustValidate from "just-validate";

const buttonSubmit = document.querySelector('.registration__button');
const form = document.querySelector('.registration__form')

if (buttonSubmit && form) {
    const validation = new JustValidate('.registration__form', {
        validateBeforeSubmitting: true,
        errorFieldCssClass: 'form__field--error',
    });


    validation.addField('input[data-validate="name"]', [
        {
            rule: 'required',
        },
        {
            rule: 'minLength',
            value: 3,
        },
    ]);

    validation.addField('input[type="email"]', [
        {
            rule: 'email',
        },
        {
            rule: 'required',
        },
    ]);

    validation.onValidate(({
        isValid,
        isSubmitted,
        fields,
        groups,
    }) => {

        if (isValid) {
            buttonSubmit.removeAttribute('disabled');
        } else {
            buttonSubmit.setAttribute('disabled', 'true');
        }
    });
}

