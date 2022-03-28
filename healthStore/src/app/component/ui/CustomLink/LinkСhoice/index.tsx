import styles from './index.module.sass';
import cn from "classnames/bind";
import classNames from "classnames/bind";
import { ICustomLink } from "../index.interfaces";
import {Link, useMatch, useResolvedPath, useSearchParams} from "react-router-dom";
import {IChoiceLink} from "./index.interfaces";
import {Icon} from "../../Icon"; classNames();

const cx = cn.bind(styles);

export const LinkChoice = ( props : IChoiceLink ) => {
    const { to, className, children } = props;

    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});


    return(
        <Link
            to={`${to}`}
            className={cx(styles.link, className,{
                    linkActive: match
                }
            )}
        >
            <div className={ styles.link__wrapper}>
                {children}
            </div>
        </Link>
    )
}