import styles from './index.module.sass';
import logo from "../../assets/img/logo__footer.svg"
import React from "react";

export const Footer = () => {

    return (
        <footer>
            <div className={styles.wrapper}>
                <img src={logo} alt=""/>
                <p>
                    Все права защищены<br/>
                    Москва, &#8470; ЛО-77-01-016464 от&nbsp;7&nbsp;августа 2018&nbsp;г.<br/>
                    Учредитель&nbsp;&mdash; Чак Арина Александровна<br/>
                    Юридический адрес&nbsp;&mdash; <br/>
                    129626, г. Москва, Мира пр-кт, д.102, стр.23
                </p>
            </div>
        </footer>
    )
}