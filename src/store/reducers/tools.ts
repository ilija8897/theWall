import { createSlice } from '@reduxjs/toolkit';
import { toolsUtils } from 'components/Tools';

type ToolsType = {
    payload: 'pencil' | 'eracer';
}
type State = {
    activeTool: ToolsType['payload'];
    activeFunctional: any;
    isDraw: boolean;
}

export const toolsSlice = createSlice({
    name: 'tools',
    initialState: {
        activeTool: 'pencil',
        activeFunctional: toolsUtils ? toolsUtils['pencil'] : {},
        isDraw: false,
    },
    reducers: {
        setActiveTool: (state, { payload: tool }: ToolsType) => {
            state.activeTool = tool;
            state.activeFunctional = toolsUtils[tool];
        },
        setDraw: (state, {payload: isDraw}) => {
            state.isDraw = isDraw;
        }
    }
});

export const { setActiveTool, setDraw } = toolsSlice.actions;
export default toolsSlice.reducer;