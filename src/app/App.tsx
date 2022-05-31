import React from 'react';

import { Toolbar } from 'components/Toolbar';
import { Canvas } from 'components/Canvas';

import style from './App.modules.scss';

export const App = () => {    
    return (
        <>
            <div className={style.mainWrapper}>
                <main>
                    <div className={style.header}>
                        <h1>theWall</h1>
                        <Toolbar />
                        {/* <Settings /> */}
                    </div>
                    <Canvas />
                </main>
            </div>
        </>
    )
};
