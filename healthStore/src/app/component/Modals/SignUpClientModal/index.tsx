import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {SignInDoctorModal} from "../SignInDoctorModal";
import {Modal} from "../Modal";
import {SignInForm} from "../../Forms/SignInForm";
import styles from "../SignInClientModal/index.module.sass";
import {ButtonLink} from "../../ui/ButtonLink";
import {SignInClientModal} from "../SignInClientModal";
import {SignUpForm} from "../../Forms/SignUpForm";


export const SignUpClientModal = observer(() => {
    const { modalStore: { setCurrentModal, clearCurrentModal }} = useStores();

    const openSignInDoctorModal = () => {
        clearCurrentModal()
        setCurrentModal(SignInDoctorModal)
    }

    const openSignInClientModal = () => {
        clearCurrentModal()
        setCurrentModal(SignInClientModal)
    }

    return(
        <Modal title = "Регистрация клиента">
            <SignUpForm/>
            <div className={ styles.links }>
                <ButtonLink onClick={ openSignInClientModal } text={"Вход для клиента"}/>
            </div>
        </Modal>
    )
})