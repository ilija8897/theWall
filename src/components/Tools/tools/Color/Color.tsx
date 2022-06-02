import { setColor } from '@/store/reducers/tools';
import React from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import style from './Color.modules.scss';
export const Color = () => {
    const dispatch = useAppDispatch();

    const currentColor = useAppSelector(state => state.tools.currentColor);

    const handleColorPick = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setColor(e.target.value));
    }
    return (
        <input className={style.root} type='color' onChange={handleColorPick} value={currentColor} />
    );
};
