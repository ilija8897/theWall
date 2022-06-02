import { setLineThickness } from '@/store/reducers/tools';
import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import style from './LineThickness.modules.scss';
import { ToolButton } from '../../ToolButton';

export const LineThickness = () => {
    const dispatch = useAppDispatch();
    const [isOpen, setOpenState] = useState(false);

    const lineThickness = useAppSelector((state) => state.tools.lineThickness);

    const handleColorPick = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLineThickness(e.target.value));
    };
    const handleOpen = () => {
        setOpenState((state) => !state);
    };
    return (
        <ToolButton className={style.root} onClick={handleOpen}>
            {lineThickness}
            <input
                className={isOpen && style.visible}
                min='1'
                max='48'
                type='range'
                onChange={handleColorPick}
                value={lineThickness}
            />
        </ToolButton>
    );
};
