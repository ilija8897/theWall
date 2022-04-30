import React from 'react';
import { Tools } from '../Tools';

import style from './Toolbar.modules.scss';

export const Toolbar = () => {
    return (
        <div className={style.root}>
            <Tools>
                <Tools.Pensil label='Pensil' />
                <Tools.Eracer label='Eracer' />
                <Tools.Rect label='Rect' />
            </Tools>
        </div>
    )
};
