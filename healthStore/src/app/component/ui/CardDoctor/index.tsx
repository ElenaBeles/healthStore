import styles from './index.module.sass';

import cn from "classnames/bind";
import {FC} from "react";
import {ICardDoctor} from "./index.intefaces";
import {Link} from "react-router-dom";
import doctorMock from '../../../assets/img/doctorProfileMock.webp'

const cx = cn.bind(styles);


export const CardDoctor: FC<ICardDoctor> = (props: ICardDoctor) => {
    const {img, lastname, firstname, id, fullname, department} = props
    const name = lastname + ' ' + firstname;
    return (
        <div className={styles.wrapper}>
            <Link to={"/"}>
                <img className={styles.img} src={img ? img : doctorMock} alt={fullname}/>
                <p className={styles.info}>{fullname}</p>
                <p className={styles.field}>{department}</p>
            </Link>
        </div>
    );
}