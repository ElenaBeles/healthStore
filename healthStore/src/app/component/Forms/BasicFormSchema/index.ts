import * as yup from "yup";

const BasicFormSchema = yup.object().shape({
    first_name: yup.string()
        .required("Пожалуйста, введите корретное имя"),
    last_name: yup.string()
        .required("Пожалуйста, введите корректную фамилию"),
    middle_name: yup.string()
        .required("Пожалуйста, введите корректное отчество"),
    phone: yup.string()
        .length(10, 'Некорректная длина')
        .required("Введите корректный номер"),
    email: yup.string()
        .email("Неверный адрес электронной почты")
        .required("Введите корректный email"),
    password: yup.string()
        .min(3)
        .required("Введите корректный пароль"),
    date_of_birth: yup.date()
        .required("Пожалуйста, введите корректную дату рождения")
})

export default BasicFormSchema;