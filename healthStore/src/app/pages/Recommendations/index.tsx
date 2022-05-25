import {observer} from "mobx-react";
import {LayoutContainer} from "../../component/LayoutContainer";
import styles from './index.module.sass';
import {TitleBlock} from "../../component/ui/TitleBlock";
import {Card} from "../../component/ui/Card";
import dentistry from "../../assets/img/denistry.png";
import pediatrics from "../../assets/img/pediatrics.png";
import ultrasound from "../../assets/img/ultrasound.png";

export const Recommendations = observer(() => {
    return (
        <LayoutContainer>
            <TitleBlock title={"Рекомендации"}/>
            <div className={styles.items}>
                <Card img={dentistry} title={"Cтоматология"}/>
                <Card img={pediatrics} title={"Педиатрия"}/>
                <Card img={ultrasound} title={"УЗИ"}/>
            </div>
        </LayoutContainer>
    )
})