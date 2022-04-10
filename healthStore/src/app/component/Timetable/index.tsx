import {FC} from "react";
import styles from "./index.module.sass";

interface ITimetable {
    day: string;
}

export const Timetable: FC<ITimetable> = (props: ITimetable) => {
    const { day } = props;
    return (
        <div className={ styles.wrapper}>
            <article className={ styles.wrapper__day }>
                <h2 className={ styles.subtitle }>{ day }</h2>
                <ul>
                    <li className={ styles.info }>
                        <p className={ styles.info__name }>
                            Иванов Иван Иванович
                        </p>
                        <hr className={ styles.info__separator }/>
                    </li>
                    <li className={ styles.info }>
                        <p className={ styles.info__name }>
                            Иванов Иван Иванович
                        </p>
                        <hr className={ styles.info__separator }/>
                    </li>
                    <li className={ styles.info }>
                        <p className={ styles.info__name }>
                            Иванов Иван Иванович
                        </p>
                        <hr className={ styles.info__separator }/>
                    </li>
                    <li className={ styles.info }>
                        <p className={ styles.info__name }>
                            Иванов Иван Иванович
                        </p>
                        <hr className={ styles.info__separator }/>
                    </li>
                </ul>
            </article>

        </div>
    );
}