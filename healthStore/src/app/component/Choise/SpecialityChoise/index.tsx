import styles from './index.module.sass';

import {observer} from "mobx-react"
import {LinkChoice} from "../../ui/CustomLink/LinkСhoice";
import {useStores} from "../../../utils";
import {useEffect, useState} from "react";
import {appointmentPath} from "../../../constants/Paths";

export const SpecialityChoice = observer((props: any) => {
    const [deps, setDeps] = useState<Array<any>>()

    const {specialityStore: {getDepartments}} = useStores()

    useEffect(() => {
        getSpeciality()
    }, [])

    const getSpeciality = () => {
        getDepartments().then((departments) => {
            setDeps(Array.from(departments))
        })
    }

    return (
        <>
            <h1 className={styles.title}>Выберите специальность</h1>
            <div className={styles.list__wrapper}>
                {deps?.map((item, index) => (
                    <LinkChoice key={index} to={"/" + appointmentPath + item[0]} children={item[1]}/>
                ))
                }
            </div>
        </>
    )
})