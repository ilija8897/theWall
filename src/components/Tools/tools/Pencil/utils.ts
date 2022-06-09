import { MouseEvent } from 'react';
import { setDraw, State } from '@/store/reducers/tools';
import { Dispatch } from '@reduxjs/toolkit';

export const pencil = {
    handleDown: function (
        { nativeEvent }: MouseEvent<HTMLCanvasElement>,
        ctx: CanvasRenderingContext2D,
        dispatch: Dispatch,
        state: State
    ) {
        ctx.beginPath();
        ctx.strokeStyle = state.currentColor;
        ctx.lineWidth = state.lineThickness;
        ctx.lineJoin = 'round';
        ctx.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        dispatch(setDraw(true));
    },
    handleDraw: function ({ nativeEvent }: MouseEvent<HTMLCanvasElement>, ctx: CanvasRenderingContext2D, state: State) {
        if (state.isDraw) {
            ctx.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
            ctx.stroke();
        }
    },
    handleUp: function (ctx: CanvasRenderingContext2D, dispatch: Dispatch) {
        dispatch(setDraw(false));
    },
};

export type PencilUtils = typeof pencil;
