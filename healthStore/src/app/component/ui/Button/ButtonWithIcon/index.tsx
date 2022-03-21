import styles from './index.module.sass';
import {IButtonWithIcon} from "./index.interfaces";

import cn from "classnames/bind";
import {Icon} from "../../Icon";
import React from "react";
import {Button} from "../index";

const cx = cn.bind(styles);

export const ButtonWithIcon = ( props : IButtonWithIcon ) => {
    const { onClick, src, status, text, type } = props;

    return(
        <div>
            <div className = { cx( {
                wrapper_ButtonWithImg_active: status === 'active',
                wrapper_ButtonWithImg: status !== 'active'
            })  }>
                <Icon  name = { src }/>
                <Button
                    onClick = { onClick }
                    text = { text }
                    type = { type }
                    status={ "usually"}/>
            </div>
        </div>
    )
}