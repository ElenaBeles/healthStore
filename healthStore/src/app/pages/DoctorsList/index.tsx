import {observer} from "mobx-react";
import {useStores} from "../../utils";
import {LayoutContainer} from "../../component/LayoutContainer";
import styles from "./index.module.sass";
import {CardDoctor} from "../../component/ui/CardDoctor";
import {useEffect, useState} from "react";


export const DoctorsList = observer(() => {
    const {doctorStore: {getDoctorsFromDepartment, getDoctorsList}} = useStores();
    const [departmentFilter, setDepartmentFilter] = useState("all");
    const {specialityStore: {getDepartments, getTitleRuFromDepartmentsList}} = useStores();
    const [departments, setDepartments] = useState<Array<any>>()
    const [doctorsList, setDoctorsList] = useState<Array<any>>([])
    const [isDownloading, setIsDownloading] = useState<boolean>(false);

    useEffect(() => {
        getSpeciality()
    }, [])

    const onCategoriesSelectChange = (currentCategory: string) => {
        setDepartmentFilter(currentCategory)
    }

    const getSpeciality = () => {
        getDepartments().then((departments) => {
            setDepartments(Array.from(departments))
        })
    }

    const createFirstName = (firstName: string, lastName: string, middleName?: string) => {
        return lastName + ' ' + firstName + ' ' + middleName
    }

    useEffect(() => {
        setIsDownloading(true)
        setTimeout(() => {
            departmentFilter === 'all' ?
                getDoctorsList().then(value => {
                    setDoctorsList(Array.from(value.data))
                })
                :
                getDoctorsFromDepartment(departmentFilter).then(value => setDoctorsList(Array.from(value.data)))
            setIsDownloading(false)
        }, 3000)
    }, [departmentFilter])

    /*
    не рабочее, доделать
     */
    const getRuDepartmentName = (departmentName: string): string => {
        getTitleRuFromDepartmentsList(departmentName).then(value => {
            return value
        })
        return departmentName
    }


    return (
        <LayoutContainer>
            <select name="department" onChange={(e: any) => onCategoriesSelectChange(e.target.value)}
                    className={styles.search}>
                <option value="all" selected>Выбрать все направления</option>
                {departments?.map((item, index) => (
                    <option value={item[0]}>{item[1]}</option>))
                }
            </select>
            <section className={styles.doctors__wrapper}>
                {isDownloading && <div className={styles.donut}/>}
                {!isDownloading && doctorsList?.map((doctor: any) => <CardDoctor
                    fullname={createFirstName(doctor.firstName, doctor.lastName, doctor.middleName)}
                    id={doctor.id}
                    department={getRuDepartmentName(doctor.department)}/>)}
                {doctorsList?.length === 0 && !isDownloading &&
                    <div>Мы&nbsp;находимся в&nbsp;поиске врачей данной сферы. Пожалуйста, обратитесь позднее</div>}
            </section>
        </LayoutContainer>
    )
})