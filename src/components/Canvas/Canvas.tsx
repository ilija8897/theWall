import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCanvas } from '@/store/reducers/canvas';
import { setDraw } from '@/store/reducers/tools';

import style from './Canvas.modules.scss';
import pencilCursor from '../../images/pencil-cursor.svg';
import eracerCursor from '../../images/circle.svg';
import classNames from 'classnames';

type Canvas = {
    current: HTMLCanvasElement;
};

export const Canvas = function() {
    const [ isMouseDown, setMouseDown] = useState(false);
    const dispatch = useDispatch();
    const canvasRef: Canvas = useRef();
    const ctxRef = useRef(null);

    const tool = useSelector((state: any) => state.tools.activeFunctional);
    const activeTool = useSelector((state: any) => state.tools.activeTool);    
    const isDraw = useSelector((state: any) => state.tools.isDraw);
    const startPosition = useSelector((state: any) => state.tools.startPosition);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;

        const ctx = canvas.getContext('2d');
        ctx.scale(2,2);
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1;
        ctxRef.current = ctx;
        // dispatch(setCanvas(canvas));
        // document.body.style.cursor = pencilCursor;
    }, []);

    const styles = classNames(
        style.root,
        style[activeTool]
    )

    const drawingData = {
        ctx: ctxRef,
        dispatch,
        isDraw,
    };
    // TODO возможно стоит переделать хендлеры событий мыши на акшены в редакс
    // ИЛИ перенести  активный инструмент в локальный стейт кенвас как actionCreator
    
    return (
        <canvas
            onMouseDown={(e) => tool.handleDown(e, ctxRef, dispatch)}
            onMouseMove={(e) => tool.handleDraw(e, ctxRef, isDraw, startPosition)}
            onMouseUp={(e) => tool.handleUp(ctxRef, dispatch)}
            ref={canvasRef}
            className={styles}
            height={500}
            width={700}>
        </canvas>
    )
}