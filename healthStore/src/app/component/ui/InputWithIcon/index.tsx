import React, {FC} from 'react';
import {IInputWithIcon} from "./index.interfaces";
import style from './index.module.sass';
import cn from "classnames/bind";
import classNames from "classnames/bind";
import {Icon} from "../Icon";

classNames();

const cx = cn.bind(style);

export const InputWithIcon: FC<IInputWithIcon> = (props: IInputWithIcon) => {
    const {value, onChange, placeholder, type = 'text', src, status} = props;

    return (
        <div>
            <div className={cx({
                wrapper_InputWithImg_active: status === 'active',
                wrapper_InputWithImg: status !== 'active'
            })}>
                <Icon name={src}/>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}