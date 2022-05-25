import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css';
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from 'swiper/react';

import classNames from "classnames/bind";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import {Pagination} from "swiper";
import procedures from '../../assets/img/procedures.jpg';
import stom from '../../assets/img/stom.jpg';
import reception from '../../assets/img/reception.jpg';
import {LayoutContainer} from "../../component/LayoutContainer";

classNames();


export const Contacts = observer(() => {
    return (
        <LayoutContainer>
            <main className={styles.wrapper}>
                <article>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                    >
                        <SwiperSlide>
                            <img className={styles.slide__img} src={procedures} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={styles.slide__img} src={stom} alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className={styles.slide__img} src={reception} alt=""/>
                        </SwiperSlide>
                    </Swiper>
                </article>

                <article className={styles.contacts__wrapper}>
                    <div className={styles.contacts__item}>
                        <h2 className={styles.contacts__title}>8(495)741-10-01</h2>
                        <p className={styles.contacts__subtitle}>Проспект Мира, 102, стр.&nbsp;23</p>
                        <p className={styles.contacts__info}>10&nbsp;минут от&nbsp;м. &laquo;Алексеевская&raquo;
                            ежедневно, с&nbsp;8:00 до&nbsp;20:00</p>
                        <a href="#" className={styles.contacts__email}>info@med.clinic</a>
                    </div>
                    <div className={styles.contacts__item}>
                        <h2 className={styles.contacts__title}>
                            КАК ДОБРАТЬСЯ?
                        </h2>
                        <p className={styles.contacts__subtitle}>A Medclinic-СЕВЕР</p>
                        <p className={styles.contacts__info}>
                            Мы&nbsp;находимся в&nbsp;пешей доступности от&nbsp;станций
                            метро &laquo;Алексеевская&raquo; и&nbsp;&laquo;Рижская&raquo;.
                            <br/><br/>
                            Адрес: Проспект Мира, 102, стр 23.
                            <br/><br/>
                            Въезд на&nbsp;машине с&nbsp;Кучина переулка, через КПП (сказать, что
                            в&nbsp;&laquo;Акушерство&raquo;)
                            <br/><br/>
                            Парковка на&nbsp;территории квартала &laquo;Парк Мира&raquo; платная,
                            100&nbsp;р.&nbsp;в&nbsp;час.<br/> Для такси бесплатно.
                        </p>

                    </div>
                </article>
            </main>
        </LayoutContainer>
    )
})