import {observer} from "mobx-react";
import {LayoutContainer} from "../../../component/LayoutContainer";
import {ProfileCard} from "../../../component/ui/ProfileCard";
import photo from '../../../assets/img/doctorProfileMock.webp'
import {Timetable} from "../../../component/Timetable";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./index.module.sass";
import {Reviews} from "../../../component/ui/Reviews";
import {useLocation} from "react-router-dom";
import {useStores} from "../../../utils/use-stores-hook";
import {useEffect, useState} from "react";

export interface Patient {
    firstName: string,
    lastName: string,
    middleName: string,
    time: string,
}

export interface Reviewer {
    name: string,
    review: string,
}

const ArrPatients: Array<Patient> = [
    {
        firstName: "Иван",
        lastName: "Иванов",
        middleName: "Иванович",
        time: "8:00"
    },
    {
        firstName: "Мария",
        lastName: "Иванова",
        middleName: "Ивановна",
        time: "9:30"
    },
    {
        firstName: "Анастасия",
        lastName: "Иванова",
        middleName: "Ивановна",
        time: "13:00"
    },
    {
        firstName: "Иван",
        lastName: "Иванов",
        middleName: "Иванович",
        time: "14:00"
    },
    {
        firstName: "Иван",
        lastName: "Иванов",
        middleName: "Иванович",
        time: "17:00"
    },
]

export const ProfileDoctor = observer(() => {
    const location = useLocation().pathname.split('/');
    const {doctorStore: {getProfile, getReviews}} = useStores()
    const {specialityStore: {getTitleRuFromDepartmentsList}} = useStores()
    const [isAuth, setIsAuth] = useState(false)
    const [reviews, setReviews] = useState<Array<Reviewer>>()

    const [user, setUser] = useState({
        "id": "",
        "firstName": "",
        "lastName": "",
        "middleName": "",
        "department": "",
        "birthday": '',
        "email": "",
        "phone": "",
        "employmentDate": ''
    })

    useEffect(() => {
            getProfile().then(val => {
                const result = val.data
                const employmentData = +(new Date(Date.now()).getFullYear()) - +(new Date(result.employmentDate).getFullYear());
                getTitleRuFromDepartmentsList(result.department).then(
                    dep => {
                        setUser({
                            "id": result.id,
                            "firstName": result.firstName,
                            "lastName": result.lastName,
                            "middleName": result.middleName,
                            "department": dep!,
                            "birthday": new Date(result.birthday).toLocaleDateString(),
                            "email": result.email,
                            "phone": result.phone,
                            "employmentDate": employmentData.toString()
                        })
                    }
                )

                setIsAuth(true)
            })

            getReviews().then(value => setReviews(value.data.comments))
        }
        , [])

    return (
        <LayoutContainer className={styles.wrapper}>
            {isAuth ?
                <ProfileCard
                    firstName={user.firstName}
                    lastName={user.lastName}
                    middleName={user.lastName}
                    img={photo}
                    profile={user.department}
                    seniority={user.employmentDate}
                    date_of_birth={user.birthday}/>
                :
                <div>Загрузка...</div>
            }

            <Swiper
                spaceBetween={50}
                slidesPerView='auto'
                loop={true}
                speed={1000}
                pagination={true}
                className={styles.swiper__wrapper}
            >
                <SwiperSlide>
                    <Timetable
                        key={1}
                        day={'Понедельник'}
                        data={ArrPatients}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Timetable
                        key={2}
                        day={'Вторник'}
                        data={ArrPatients}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Timetable
                        key={3}
                        day={'Среда'}
                        data={ArrPatients}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Timetable
                        key={4}
                        day={'Четверг'}
                        data={ArrPatients}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Timetable
                        key={5}
                        day={'Пятница'}
                        data={ArrPatients}/>
                </SwiperSlide>
            </Swiper>

            <section className={styles.reviews__wrapper}>
                <h1 className={styles.reviews__title}>Отзывы</h1>


                <div className={styles.reviews}>
                    {reviews ? <Reviews reviewsList={reviews}/> : <div>Загрузка...</div>}
                </div>
            </section>
        </LayoutContainer>
    )
})