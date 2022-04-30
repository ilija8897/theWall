import React from 'react'

import { useDispatch } from 'react-redux';
import cn from 'classnames';

import style from './Button.modules.scss';
import { setActiveTool } from '@/store/reducers/tools';

type Props = {
    children?: React.ReactNode;
    style?: any;
    label?: 'pencil' | 'eracer' | 'rect';
}

export const Button = ({ children, style: additionalStyle, label }: Props) => {
    const dispatch = useDispatch();
    const classes = cn(style.root, { [additionalStyle]: additionalStyle});
    const handleSetTool = () => {
        dispatch(setActiveTool(label));
    }

    return (
        <button className={classes} onClick={handleSetTool}>{children}</button>
    )
}
