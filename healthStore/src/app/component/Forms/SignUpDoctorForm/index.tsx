import styles from "../index.module.sass";
import {Field, Form, Formik} from "formik";
import {Button} from "../../ui/Button";
import {useStores} from "../../../utils/use-stores-hook";
import signUpDoctorSchema from "../Schems/SignUpDoctorSchema";
import {useState} from "react";
import {checkFormValid} from "../CommonActionForm";

const points = [
    {name: "firstName", type: "text", placeholder: "Имя"},
    {name: "lastName", type: "text", placeholder: "Фамилия"},
    {name: "middleName", type: "text", placeholder: "Отчество"},
    {name: "phone", type: "text", placeholder: "Телефон"},
    {name: "address", type: "text", placeholder: "Адрес"},
    {name: "email", type: "email", placeholder: "Email"},
    {name: "password", type: "password", placeholder: 'Password'},
    {name: "numberRoom", type: "number", placeholder: 'Номер кабинета'},
    {name: "hospital", type: "text", placeholder: 'Больница'}
]

export const SignUpDoctorForm = () => {
    const {doctorStore: {registrationDoctor}} = useStores();
    const {modalStore: {clearCurrentModal}} = useStores();
    const [isValidForm, setIsValidForm] = useState(false);

    const signUpDoctor = (value: any) => {
        registrationDoctor({
            firstName: value.firstName,
            lastName: value.lastName,
            middleName: value.middleName,
            birthday: "2019-11-21T11:01:32.610Z",
            phone: value.phone,
            department: "CARDIOLOGY",
            email: value.email,
            password: value.password,
            numberRoom: value.numberRoom,
            hospital: value.hospital
        })
        clearCurrentModal()
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
                    email: '',
                    password: '',
                    numberRoom: 0,
                    hospital: ''
                }}
                validationSchema={signUpDoctorSchema}
                onSubmit={
                    (values: any) => signUpDoctor(values)
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