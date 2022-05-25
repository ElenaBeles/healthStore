import styles from './index.module.sass';
import {IButtonWithIcon} from "./index.interfaces";

import cn from "classnames/bind";
import {Icon} from "../../Icon";
import React from "react";

const cx = cn.bind(styles);

export const ButtonWithIcon = (props: IButtonWithIcon) => {
    const {text, onClick, className, type, src} = props;

    return (
        <div className={styles.wrapper}>
            <button
                className={cx(className, styles.button__wrapper)}
                onClick={onClick}
                type={type}
            >
                <Icon className={styles.button__icon} name={src} size={"24"}/>
                {text}
            </button>
        </div>

    )
}