import {observer} from "mobx-react";
import {LayoutContainer} from "../../component/LayoutContainer";
import styles from "./index.module.sass";
import {Button} from "../../component/ui/Button";


export const DoctorSPatientCard = observer(() => {
    return (
        <LayoutContainer>

            <h1 className={styles.title}>Иванов Иван Иванович</h1>

            <div className={styles.patient__info}>
                <p>Дата рождения</p>
                <p>Группа крови</p>
            </div>

            <section className={styles.info__edit}>
                <article className={styles.block__wrapper}>
                    <h2 className={styles.subtitle}>
                        Диагноз
                    </h2>
                    <hr className={styles.separator}/>
                    <textarea className={styles.textarea}/>
                </article>

                <article className={styles.block__wrapper}>
                    <h2 className={styles.subtitle}>
                        Рецепт
                    </h2>
                    <hr className={styles.separator}/>
                    <textarea className={styles.textarea}/>
                </article>
            </section>

            <Button
                className={styles.btn}
                status={'secondary'} text={'Отредактировать'}/>
        </LayoutContainer>
    )
})