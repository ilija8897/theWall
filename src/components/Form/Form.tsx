import React, { useState, useRef } from 'react';

import { Input } from 'components/Input';
import { Button } from 'components/Button';

export const Form = () => {
    const [userData, setUserData] = useState({});
    const loginRef = useRef(null);
    const passRef = useRef(null);
    
    const handleClick = () => {
        const login = loginRef.current.value;
        const password = passRef.current.value;
        fetch('http://localhost:5555/registration', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                login,
                password
            })
        })
        .then((resp) => resp.json())
        .then(result => {
            console.log(result);
            
            result.status === 200 && alert('Registration complete');
        })
        .catch(error => {
            throw new Error(error);
        });
    }

    return (
        <div>
            <Input ref={ loginRef } placeholder='Name' />
            <Input ref={ passRef } placeholder='Password' />
            <Button onClick={handleClick} label='Log In' />
        </div>
    )
}
