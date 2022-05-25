import * as yup from "yup";

const SignInClientSchema = yup.object().shape({
    email: yup.string()
        .email()
        .required("Пожалуйста, введите почту"),
    password: yup.string()
        .min(3)
        .required("Пожалуйста, введите пароль"),
})

export default SignInClientSchema;