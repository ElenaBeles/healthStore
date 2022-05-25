import {FC} from "react";
import {IButtonMS} from "./index.interfaces";
import styles from './index.module.sass';
import cn from "classnames/bind";

const cx = cn.bind(styles);

export const ButtonMS: FC<IButtonMS> = (props: IButtonMS) => {
    const {title, type, onClick, className} = props;
    return (
        <button
            className={cx(styles.wrapper, className)}
            type={type}
            onClick={onClick}>{title}</button>
    )
}