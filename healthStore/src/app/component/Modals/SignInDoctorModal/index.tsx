import styles from '../SignInClientModal/index.module.sass';
import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {Modal} from "../Modal";
import {SignInClientForm} from "../../Forms/SignInClientForm";
import {ButtonLink} from "../../ui/ButtonLink";
import {SignInClientModal} from "../SignInClientModal";


export const SignInDoctorModal = observer(() => {
    const { modalStore: { setCurrentModal, clearCurrentModal }} = useStores();

    const openSignClientModal = () => {
        clearCurrentModal()
        setCurrentModal(SignInClientModal)
    }

    return(
        <Modal title = "Вход для доктора">
            <SignInClientForm/>
            <div className={ styles.links }>
                <ButtonLink onClick={ openSignClientModal } text={"Вход для пациента"}/>
            </div>
        </Modal>
    )
})