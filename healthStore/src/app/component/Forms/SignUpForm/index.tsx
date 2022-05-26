import {Field, Form, Formik} from "formik";
import styles from "../index.module.sass";
import {Button} from "../../ui/Button";
import {useStores} from "../../../utils/use-stores-hook";
import {SignInClientModal} from "../../Modals/SignInClientModal";
import signUpClientSchema from "../Schems/SignUpClientSchema";
import {useState} from "react";
import {checkFormValid} from "../CommonActionForm";

const points = [
    {name: "firstName", type: "text", placeholder: "Имя"},
    {name: "lastName", type: "text", placeholder: "Фамилия"},
    {name: "middleName", type: "text", placeholder: "Отчество"},
    {name: "phone", type: "text", placeholder: "Телефон"},
    {name: "address", type: "text", placeholder: "Адрес"},
    {name: "passportNumber", type: "text", placeholder: "Паспорт"},
    {name: "policyNumber", type: "text", placeholder: "Полис"},
    {name: "bloodType", type: "text", placeholder: "Группа крови(пр: 2+)"},
    {name: "email", type: "email", placeholder: "Email"},
    {name: "password", type: "password", placeholder: 'Password'}
]

export const SignUpForm = (props: any) => {
    const {userStore: {registration}} = useStores();
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores();
    const [isValidForm, setIsValidForm] = useState(false);

    const signUp = (value: any) => {
        registration({
            firstName: value.firstName,
            lastName: value.lastName,
            middleName: value.middleName,
            birthday: "2019-11-21T11:01:32.610Z",
            phone: value.phone,
            address: value.address,
            passportNumber: value.passportNumber,
            policyNumber: value.policyNumber,
            bloodType: value.bloodType,
            email: value.email,
            password: value.password,
        }).then(val => {
            clearCurrentModal()
            setCurrentModal(SignInClientModal)
        })
    }

    return (
        <div className={styles.form}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    middleName: '',
                    phone: '',
                    address: '',
                    passportNumber: '',
                    policyNumber: '',
                    bloodType: '',
                    email: '',
                    password: '',
                }}
                validationSchema={signUpClientSchema}
                onSubmit={
                    (values: any) => signUp(values)
                }
            >
                {({errors, touched}) => (
                    <Form className={styles.form__wrapper} onChange={() => checkFormValid(errors, setIsValidForm)}>
                        {points.map((item, index) => (
                            <Field
                                name={item.name}
                                type={item.type}
                                placeholder={item.placeholder ? item.placeholder : ''}
                                className={styles.form__field}
                            />
                        ))
                        }
                        <Button
                            type={"submit"}
                            text={"Зарегистрироваться"}
                            className={styles.form__btn}
                            status={isValidForm ? "secondary" : "primary"}
                        />
                    </Form>)}
            </Formik>
        </div>
    )
}