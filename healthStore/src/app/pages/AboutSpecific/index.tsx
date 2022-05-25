import {observer} from "mobx-react";
import styles from "./index.module.sass";
import {Header} from "../../component/Header";

import patient from "../../assets/img/specific_patient.jpg"
import team from "../../assets/img/specific_team.jpg"
import tech from "../../assets/img/specific_tech.jpg"
import {Footer} from "../../component/Footer";


export const AboutSpecific = observer(() => {

    return (
        <>
            <Header/>
            <div className={styles.wrapper__page}>
                <main className={styles.wrapper}>
                    <h1 className={styles.title}>Что такое Health Storage?</h1>
                    <div className={styles.wrapper__advantages}>

                        <div className={styles.wrapper__card}>
                            <h2 className={styles.card__title}>Команда &laquo;Health Storage&raquo;</h2>
                            <div className={styles.wrapper__information__card}>
                                <p className={styles.card__text}>В&nbsp;наших центрах работают опытные специалисты,
                                    которые с&nbsp;вниманием относятся
                                    к&nbsp;каждому пациенту. Это профессионалы, которые станут вашими партнёрами
                                    в&nbsp;сохранении здоровья.

                                    Наша команда&nbsp;&mdash; более 3000 врачей различных специальностей. Среди них 197
                                    кандидатов медицинских наук, 29&nbsp;докторов медицинских наук, 8&nbsp;профессоров,
                                    2&nbsp;академика РАМН, 7&nbsp;доцентов и&nbsp;старших научных сотрудников,
                                    Заслуженный врач России.</p>
                                <img className={styles.card__img} src={team} alt=""/>
                            </div>
                        </div>
                        <div className={styles.wrapper__card}>
                            <h2 className={styles.card__title}>Новое отношение к&nbsp;врачу</h2>

                            <div className={styles.wrapper__information__card}>
                                <p className={styles.card__text}>
                                    Наши специалисты берут на&nbsp;себя личную и&nbsp;профессиональную ответственность
                                    за&nbsp;результат лечения пациентов. Нашим врачам можно доверять. Основные
                                    инструменты достижения цели: внедрение единых стандартов лечения мирового уровня,
                                    комплексность медицинского обслуживания, сотрудничество
                                    с&nbsp;высокопрофессиональными отечественными и&nbsp;зарубежными специалистами;
                                    внедрение инновационных методов диагностики и&nbsp;лечения, доказавших свою
                                    безопасность и&nbsp;эффективность.
                                </p>

                                <img className={styles.card__img} src={patient} alt=""/>
                            </div>
                        </div>

                        <div className={styles.wrapper__card}>
                            <h2 className={styles.card__title}>Новые традиции обслуживания</h2>
                            <div className={styles.wrapper__information__card}>
                                <p className={styles.card__text}>
                                    Основные инструменты достижения цели: внедрение единых стандартов качества оказания
                                    медицинской помощи и&nbsp;сервиса, строгий контроль их&nbsp;исполнения.
                                </p>
                                <img className={styles.card__img} src={tech} alt=""/>
                            </div>

                        </div>
                    </div>

                </main>
            </div>

            <Footer/>
        </>

    )
})