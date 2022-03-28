import {Form, Formik, Field} from 'formik';
import BasicFormSchema from "../BasicFormSchema";
import {Button} from "../../ui/Button";

import styles from '../index.module.sass';

export const SignInClientForm = (props:any) => {
    return (
        <div>
            <Formik
                initialValues = {{
                    email: '',
                    password: '',
                }}
                validationSchema={ BasicFormSchema }
                onSubmit = {
                    (values: any) => console.log(values)
                }>
                {({errors, touched}) => (
                    <Form className = { styles.form__wrapper }>
                        <Field
                            name = "email"
                            type = "email"
                            placeholder = "Email"
                            className = { styles.form__field }
                        />
                        { errors.email &&
                        touched.email && <p className={ styles.error }>
                            { errors.email }
                        </p>}
                        <Field
                            name = "password"
                            type = "password"
                            placeholder = "Пароль"
                            className = { styles.form__field }
                        />
                        { errors.password &&
                        touched.password && <p className={ styles.error }>
                            { errors.password }
                        </p>}
                        <Button
                            type={"submit"}
                            text={"Войти"}
                            className = { styles.form__btn }
                        />
                    </Form>)}
            </Formik>
        </div>
    )
}