import {FC} from "react";
import styles from './index.module.sass';

import {IReviews} from "./index.interfaces";


export const Reviews: FC<IReviews> = (props: IReviews) => {
    const {reviewsList} = props;
    return (
        <>
            {reviewsList.length === 0 ? <div>Отзывов пока нет</div> : <div/>}
            {reviewsList.map(value => <div className={styles.wrapper}>
                <h3>{value.name}</h3>
                <p>{value.review}</p>
            </div>)}
        </>
    );
}