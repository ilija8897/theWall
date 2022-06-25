import React from 'react';
import { ToolButton } from '../Tools/ToolButton';
import { Color } from '../Tools/tools/Color';
import { LineThickness } from '../Tools/tools/LineThickness';

import style from './Toolbar.module.scss';

export const Toolbar = () => {
    return (
        <div className={style.root}>
            <LineThickness />
            <ToolButton label='pencil' />
            <ToolButton label='eracer' />
            <ToolButton label='rect' />
            <ToolButton label='circle' />
            <ToolButton label='line' />
            <Color />
        </div>
    );
};
