import { MouseEvent } from 'react';
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { ShapeTools, toolsUtils, UtilsObject } from 'components/Tools';
import { RootState } from '..';

type ToolsType = {
    payload: 'pencil' | 'eracer' | 'rect' | 'circle' | 'line' | 'undo';
};

export type State = {
    activeTool: ToolsType['payload'];
    activeFunctional: UtilsObject;
    isDraw: boolean;
    currentColor: string;
    lineThickness: number;
    startPosition: { x: number; y: number };
    savedCanvas: null | string;
    figureArray: number[];
};

const initialState: State = {
    activeTool: 'pencil',
    currentColor: '#000000',
    lineThickness: 1,
    startPosition: { x: 0, y: 0 },
    savedCanvas: null,
    activeFunctional: toolsUtils['pencil'],
    isDraw: false,
    figureArray: [],
};

export const toolsSlice = createSlice({
    name: 'tools',
    initialState,
    reducers: {
        setActiveTool: (state, { payload: tool }: PayloadAction<ShapeTools>) => {
            state.activeTool = tool;
            state.activeFunctional = toolsUtils[tool];
        },
        setColor: (state, { payload }: PayloadAction<string>) => {
            state.currentColor = payload;
        },
        setLineThickness: (state, { payload }: PayloadAction<string>) => {
            state.lineThickness = parseFloat(payload);
        },
        setStartPosition: (state, { payload: { x, y } }: PayloadAction<{ x: number; y: number }>) => {
            state.startPosition = { x, y };
        },
        setDraw: (state, { payload: isDraw }: PayloadAction<boolean>) => {
            state.isDraw = isDraw;
        },
        saveCanvas: (state, { payload: canvas }: PayloadAction<string>) => {
            state.savedCanvas = canvas;
        },
        undo: (state) => {
            state.figureArray.push(1);
        },
    },
});
export const canvasAction = (e: MouseEvent<HTMLCanvasElement>) => (dispatch: Dispatch, getState: () => RootState) => {
    const {
        tools,
        tools: { activeFunctional },
        canvas: { canvas },
    } = getState();
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
};

export const { setActiveTool, setDraw, setLineThickness, setStartPosition, saveCanvas, setColor, undo } =
    toolsSlice.actions;
export default toolsSlice.reducer;
