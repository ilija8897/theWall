import { MouseEvent } from 'react';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { toolsUtils } from 'components/Tools';
import { RootState } from '..';

type ToolsType = {
    payload: 'pencil' | 'eracer' | 'rect' | 'circle' | 'line';
}

export type State = {
    activeTool: ToolsType['payload'];
    activeFunctional: undefined | any;
    isDraw: boolean;
    currentColor: string;
    lineThickness: string;
    startPosition: { x: number, y: number };
    savedCanvas: null | string;
}

const initialState: State = {
    activeTool: 'pencil',
    currentColor: '#000000',
    lineThickness: '1',
    startPosition: { x: 0, y: 0 },
    savedCanvas: null,
    activeFunctional: undefined,
    isDraw: false,
};

export const toolsSlice = createSlice({
    name: 'tools',
    initialState,
    reducers: {
        setActiveTool: (state, { payload: tool }: ToolsType) => {
            state.activeTool = tool;
            state.activeFunctional = toolsUtils[tool];
        },
        setColor: (state, action) => {
            state.currentColor = action.payload;
        },
        setLineThickness: (state, action) => {
            state.lineThickness = action.payload;
        },
        setStartPosition: (state, { payload: { x, y }}) => {
            state.startPosition = { x, y };
        },
        setDraw: (state, {payload: isDraw}) => {
            state.isDraw = isDraw;
        },
        saveCanvas: (state, { payload: canvas}) => {
            state.savedCanvas = canvas;
        },
    }
});
export const canvasAction = (e: MouseEvent<HTMLCanvasElement>) => async (dispatch: Dispatch, getState: () => RootState) => {
    const { tools, tools: { activeFunctional }, canvas: { canvas } } = getState();
    // причесать параметры функций
    switch (e.type) {
        case 'mousedown':
            activeFunctional.handleDown(e, canvas, dispatch, tools);
            break;
        case 'mousemove':
            activeFunctional.handleDraw(e, canvas, tools);
            break;
        case 'mouseup':
            activeFunctional.handleUp(canvas, dispatch, tools);
            break;
        default:
            break;
    }
    
}

export const { setActiveTool, setDraw, setLineThickness, setStartPosition, saveCanvas, setColor } = toolsSlice.actions;
export default toolsSlice.reducer;