import {observer} from "mobx-react";
import styles from "./index.module.sass";
import {Button} from "../../../component/ui/Button";
import {useNavigate} from "react-router-dom";
import {useStores} from "../../../utils";
import {LayoutContainer} from "../../../component/LayoutContainer";
import {useEffect} from "react";
import {DoctorChoice} from "../../../component/Choise/Doctor";

export const DoctorSChoice = observer(() => {
    const isAuth = localStorage.getItem('token')

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
            if (!isAuth) {
                navigate('/')
            }
        }
        , [])

    return (
        <LayoutContainer>
            <main className={styles.wrapper}>
                <h1 className={styles.title}>Выберите специалиста</h1>
                <DoctorChoice/>
                <Button
                    className={styles.choice__btn}
                    onClick={goBack}
                    text={"Вернутся к выбору специальности"}
                    type={"button"}
                    status={"secondary"}/>
            </main>
        </LayoutContainer>
    )
})