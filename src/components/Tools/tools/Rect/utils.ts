import { setDraw, setStartPosition, saveCanvas, State } from '@/store/reducers/tools';

export const rect = {
    handleDown: function({nativeEvent}: any, ctx: any, dispatch: any, state: State) {
        ctx.beginPath();
        ctx.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        ctx.strokeStyle = state.currentColor;
        // const  savedCanvas = ctx.toDataURL();
        dispatch(setStartPosition({ x: nativeEvent.offsetX, y: nativeEvent.offsetY }));
        dispatch(setDraw(true));
        // dispatch(saveCanvas(savedCanvas));
    },
    handleDraw: function ({nativeEvent}: any,  ctx: any, state: State) {
        if (state.isDraw) {
            ctx.strokeRect(state.startPosition.x, state.startPosition.y, nativeEvent.offsetX, nativeEvent.offsetY);
            ctx.stroke();
        }
    },
    handleUp: function (ctx: any, dispatch: any) {
        dispatch(setDraw(false));
    }
};
