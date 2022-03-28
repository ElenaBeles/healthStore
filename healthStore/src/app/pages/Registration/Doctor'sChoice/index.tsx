import {observer} from "mobx-react";
import styles from "./index.module.sass";
import {LinkChoice} from "../../../component/ui/CustomLink/LinkСhoice";
import {Button} from "../../../component/ui/Button";
import {useNavigate} from "react-router-dom";
import {useStores} from "../../../utils";
import {LayoutContainer} from "../../../component/LayoutContainer";

export const DoctorSChoice = observer(() => {
    const { specialistStore: { specialists } } = useStores();

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
    return (
        <LayoutContainer>
            <main className={ styles.wrapper }>
                <h1 className = { styles.title }>Выберите специалиста</h1>
                <div className={ styles.list__wrapper }>
                    { specialists.map((item, index) => (
                        <LinkChoice to={`/`} children={item.fullName}/>
                    ))
                    }
                </div>
                <Button
                    className={ styles.choice__btn }
                    onClick={ goBack }
                    text={"Вернутся к выбору специальности"}
                    type={"button"}
                    status={"secondary"}/>
            </main>
        </LayoutContainer>
    )
})