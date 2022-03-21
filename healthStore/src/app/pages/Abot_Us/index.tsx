import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';

import classNames from "classnames/bind";
import {observer} from "mobx-react";
import styles from './index.module.sass';
import {Slide} from "../../component/ui/Slide";
import {Pagination} from "swiper";
import procedures from '../../assets/img/procedures.jpg';
import stom from '../../assets/img/stom.jpg';
import reception from '../../assets/img/reception.jpg';
import gippocrat from '../../assets/img/gippocrat.jpg';
import reviews from '../../assets/img/reviews.jpg';
import {Link} from "react-router-dom";
classNames();


export const AboutUs = observer(() => {
    return (
        <main className={ styles.wrapper }>
            <article>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop = { true }
                    >
                    <SwiperSlide>
                        <Slide
                            img={ procedures }/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            img={ reception }/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            img={ stom }/>
                    </SwiperSlide>
                </Swiper>
            </article>
            <article className={ styles.info__wrapper }>
                <h1>НЕМНОГО ИСТОРИИ</h1>
                <div className={ styles.info }>
                    <img className={ styles.info__img } src={gippocrat} alt=""/>
                    <p className={ styles.info__text }>«Врач — это лицо, которое, будучи принято в установленном порядке в медицинскую школу, должным образом признанную в стране, в которой она находится, успешно завершило предписанный курс медицинских наук и получило квалификацию, дающую юридическое право на медицинскую практику (включая профилактику, диагностику, лечение и реабилитацию)...»</p>

                </div>
            </article>
            <article className={ styles.info__wrapper }>
                <div className={ styles.info }>
                    <p className={ styles.info__text }>
                        Каждый день мы стараемся становиться чуть лучше, чем мы были вчера.<br/> И огромный вклад в это движение вперед вносите вы, наши пациенты.
                        <br/>
                        <br/>
                        Мы всегда и по всем вопросам на связи.
                    </p>
                    <Link to={"/reviews"}>
                        <img  className={ styles.info__link__img } src={ reviews } alt=""/>
                    </Link>
                </div>
            </article>
        </main>
    )
})