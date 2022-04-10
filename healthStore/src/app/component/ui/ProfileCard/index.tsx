import {FC} from "react";
import {IProfileCard} from "./index.interfaces";
import styles from './index.module.sass';

import cn from "classnames/bind";

const cx = cn.bind(styles);

export const ProfileCard: FC<IProfileCard> = (props: IProfileCard) => {
    const { firstName, lastName, middleName, img, profile, seniority, date_of_birth } = props;
    return (
        <div className={ styles.wrapper }>
            <div className={ styles.info }>
                <p>breadcrumbs</p>
                <div className={ styles.info__about__person }>
                    <h1>{ firstName } { lastName } { middleName }</h1>
                    <h2>Специализация: { profile }</h2>
                    <h2>Трудовой стаж: { seniority } лет</h2>
                    <h2>Дата рождения: { date_of_birth }</h2>
                </div>
            </div>
            <img src={ img } alt="photo"/>
        </div>
    );
}