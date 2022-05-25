import {observer} from "mobx-react";
import styles from "../Doctor'sChoice/index.module.sass";
import {LayoutContainer} from "../../../component/LayoutContainer";
import {SpecialityChoice} from "../../../component/Choise/SpecialityChoise";

export const ChoiceOfSpecialty = observer(() => {
    const isAuth = localStorage.getItem('token')


    return (
        <LayoutContainer>
            <main className={styles.wrapper}>
                {isAuth ? <SpecialityChoice/> : <div>Пожалуйста, авторизуйтесь</div>}
            </main>
        </LayoutContainer>
    )
})