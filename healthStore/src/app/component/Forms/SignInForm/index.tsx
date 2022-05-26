import {Field, Form, Formik} from 'formik';
import {Button} from "../../ui/Button";

import styles from '../index.module.sass';
import {useStores} from "../../../utils/use-stores-hook";
import {useNavigate} from "react-router-dom";
import SignInSchema from "../Schems/SignInSchema";
import {useState} from "react";
import {checkFormValid} from "../CommonActionForm";


export const SignInForm = () => {
    const {modalStore: {clearCurrentModal}} = useStores();
    const {userStore: {authorization, getUserId}} = useStores();
    const [isValidForm, setIsValidForm] = useState(false);
    const navigate = useNavigate()

    const login = (value: any) => {
        authorization({
            email: value.email,
            password: value.password
        }).then(
            value => {
                getUserId().then(
                    userId => {
                        navigate("/profile-patient/" + userId,)
                        clearCurrentModal()
                    }
                )
            })
    }

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignInSchema}
                onSubmit={
                    (values: any) => login(values)
                }
            >
                {({errors, touched}) => (
                    <Form className={styles.form__wrapper} onChange={() => checkFormValid(errors, setIsValidForm)}>
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            className={styles.form__field}
                        />
                        <Field
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            className={styles.form__field}
                        />

                        <Button
                            type={"submit"}
                            text={"Войти"}
                            className={styles.form__btn}
                            status={isValidForm ? "secondary" : "primary"}
                        />
                    </Form>)}
            </Formik>
        </div>
    )
}