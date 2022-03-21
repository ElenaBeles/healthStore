import styles from './index.module.sass';
import {Link} from "react-router-dom";

export const LayoutContainer = (props: any) => {
    const { children } = props;

    return(
        <div className = { styles.container }>
            <div className = { styles.navigation__wrapper }>
                <nav className = { styles.navigation }>
                    <Link className = { styles.navigation__link } to={"/about_us"}>О нас</Link>
                    <Link className = { styles.navigation__link } to={"/news"}>Новости</Link>
                    <Link className = { styles.navigation__link } to={"/recommendations"}>Рекомандации</Link>
                    <Link className = { styles.navigation__link } to={"/reviews"}>Отзывы</Link>
                    <Link className = { styles.navigation__link } to={"/vacancies"}>Вакансии</Link>
                </nav>
            </div>
            <div  className = { styles.main__wrapper }>
                <main>
                    { children }
                </main>
            </div>
        </div>
    )
}