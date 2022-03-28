import styles from './index.module.sass';
import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {Modal} from "../Modal";
import {SignInClientForm} from "../../Forms/SignInClientForm";
import {ButtonLink} from "../../ui/ButtonLink";
import {SignInDoctorModal} from "../SignInDoctorModal";


export const SignInClientModal = observer(() => {
    const { modalStore: { setCurrentModal, clearCurrentModal }} = useStores();

    const openSignInDoctorModal = () => {
        clearCurrentModal()
        setCurrentModal(SignInDoctorModal)
    }

    const openRegiModal = () => {
        clearCurrentModal()
        setCurrentModal(SignInDoctorModal)
    }

    return(
        <Modal title = "Вход для пациента">
            <SignInClientForm/>
            <div className={ styles.links }>
                <ButtonLink onClick={ openSignInDoctorModal } text={"Вход для врача"}/>
                <ButtonLink onClick={ openSignInDoctorModal } text={"Регистрация"}/>
            </div>
        </Modal>
    )
})