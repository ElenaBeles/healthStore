import {ICardMS} from "./index.interfaces";
import {FC} from "react";
import styles from "./index.module.sass"

export const CardMS: FC<ICardMS> = (props: ICardMS) => {
    const {img, title} = props


    return (
        <button type={"button"} className={styles.btn__wrapper}>
            <img src={img} alt=""/>
            <h1 className={styles.title}>{title}</h1>
        </button>
    )
}