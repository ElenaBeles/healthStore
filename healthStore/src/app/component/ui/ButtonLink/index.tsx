import styles from './index.module.sass';

import {IButtonLink} from "./index.interfaces";
import cn from "classnames/bind";
import classNames from "classnames/bind";

classNames();

const cx = cn.bind(styles);


export const ButtonLink = (props: IButtonLink) => {
    const {text, onClick} = props;

    return (
        <button
            className={styles.btn}
            onClick={onClick}
            type={"button"}
        >
            {text}
        </button>
    )
}