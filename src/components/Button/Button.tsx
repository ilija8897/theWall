import React from 'react';

import style from './Button.modules.sass';

type Props = {
    label: string;
    onClick: (userData: any) => void;
};

export const Button = (props: Props) => {
    return <button onClick={props.onClick} className={style.root}>{props.label}</button>
}