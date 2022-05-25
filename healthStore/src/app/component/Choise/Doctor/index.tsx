import styles from '../SpecialityChoise/index.module.sass'

import {observer} from "mobx-react"
import {LinkChoice} from "../../ui/CustomLink/LinkСhoice";
import {useStores} from "../../../utils";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const DoctorChoice = observer((props: any) => {
    const {doctorStore: {getDoctorsFromDepartment}} = useStores();
    const navigate = useLocation()
    const dep = navigate.pathname.split('/').slice(-1);
    const specialists = new Map<any, string>()
    const [doctors, setDoctors] = useState<Array<any>>([]);

    useEffect(() => {
        getDoctorsFromDepartment(dep.toString()).then(val => {
            val.data.map((val: any, index: any) => {
                let fullName = val.lastName + " " + val.firstName + " " + val.middleName
                specialists.set(index, fullName)
            })
            setDoctors(Array.from(specialists))
        })
    }, [])


    return (
        <>
            <div className={styles.list__wrapper}>
                <div className={styles.list__wrapper}>
                    {doctors.map((item, index) => (
                        <LinkChoice to={`${navigate.pathname}/${item[0]}`} key={index} children={item[1]}/>
                    ))}
                </div>
            </div>
        </>
    )
})