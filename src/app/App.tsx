import React from 'react';
import { Form } from 'components/Form';

import style from './App.modules.sass';
import { Link } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <div className={style.mainWrapper}>
                <header>
                    <h1>Evil Martians</h1>
                </header>
                <main>
                    <Form />
                </main>
            </div>
        </>
    )
};
