import { useAppDispatch } from '@/hooks/redux';
import { undo } from '@/store/reducers/tools';
import * as React from 'react';
import { ToolButton } from '../../ToolButton';

export const Undo = () => {
    const dispatch = useAppDispatch();
    const handleUndo = () => {
        dispatch(undo());
    };
    return <ToolButton label='undo' onClick={handleUndo} />;
};
