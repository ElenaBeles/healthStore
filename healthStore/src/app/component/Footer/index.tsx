import styles from './index.module.sass';
import cn from "classnames/bind";
import classNames from "classnames/bind";
import logo from "../../assets/img/logo__footer.svg"

classNames();

const cx = cn.bind(styles);

export const Footer = () => {
        return(
            <footer>
                <div className={ styles.wrapper }>
                    <img src={ logo } alt=""/>
                    <p>
                        Все права защищены<br/>
                        Москва, № ЛО-77-01-016464 от 7 августа 2018 г.<br/>
                        Учредитель - Чак Арина Александровна<br/>
                        Юридический адрес - <br/>
                        129626, г. Москва, Мира пр-кт, д.102, стр.23
                    </p>
                </div>
            </footer>
    )
}