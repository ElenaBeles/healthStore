import * as yup from "yup";

const SignUpClientSchema = yup.object().shape({
    firstName: yup.string()
        .required("Пожалуйста, введите имя"),
    lastName: yup.string()
        .required("Пожалуйста, введите фамилию"),
    middleName: yup.string()
        .required("Пожалуйста, введите отчество"),
    phone: yup.string()
        .length(11, 'Некорректная длина')
        .required("Пожалуйста, введите номер телефона"),
    email: yup.string()
        .email("Неверный адрес электронной почты")
        .required("Пожалуйста, введите корректный email"),
    password: yup.string()
        .min(3)
        .required("Пожалуйста, введите пароль"),
})

export default SignUpClientSchema;