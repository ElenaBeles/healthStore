import {Field, Form, Formik} from "formik";
import BasicFormSchema from "../BasicFormSchema";
import styles from "../index.module.sass";
import {Button} from "../../ui/Button";
import {text} from "stream/consumers";

export const SignUpForm = (props:any) => {
    const points = [
        { name: "last_name", type: "text", placeholder: "Иванов" },
        { name: "first_name", type: "text", placeholder: "Иван" },
        { name: "middle_name", type: "text", placeholder: "Иванович" },
        { name: "email", type: "email", placeholder: "ivanov@mail.com" },
        { name: "password", type: "password", placeholder: 'password' }
    ]
    return (
        <div className = { styles.form }>
            <Formik
                initialValues = {{
                    first_name: '',
                    last_name: '',
                    middle_name: '',
                    email: '',
                    password: '',
                    date_of_birth: '',
                    phone: '',
                    polis_number: '',
                    passport_number: ''
                }}
                validationSchema={ BasicFormSchema }
                onSubmit = {
                    (values: any) => console.log(values)
                }
               >
                {({errors, touched}) => (
                    <Form className = { styles.form__wrapper }>
                        { points.map((item, index) => (
                            <Field
                                name = { item.name }
                                type = { item.type }
                                placeholder = { item.placeholder ?  item.placeholder: '' }
                                className = { styles.form__field }
                            />
                        ))
                        }
                        <Field
                            name = { "Группа крови" }
                            type = { 'text' }
                            placeholder = { "Группа крови" }
                            className = { styles.form__field }
                        />
                        <Field
                            name = { "Резус фактор" }
                            type = { 'text' }
                            placeholder = { "Резус фактор" }
                            className = { styles.form__field }
                        />
                        <Field
                            name = { "polis_number" }
                            type = { 'text' }
                            placeholder = { "Номер полиса" }
                            className = { styles.form__field }
                        />
                        <Field
                            name = { "passport_number" }
                            type = { 'text' }
                            placeholder = { "Номер паспорта" }
                            className = { styles.form__field }
                        />
                        <Button
                            type={"submit"}
                            text={"Зарегистрироваться"}
                            className = { styles.form__btn }
                            status={ "secondary" }
                        />
                    </Form>)}
            </Formik>
        </div>
    )
}