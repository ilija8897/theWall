import React, { MouseEvent, useLayoutEffect, useRef } from 'react';

import { setCanvas, setCurrentCanvas } from '@/store/reducers/canvas';
import { canvasAction, setActiveTool } from '@/store/reducers/tools';

import style from './Canvas.modules.scss';

import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

type Canvas = {
    current: HTMLCanvasElement;
};

export const Canvas = function () {
    const dispatch = useAppDispatch();
    const canvasRef: Canvas = useRef();
    const ctxRef = useRef(null);

    const activeTool = useAppSelector((state) => state.tools.activeTool);

    useLayoutEffect(() => {
        dispatch(setActiveTool('pencil'));
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;

        const ctx = canvas.getContext('2d');
        ctx.scale(2, 2);
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctxRef.current = ctx;
        dispatch(setCanvas(ctx));
        dispatch(setCurrentCanvas(canvas));
    }, []);

    const styles = classNames(style.root, style[activeTool]);

    const handlecanvasAction = (e: MouseEvent<HTMLCanvasElement>) => {
        dispatch(canvasAction(e));
    };

    return (
        <canvas
            onMouseDown={(e) => handlecanvasAction(e)}
            onMouseMove={(e) => handlecanvasAction(e)}
            onMouseUp={(e) => handlecanvasAction(e)}
            ref={canvasRef}
            className={styles}
            height={500}
            width={700}
        ></canvas>
    );
};
