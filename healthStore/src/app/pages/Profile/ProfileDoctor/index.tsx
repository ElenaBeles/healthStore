import {observer} from "mobx-react";
import {LayoutContainer} from "../../../component/LayoutContainer";
import styles from './index.module.sass';
import {ProfileCard} from "../../../component/ui/ProfileCard";
import photo from '../../../assets/img/doctorProfileMock.webp'
import {Timetable} from "../../../component/Timetable";
export const ProfileDoctor = observer(() => {
    return (
        <LayoutContainer>
            <ProfileCard
            firstName={"Фамилия"}
            lastName={"Имя"}
            middleName={"Отчество"}
            img={ photo }
            profile={ 'Стоматология'}
            seniority={ 20 }
            date_of_birth={ '19.03.1964' }/>
            <Timetable
            day = { 'Понедельник'}/>
        </LayoutContainer>
    )
})