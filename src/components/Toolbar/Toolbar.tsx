import React from 'react';
import { ToolButton } from '../ToolButton';
import { Color } from '../Tools/tools/Color';

import style from './Toolbar.modules.scss';

export const Toolbar = () => {
    return (
        <div className={style.root}>
                <ToolButton label='pencil' />
                <ToolButton label='eracer' />
                <ToolButton label='rect' />
                <Color />
        </div>
    )
};
