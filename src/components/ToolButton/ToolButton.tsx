import React from 'react'

import cn from 'classnames';

import style from './ToolButton.modules.scss';
import { setActiveTool } from '@/store/reducers/tools';
import { useAppDispatch } from '@/hooks/redux';

type Props = {
    children?: React.ReactNode;
    style?: any;
    //TODO Вынести типы инструментов в общие
    label?: 'pencil' | 'eracer' | 'rect' | 'circle' | 'line';
}

export const ToolButton = ({ children, label }: Props) => {
    const dispatch = useAppDispatch();
    const handleSetTool = () => {
        dispatch(setActiveTool(label));
    }
    
    const classes = cn(style.root, { [style[label]]: label });

    return (
        <button className={classes} onClick={handleSetTool}>{children}</button>
    )
}
