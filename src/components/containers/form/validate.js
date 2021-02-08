export default {
    formValidate: {
        name: {
            type: 'text',
            box: 'Input',
            value: '',
            label: 'Имя',
            placeholder: 'Введите Ваше имя',
            errorMessage: 'Введите корректное значение',
            valid: true,
            touched: false,
            validation: {
                required: true,
                minLength: 0
            }
        },
        email: {
            type: 'email',
            box: 'Input',
            value: '',
            label: 'Email',
            placeholder: 'Введите Ваш email',
            errorMessage: 'Введите корректный email',
            valid: true,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        number:{
            type: 'text',
            box: 'Input',
            value: '',
            label: 'Номер телефона',
            placeholder: 'Введите Ваш номер телефона',
            errorMessage: 'Введите корректный номер телефона',
            valid: true,
            touched: false,
            validation: {
                required: true,
                minLength: 11
            }
        },
        lang: {},
        checkbox: {
            valid: false
        }
    },
    validForm: false
}