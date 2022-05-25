import styles from '../SignInClientModal/index.module.sass';
import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {Modal} from "../Modal";
import {ButtonLink} from "../../ui/ButtonLink";
import {SignInClientModal} from "../SignInClientModal";
import {SignUpDoctorModal} from "../SignUpDoctorModal";
import React from "react";
import {SignInDoctorForm} from "../../Forms/SignInDoctorForm";


export const SignInDoctorModal = observer(() => {
    const {modalStore: {openModal}} = useStores();

    return (
        <Modal title="Вход для доктора">
            <SignInDoctorForm/>
            <div className={styles.links}>
                <ButtonLink onClick={() => openModal(SignUpDoctorModal)} text={"Регистрация доктора"}/>
                <ButtonLink onClick={() => openModal(SignInClientModal)} text={"Вход для пациента"}/>
            </div>
        </Modal>
    )
})