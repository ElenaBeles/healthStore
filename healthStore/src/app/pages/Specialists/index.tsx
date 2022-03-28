import {observer} from "mobx-react";
import {useStores} from "../../utils";
import {useNavigate} from "react-router-dom";
import {LayoutContainer} from "../../component/LayoutContainer";
import styles from "../Registration/Doctor'sChoice/index.module.sass";
import {LinkChoice} from "../../component/ui/CustomLink/LinkСhoice";
import {Button} from "../../component/ui/Button";

export const Specialists = observer(() => {
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
                    onClick={ goBack }
                    text={"Вернутся к выбору специальности"}
                    type={"button"}/>
            </main>
        </LayoutContainer>
    )
})