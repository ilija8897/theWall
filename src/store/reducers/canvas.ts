import { createSlice } from '@reduxjs/toolkit';

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState: {
        canvas: undefined,
        currentCanvas: undefined,
    },
    reducers: {
        setCanvas: (state, { payload: canvas }) => {
            state.canvas = canvas;
        },
        setCurrentCanvas: (state, { payload: canvas }) => {
            state.currentCanvas = canvas;
        }
    }
});

export const { setCanvas, setCurrentCanvas } = canvasSlice.actions;
export default canvasSlice.reducer;