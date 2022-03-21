import styles from './index.module.sass';

import logo from "../../assets/img/logo.svg"
import {observer} from "mobx-react";
import {CustomLink} from "../ui/CustomLink";
import {Button} from "../ui/Button";
import {ButtonWithIcon} from "../ui/Button/ButtonWithIcon";
import {Icon} from "../ui/Icon";

export const Header = observer ((props: any) => {

    return(
        <header className={ styles.header__wrapper }>
            <div className={ styles.header__info__main }>
                <div className={ styles.info__main__wrapper }>
                    <div className={ styles.info__main__item }>
                        <h1>МЕДИЦИНСКИЙ ЦЕНТР</h1>
                        <p>ежедневно
                            8:00 - 20:00</p>
                        <p>8(495)741-10-01
                        </p>
                    </div>
                    <div className={ styles.info__main__item }>
                        <ButtonWithIcon
                            src={ "sign_in" }
                            text={ "Личный кабинет"}
                            type={"button" }
                        />
                        <Button text={"записаться на приём"} type={"button"} status={"primary"}/>
                    </div>
                </div>
            </div>
            <div className={ styles.header__info__navigation }>
                <div className={ styles.info__main__wrapper }>
                    <nav>
                        <CustomLink className={ styles.link }
                                    children={"Записаться на приём"} to={"/registration"}/>
                        <CustomLink className={ styles.link }
                                    children={"Специалисты"} to={"/specialists"}/>
                        <CustomLink className={ styles.link }
                                    children={"Контакты"} to={"/contacts"}/>
                        <CustomLink className={ styles.link }
                                    children={"О нас"}
                                    to={"/about_us"}/>
                    </nav>
                </div>
            </div>
        </header>
    )
})