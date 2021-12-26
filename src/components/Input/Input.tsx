import React, { forwardRef } from 'react';

import style from './Input.modules.sass';

type Props = {
    placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    return (
        <input ref={ref} className={style.root} type="text" placeholder={props.placeholder}/>
    )
})