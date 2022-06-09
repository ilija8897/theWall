import { setDraw, State } from '@/store/reducers/tools';
import { Dispatch } from '@reduxjs/toolkit';
import { MouseEvent } from 'react';

export const eracer = {
    handleDown: function (
        { nativeEvent }: MouseEvent<HTMLCanvasElement>,
        ctx: CanvasRenderingContext2D,
        dispatch: Dispatch
    ) {
        ctx.lineWidth = 32;
        ctx.lineJoin = 'round';
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        dispatch(setDraw(true));
    },
    handleDraw: function ({ nativeEvent }: MouseEvent<HTMLCanvasElement>, ctx: CanvasRenderingContext2D, state: State) {
        if (state.isDraw) {
            ctx.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
            ctx.stroke();
        }
    },
    handleUp: function (ctx: CanvasRenderingContext2D, dispatch: Dispatch, state: State) {
        dispatch(setDraw(false));
        ctx.lineWidth = 1;
        ctx.strokeStyle = state.currentColor;
    },
};
export type EracerUtils = typeof eracer;
