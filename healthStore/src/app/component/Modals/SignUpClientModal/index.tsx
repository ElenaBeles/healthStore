import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";
import {Modal} from "../Modal";
import styles from "../SignInClientModal/index.module.sass";
import {ButtonLink} from "../../ui/ButtonLink";
import {SignInClientModal} from "../SignInClientModal";
import {SignUpForm} from "../../Forms/SignUpForm";


export const SignUpClientModal = observer(() => {
    const {modalStore: {openModal}} = useStores();

    return (
        <Modal title="Регистрация клиента">
            <SignUpForm/>
            <div className={styles.links}>
                <ButtonLink onClick={() => openModal(SignInClientModal)} text={"Вход для клиента"}/>
            </div>
        </Modal>
    )
})