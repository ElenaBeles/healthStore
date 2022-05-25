import {observer} from "mobx-react";
import styles from "./index.module.sass";
import {Link} from "react-router-dom";

import location from "../../assets/img/ad_location.svg";
import first_aid_kit from "../../assets/img/ad_first_aid_kit.svg";
import medicine_sign from "../../assets/img/ad_medicine_sign.svg";
import {MultiStepForm} from "../../component/Forms/MultiStepForm";

export const Home = observer(() => {
    return (
        <div className={styles.wrapper}>
            <article className={styles.header__wrapper}>
                <Link to={"/contacts"}>
                    <h1 className={styles.title}>
                        HealthStore
                    </h1>
                </Link>
            </article>
            <main className={styles.wrapper__main}>
                <article className={styles.advantages}>
                    <h2 className={styles.title__article}>
                        Наши преимущества
                    </h2>
                    <div className={styles.advantage__wrapper}>
                        <div className={styles.advantage__item}>
                            <img className={styles.advantage__item__img} src={location} alt=""/>
                            <p className={styles.advantage__item__text}>
                                Клиника возле<br/>
                                вашего дома<br/>
                            </p>
                        </div>
                        <div className={styles.advantage__item}>
                            <img className={styles.advantage__item__img} src={first_aid_kit} alt=""/>
                            <p className={styles.advantage__item__text}>
                                Мы&nbsp;готовы<br/>
                                оказать помощь<br/>
                                в&nbsp;любое время
                            </p>
                        </div>
                        <div className={styles.advantage__item}>
                            <img className={styles.advantage__item__img} src={medicine_sign} alt=""/>
                            <p className={styles.advantage__item__text}>
                                У&nbsp;нас вы<br/>можете
                                получить<br/>
                                любой тип
                                лечения
                            </p>
                        </div>
                    </div>
                </article>

                <article className={styles.donation__wrapper}>
                    <h2 className={styles.title__article}>
                        Ваше здоровье&nbsp;&mdash; наша задача
                    </h2>
                    <p className={styles.donation__text}>
                        Наша клиника работает на&nbsp;безоплатной системе услуг, но&nbsp;вы&nbsp;всегда можете
                        поддержать наш проект
                        <br/>
                        Вся сумма идёт на&nbsp;развитие клиники и&nbsp;закупку современного оборудования
                        <br/>
                        Будьте здоровы и&nbsp;спасибо, что выбираете нас!
                    </p>
                </article>

                <MultiStepForm/>
            </main>
        </div>
    )
})