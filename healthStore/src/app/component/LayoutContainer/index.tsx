import styles from './index.module.sass';
import {Link} from "react-router-dom";
import {Header} from "../Header";
import {Footer} from "../Footer";

export const LayoutContainer = (props: any) => {
    const {children} = props;

    return (
        <>
            <Header/>
            <div className={styles.container}>
                <div className={styles.navigation__wrapper}>
                    <nav className={styles.navigation}>
                        <Link className={styles.navigation__link} to={"/profile"}>Профиль</Link>
                        <Link className={styles.navigation__link} to={"/recommendations"}>Рекомендации</Link>
                        <Link className={styles.navigation__link} to={'/'}>ВОЗ</Link>
                    </nav>
                </div>
                <div className={styles.main__wrapper}>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
            <Footer/>
        </>
    )
}