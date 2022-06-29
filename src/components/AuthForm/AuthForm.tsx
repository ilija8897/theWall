import React, { useState } from 'react';

import style from './AuthForm.module.scss';

export const AuthForm = () => {
    return (
        <form className={ style.form }>
            <input type="text" name="" id="" />
            <input type="password" name="" id="" />
            <button type="submit">LogIn</button>
        </form>
    )
}
