import React, { useState, useRef } from 'react';

import { Toolbar } from '../Toolbar';
import { Settings } from '../Settings';
import { Canvas } from '../Canvas';

export const Form = () => {
    return (
        <div>
            <div className='tools-wrapper'>
                <Toolbar />
                <Settings />
            </div>
            <Canvas />
        </div>
    )
}
