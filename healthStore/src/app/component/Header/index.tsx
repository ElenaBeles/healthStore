import styles from './index.module.sass';

import {CustomLink} from "../ui/CustomLink";
import {Button} from "../ui/Button";
import logo from "../../assets/img/logo.svg"
import {SignInClientModal} from "../Modals/SignInClientModal";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import {Link, useNavigate} from "react-router-dom";

export const Header = observer((props: any) => {
    const {modalStore: {setCurrentModal}} = useStores();
    const {userStore: {logOut}} = useStores();
    const navigate = useNavigate();

    const openModal = () => {
        setCurrentModal(SignInClientModal)
    }

    const logout = () => {
        logOut().then(
            () => navigate('/')
        )
    }
    const isAuth: boolean = !!localStorage.getItem('token')

    return (
        <>
            <header className={styles.header__wrapper}>
                <div className={styles.header__info__main}>
                    <div className={styles.info__main__wrapper}>
                        <div>
                            <h1 className={styles.title}>МЕДИЦИНСКИЙ ЦЕНТР</h1>
                            <p>ежедневно
                                8:00 - 20:00</p>
                            <p>8(495)741-10-01
                            </p>
                        </div>
                        <div className={styles.header__logo}>
                            <Link to={"/"}>
                                <img src={logo} alt=""/>
                            </Link>

                        </div>
                        <div className={styles.info__main__btn__wrapper}>
                            {isAuth ? <Button className={styles.info__main__btn} onClick={logout} text={"Выйти"}
                                              status={"secondary"}/> :
                                <Button className={styles.info__main__btn} onClick={openModal} text={"войти"}
                                        status={"secondary"}/>}
                            <Link className={styles.info__main__btn} to={"/make-an-appointment"}>
                                <Button text={"записаться на приём"} type={"button"} status={"secondary"}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.header__info__navigation}>
                <div className={styles.info__main__wrapper}>
                    <nav>
                        <CustomLink className={styles.link}
                                    children={"Записаться на приём"} to={"/make-an-appointment"}/>
                        <CustomLink className={styles.link}
                                    children={"Специалисты"} to={"/specialists"}/>
                        <CustomLink className={styles.link}
                                    children={"Контакты"} to={"/contacts"}/>
                        <CustomLink className={styles.link}
                                    children={"Специфика работы"} to={"/about-specific"}/>
                    </nav>
                </div>
            </div>
        </>

    )
})