import { createSlice } from '@reduxjs/toolkit';
import { toolsUtils } from 'components/Tools';

type ToolsType = {
    payload: 'pencil' | 'eracer' | 'rect';
}
type State = {
    activeTool: ToolsType['payload'];
    activeFunctional: any;
    isDraw: boolean;
    startPosition: { x: number, y: number };
    savedCanvas: null | HTMLCanvasElement;
}

const initialState: State = {
    activeTool: 'pencil',
    startPosition: { x: 0, y: 0 },
    savedCanvas: null,
    activeFunctional: toolsUtils ? toolsUtils['pencil'] : {},
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
        setDraw: (state, {payload: isDraw}) => {
            state.isDraw = isDraw;
        },
        setStartPosition: (state, { payload: { x, y }}) => {
            state.startPosition = { x, y };
        },
        saveCanvas: (state, { payload: canvas}) => {
            state.savedCanvas = canvas;
        }
    }
});

export const { setActiveTool, setDraw, setStartPosition, saveCanvas } = toolsSlice.actions;
export default toolsSlice.reducer;