import {observer} from "mobx-react";
import styles from "./index.module.sass";
import {Link} from "react-router-dom";

import location from "../../assets/img/ad_location.svg";
import first_aid_kit from "../../assets/img/ad_first_aid_kit.svg";
import medicine_sign from "../../assets/img/ad_medicine_sign.svg";
import {Button} from "../../component/ui/Button";
import {Form} from "formik";

export const Home = observer(() => {
    return (
        <div className={ styles.wrapper }>
            <article  className={ styles.header__wrapper }>
                <div className={ styles.header__info }>
                    <Link to={"/about_us"}>
                        <h1 className={ styles.title }>
                            HealthStore
                        </h1>
                    </Link>
                </div>

            </article >

            <article className={styles.advantages }>
                <h2 className={ styles.title__article }>
                    Наши преимущества
                </h2>
                <div className={ styles.advantage__wrapper }>
                    <div className={ styles.advantage__item }>
                        <img className={ styles.advantage__item__img } src={ location } alt=""/>
                        <p className={ styles.advantage__item__text }>
                            Клиника  возле<br/>
                            вашего дома<br/>

                        </p>
                    </div>
                    <div className={ styles.advantage__item }>
                        <img className={ styles.advantage__item__img } src={ first_aid_kit } alt=""/>
                        <p className={ styles.advantage__item__text }>
                            Мы готовы<br/>
                            оказать помощь<br/>
                            в любое время
                        </p>
                    </div>
                    <div className={ styles.advantage__item }>
                        <img className={ styles.advantage__item__img } src={ medicine_sign } alt=""/>
                        <p className={ styles.advantage__item__text }>
                            У нас вы<br/>можете
                            получить<br/>
                            любой тип
                            лечения
                        </p>
                    </div>
                </div>
            </article>

            <article className={ styles.donation__wrapper }>
                <h2 className={ styles.title__article }>
                    Ваше здоровье - наша задача
                </h2>
                <p className={ styles.donation__text }>
                    Наша клиника работает на безоплатной системе услуг, но вы всегда можете поддержать наш проект
                    <br/>
                    Вся сумма идёт на развитие клиники и закупку современного оборудования
                    <br/>
                    Будьте здоровы и спасибо, что выбираете нас!
                </p>
            </article>
        </div>
    )
})