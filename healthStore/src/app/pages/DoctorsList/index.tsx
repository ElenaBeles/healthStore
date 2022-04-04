import {observer} from "mobx-react";
import {useStores} from "../../utils";
import {LayoutContainer} from "../../component/LayoutContainer";
import styles from "./index.module.sass";
import {CardDoctor} from "../../component/ui/CardDoctor";
import {useState} from "react";


export const DoctorsList = observer(() => {
    const { specialistStore: { specialists } } = useStores();
    const [departmentFilter, setDepartmentFilter] = useState("all");
    const onCategoriesSelectChange = (event: any) => {
        setDepartmentFilter(event.target.value);
    }

    let filterArrSpecialists = specialists;
    return (
        <LayoutContainer>
            <select name="department" onChange={onCategoriesSelectChange} className={ styles.search }>
                <option value="all" selected>Выбрать все направления</option>
                <option value="Терапевтия">Терапевтия</option>
                <option value="Стоматология">Стоматология</option>
                <option value="Хирургия">Хирургия</option>
            </select>
            <section className={ styles.doctors__wrapper }>
                { filterArrSpecialists.filter((doctor) => {
                    return doctor.department === departmentFilter || departmentFilter === "all"
                }).map((doctor, index ) => (
                    <CardDoctor fullname={ doctor.fullName }  id={ doctor.id } img={ doctor.img } department={ doctor.department }/>
                ) )}
            </section>
        </LayoutContainer>
    )
})