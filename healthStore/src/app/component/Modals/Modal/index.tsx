import styles from './index.module.sass';

import {FC, Ref, useRef} from "react";
import {observer} from "mobx-react-lite";
import {useStores} from "../../../utils/use-stores-hook";
import {Portal} from "../../Portal";
import {useModalClose} from "../../../utils/use-modal-close";

export const Modal = observer((props: any) => {
    const { title, children } = props;
    const { modalStore: { clearCurrentModal, setCurrentModal }} = useStores();
    const ref: Ref<any> = useRef();

    useModalClose(ref, () => clearCurrentModal())
    return(
        <Portal>
            <div className={ styles.overlay } ref ={ ref }>
                <div className={ styles.form__wrapper }>
                    <h1 className={ styles.form__title }>
                        { title }
                    </h1>
                    <hr className={ styles.form__separator }/>
                    <div className={ styles.form }>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
})