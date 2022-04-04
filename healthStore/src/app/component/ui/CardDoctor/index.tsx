import styles from './index.module.sass';

import cn from "classnames/bind";
import {FC} from "react";
import {ICardDoctor} from "./index.intefaces";
import {Link} from "react-router-dom";
const cx = cn.bind(styles);

export const CardDoctor: FC<ICardDoctor> = (props: ICardDoctor) => {
    const { img, lastname, firstname, id, fullname, department } = props
    const name = lastname + ' ' + firstname;
    return (
        <div className={ styles.wrapper }>
            <Link to={"/"}>
                <img src={ img } alt={ fullname }/>
                <p className={ styles.info }>{ fullname }</p>
                <p className={ styles.field }>{ department }</p>
            </Link>
        </div>
    );
}