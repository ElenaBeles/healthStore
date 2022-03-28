import {observer} from "mobx-react";
import styles from "../Doctor'sChoice/index.module.sass";
import {LinkChoice} from "../../../component/ui/CustomLink/LinkСhoice";
import {useStores} from "../../../utils";
import {Link} from "react-router-dom";
import {LayoutContainer} from "../../../component/LayoutContainer";

export const ChoiceOfSpecialty = observer(() => {
    const { specialityStore: { speciality } } = useStores();

    return (
        <LayoutContainer>
            <main className={ styles.wrapper }>
                <h1 className = { styles.title }>Выберите специальность</h1>
                <div className={ styles.list__wrapper }>
                    { speciality.map((item, index) => (
                        <LinkChoice to={`/make_an_appointment/${item.id}`} children={item.title}/>
                    ))
                    }
                </div>
            </main>
        </LayoutContainer>
    )
})