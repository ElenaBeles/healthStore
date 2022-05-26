import React, {useState} from "react";
import * as yup from "yup";
import styles from './index.module.sass';
import {InputWithIconMS} from "../../ForMultiStepForm/InputWithIconMS";
import {ButtonMS} from "../../ForMultiStepForm/ButtonMS";
import {CardMS} from "../../ForMultiStepForm/CardMS";

import profile from '../../../assets/img/profile.svg';
import email from '../../../assets/img/email.svg';
import phone from '../../../assets/img/phone.svg';
import intership from '../../../assets/img/intership.png';
import medicine from '../../../assets/img/medicine.png';
import vaccine from '../../../assets/img/vaccine.png';
import {FormikStepProps} from "./FormikStep/index.interfaces";
import {FormikStep} from "./FormikStep";
import { MultiStepFormStepper } from './MultiStepFormStepper';

export const MultiStepForm = () => {
    return (
        <div className={styles.form__wrapper}>
            <MultiStepFormStepper
                initialValues={{
                    email: '',
                    password: '',
                    name: '',
                    field: ''
                }}
                onSubmit={
                    (values: any) => console.log(values)
                }>
                <FormikStep validationSchema={yup.object().shape({
                    first_name: yup.string()
                })
                }>
                    <div className={styles.info}>
                        <h1 className={styles.form__title}>Контакты</h1>
                        <p className={styles.form__subtitle}>
                            Пожалуйста, заполните информацию ниже,
                            чтобы мы&nbsp;могли связаться с&nbsp;вами.
                        </p>
                    </div>
                    <div className={styles.step}>
                        <InputWithIconMS placeholder={'Иван'} nameIcon={profile} title={'Имя'}/>
                        <InputWithIconMS placeholder={'Иванов'} nameIcon={profile} title={'Фамилия'}/>
                        <InputWithIconMS placeholder={'ivanov@gmail.ru'} nameIcon={email} title={'Почта'}/>
                        <InputWithIconMS placeholder={'+79(21312)1231'} nameIcon={phone} title={'Телефон'}/>
                    </div>
                </FormikStep>
                <FormikStep>
                    <div className={styles.info}>
                        <h1 className={styles.form__title}>Категории</h1>
                        <p className={styles.form__subtitle}>
                            Пожалуйста, выберите сферу, которую вы&nbsp;хотите поддержать
                        </p>
                    </div>
                    <div className={styles.step}>
                        <CardMS img={medicine} title={"Лекарства"}/>
                        <CardMS img={vaccine} title={"Разработка вакцин"}/>
                        <CardMS img={intership} title={"Стажировка для врачей"}/>
                    </div>

                </FormikStep>
                <FormikStep>
                    <InputWithIconMS placeholder={'Номер карты'} nameIcon={profile} title={'Имя'}/>
                    <InputWithIconMS placeholder={'Сумма пожертвования'} nameIcon={profile} title={'Фамилия'}/>
                </FormikStep>
            </MultiStepFormStepper>
        </div>
    )
}

