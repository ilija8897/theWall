import React from 'react';

import cn from 'classnames';

import style from './ToolButton.module.scss';
import { setActiveTool } from '@/store/reducers/tools';
import { useAppDispatch } from '@/hooks/redux';
import { AdditionalTools, ShapeTools } from '..';

type Props = {
    children?: React.ReactNode;
    // style?: any;
    onClick?: () => void;
    className?: Record<string, unknown> | string;
    //TODO Вынести типы инструментов в общие
    label?: AdditionalTools | ShapeTools;
};

export const ToolButton = ({ children, label, onClick, className }: Props) => {
    const dispatch = useAppDispatch();
    const handleSetTool = () => {
        dispatch(setActiveTool(label as ShapeTools));
    };

    const classes = cn(style.root, className, { [style[label]]: label });

    return (
        <button className={classes} onClick={!onClick ? handleSetTool : onClick}>
            {children}
        </button>
    );
};
