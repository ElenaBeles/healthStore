import {Form, Formik, FormikConfig, FormikValues} from "formik";
import React, {useState} from "react";
import {FormikStepProps} from "../FormikStep/index.interfaces";
import {ButtonMS} from "../../../ForMultiStepForm/ButtonMS";
import styles from "../index.module.sass";

export const MultiStepFormStepper = ({children, ...props}: FormikConfig<FormikValues>) => {
    const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];

    const isLastStep = (step: number) => {
        return step === childrenArray.length - 1
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep(step)) {
                    values = await props.onSubmit(values, helpers)
                } else {
                    setStep(step => step + 1)
                }
            }}>
            <Form autoComplete={'off'}>
                {currentChild}

                {step > 2 ?
                    <ButtonMS
                        className={styles.btn}
                        type={'button'}
                        onClick={() => setStep(step - 1)}
                        title={'Отправить'}/>
                    :
                    <ButtonMS
                        className={styles.btn}
                        type={'submit'}
                        title={isLastStep(step) ? 'Отправить форму' : 'Следующий шаг'}/>
                }
            </Form>
        </Formik>
    )
}