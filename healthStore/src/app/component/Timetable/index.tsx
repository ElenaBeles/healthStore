import {FC} from "react";
import styles from "./index.module.sass";
import {Patient} from "../../pages/Profile/ProfileDoctor";
import {Cell} from "./Cell";

interface ITimetable {
    day: string;
    data: Patient[];
}

export const Timetable: FC<ITimetable> = (props: ITimetable) => {
    const {day, data} = props;

    const createName = (lastName: string, firstName: string, middleName: string) => {
        return lastName + ' ' + firstName + ' ' + middleName;
    }
    return (
        <div className={styles.wrapper}>
            <article className={styles.wrapper__day}>
                <h2 className={styles.subtitle}>{day}</h2>
                {
                    data.map((value) => (
                        <Cell
                            userName={createName(
                                value.lastName,
                                value.firstName,
                                value.middleName
                            )}
                            time={value.time}/>
                    ))
                }
            </article>
        </div>
    );
}