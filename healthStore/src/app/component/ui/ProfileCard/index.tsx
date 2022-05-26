import {FC} from "react";
import {IProfileCard} from "./index.interfaces";
import styles from './index.module.sass';

export const ProfileCard: FC<IProfileCard> = (props: IProfileCard) => {
    const {firstName, lastName, middleName, img, profile, seniority, date_of_birth, blood_type} = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.info_about_person}>
                    <h1>{firstName} {lastName} {middleName}</h1>

                    {profile && <h2>Специализация: {profile}</h2>}
                    {seniority && <h2>Трудовой стаж: {seniority} лет</h2>}
                    {blood_type && <h2>Группа крови - {blood_type}</h2>}

                    <h2>Дата рождения: {date_of_birth}</h2>
                </div>
            </div>
            <img src={img} alt="photo"/>
        </div>
    );
}