import {FC} from "react";
import styles from "./index.module.sass";
import {ITitleBlock} from "./index.interfaces";

export const TitleBlock: FC<ITitleBlock> = (props: ITitleBlock) => {
    const { title } = props;
    return (
        <div className={ styles.title__wrapper}>
            <div className={ styles.title__broadcrams}/>
            <h1 className={ styles.title }>{ title }</h1>
        </div>
    );
}