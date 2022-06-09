import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CanvasState = {
    canvas: any;
    currentCanvas: any;
};

const initialState: CanvasState = {
    canvas: null,
    currentCanvas: null,
};

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState,
    reducers: {
        setCanvas: (state, { payload: canvas }: PayloadAction<CanvasRenderingContext2D>) => {
            state.canvas = canvas;
        },
        setCurrentCanvas: (state, { payload: canvas }: PayloadAction<HTMLCanvasElement>) => {
            state.currentCanvas = canvas;
        },
    },
});

export const { setCanvas, setCurrentCanvas } = canvasSlice.actions;
export default canvasSlice.reducer;
