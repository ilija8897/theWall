import React from 'react';

import cn from 'classnames';

import style from './ToolButton.modules.scss';
import { setActiveTool } from '@/store/reducers/tools';
import { useAppDispatch } from '@/hooks/redux';

type Props = {
    children?: React.ReactNode;
    style?: any;
    onClick?: () => void;
    className?: Record<string, unknown>;
    //TODO Вынести типы инструментов в общие
    label?: 'pencil' | 'eracer' | 'rect' | 'circle' | 'line';
};

export const ToolButton = ({ children, label, onClick, className }: Props) => {
    const dispatch = useAppDispatch();
    const handleSetTool = () => {
        dispatch(setActiveTool(label));
    };

    const classes = cn(style.root, className, { [style[label]]: label });

    return (
        <button
            className={classes}
            onClick={!onClick ? handleSetTool : onClick}
        >
            {children}
        </button>
    );
};
