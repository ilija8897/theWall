import { setColor } from '@/store/reducers/tools';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';

export const Color = () => {
    const dispatch = useDispatch();
    const currentColor = useSelector((state: RootState) => state.tools.currentColor);
    const handleColorPick = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target);
        
        dispatch(setColor(e.target.value));
    }
    return (
        <input type='color' onChange={handleColorPick} value={currentColor} />
    );
};
