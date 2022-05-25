import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {SignInDoctorModal} from "../SignInDoctorModal";
import {Modal} from "../Modal";
import styles from "../SignInClientModal/index.module.sass";
import {ButtonLink} from "../../ui/ButtonLink";
import {SignUpDoctorForm} from "../../Forms/SignUpDoctorForm";


export const SignUpDoctorModal = observer(() => {
    const {modalStore: {openModal}} = useStores();

    return (
        <Modal title="Регистрация доктора">
            <SignUpDoctorForm/>
            <div className={styles.links}>
                <ButtonLink onClick={() => openModal(SignInDoctorModal)} text={"Вход для доктора"}/>
            </div>
        </Modal>
    )
})