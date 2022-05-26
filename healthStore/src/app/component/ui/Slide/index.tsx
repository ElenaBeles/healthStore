import {FC} from "react";
import {ISlide} from "./index.interfaces";
import styles from './index.module.sass';

export const Slide: FC<ISlide> = (props: ISlide) => {
    const {img} = props
    return (
        <div className={styles.slide}>
            <img className={styles.slide__img} src={img} alt=""/>
        </div>
    );
}