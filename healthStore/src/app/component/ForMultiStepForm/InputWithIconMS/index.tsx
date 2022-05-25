import {IInputWithIconMS} from "./index.interfaces";
import {FC} from "react";
import styles from './index.module.sass';

export const InputWithIconMS: FC<IInputWithIconMS> = (props: IInputWithIconMS) => {
    const {placeholder, nameIcon, title} = props;

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <label className={styles.wrapper__input}>
                <input type="text" placeholder={placeholder}/>
                <img className={styles.wrapper__input__img} src={nameIcon} alt=""/>
            </label>
        </div>
    )
}