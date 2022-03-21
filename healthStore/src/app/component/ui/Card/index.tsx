import styles from './index.module.sass';

import {FC} from "react";
import {ICard} from "./index.interfaces";
import {Icon} from "../Icon";

export const Card: FC<ICard> = (props: ICard) => {
    const { img, title } = props
    return (
        <div className={ styles.wrapper }>
            <Icon className={ styles.icon} name = { img } size={ "48"} />
            <p className={ styles.title }>{ title }</p>
        </div>
    );
}