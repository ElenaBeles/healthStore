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
    address: yup.string()
        .required("Пожалуйста, введите адрес проживания"),
    passportNumber: yup.string()
        .required("Пожалуйста, введите данные паспорта"),
    policyNumber: yup.string()
        .length(16)
        .required("Пожалуйста, введите номер полиса"),
    bloodType: yup.string()
        .length(2)
        .required("Пожалуйста, введите группу крови"),
    email: yup.string()
        .email("Неверный адрес электронной почты")
        .required("Пожалуйста, введите корректный email"),
    password: yup.string()
        .min(3)
        .required("Пожалуйста, введите пароль"),
})

export default SignUpClientSchema;