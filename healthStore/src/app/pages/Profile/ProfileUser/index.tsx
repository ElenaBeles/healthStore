import {LayoutContainer} from "../../../component/LayoutContainer";
import {ProfileCard} from "../../../component/ui/ProfileCard";
import photo from '../../../assets/img/doctorProfileMock.webp'
import {Button} from "../../../component/ui/Button";
import styles from "../ProfileDoctor/index.module.sass";
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useStores} from "../../../utils/use-stores-hook";


export const ProfileUser = () => {
    const location = useLocation().pathname.split('/');
    const {userStore: {getProfile}} = useStores()
    const [user, setUser] = useState({
        address: 'result.address',
        birthday: ' result.birthday',
        bloodType: 'result.bloodType',
        email: 'result.bloodType',
        firstName: ' result.firstName',
        id: 'result.id',
        lastName: 'result.lastName',
        middleName: 'result.middleName',
        passportNumber: 'result.passportNumber',
        phone: 'result.phone',
        policyNumber: ' result.policyNumber'
    })

    useEffect(() => {
            getProfile().then(val => {
                const result = val.data
                setUser({
                    address: result.address,
                    birthday: new Date(result.birthday).toLocaleDateString(),
                    bloodType: result.bloodType,
                    email: result.bloodType,
                    firstName: result.firstName,
                    id: result.id,
                    lastName: result.lastName,
                    middleName: result.middleName,
                    passportNumber: result.passportNumber,
                    phone: result.phone,
                    policyNumber: result.policyNumber
                })
            })
        }
        , [])

    return (
        <LayoutContainer>
            <div className={styles.wrapper}>
                {user ? <ProfileCard
                        firstName={user.firstName}
                        lastName={user.lastName}
                        middleName={user.middleName}
                        img={photo}
                        blood_type={user.bloodType}
                        date_of_birth={user.birthday}/>
                    :
                    <div>downloading....</div>}
                <Button status={"secondary"} text={'Посмотреть карточку'}/>
            </div>
        </LayoutContainer>
    )
}