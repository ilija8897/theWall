import { createSlice } from '@reduxjs/toolkit';

export const canvasSlice = createSlice({
    name: 'canvas',
    initialState: {
        canvas: undefined,
    },
    reducers: {
        setCanvas: (state, { payload: canvas }) => {
            state.canvas = canvas;
        }
    }
});

export const { setCanvas } = canvasSlice.actions;
export default canvasSlice.reducer;