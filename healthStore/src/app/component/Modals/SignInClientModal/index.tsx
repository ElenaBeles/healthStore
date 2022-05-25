import styles from './index.module.sass';
import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {Modal} from "../Modal";
import {SignInForm} from "../../Forms/SignInForm";
import {ButtonLink} from "../../ui/ButtonLink";
import {SignInDoctorModal} from "../SignInDoctorModal";
import {SignUpClientModal} from "../SignUpClientModal";


export const SignInClientModal = observer(() => {
    const {modalStore: {openModal}} = useStores();

    return (
        <Modal title="Вход для пациента">
            <SignInForm/>
            <div className={styles.links}>
                <ButtonLink onClick={() => openModal(SignInDoctorModal)} text={"Вход для врача"}/>
                <ButtonLink onClick={() => openModal(SignUpClientModal)} text={"Регистрация"}/>
            </div>
        </Modal>
    )
})