import {observer} from "mobx-react";
import {LayoutContainer} from "../../component/LayoutContainer";
import styles from './index.module.sass';
import {TitleBlock} from "../../component/ui/TitleBlock";
import {Card} from "../../component/ui/Card";
import dentistry from "../../../svg-icons/dentistry.svg"

export const Recommendations = observer(() => {
    return (
        <LayoutContainer>
            <TitleBlock title={"Рекомендации"}/>
            <div className={ styles.items}>
                <Card img={ dentistry } title={ "стоматология" }/>
            </div>
        </LayoutContainer>
    )
})