import styles from "./index.module.sass";
import {FC} from "react";
import {ICell} from "./index.interfaces";

export const Cell: FC<ICell> = (props: ICell) => {
    const {userName, time} = props;
    return (
        <div className={styles.info}>
            <div className={styles.info__user}>
                <p className={styles.info__name}>
                    {userName}
                </p>
                <hr className={styles.info__separator}/>
            </div>
            <button className={styles.info__time}>
                {time}
            </button>
        </div>
    );
}