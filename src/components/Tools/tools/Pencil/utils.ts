import { setDraw, State } from '@/store/reducers/tools';

export const pencil = {
    handleDown: function({nativeEvent}: any, ctx: any, dispatch: any, state: State) {
        ctx.beginPath();
        ctx.strokeStyle = state.currentColor;
        ctx.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        dispatch(setDraw(true));
    },
    handleDraw: function ({nativeEvent}: any,  ctx: any, state: any) {
        if (state.isDraw) {
            ctx.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
            ctx.stroke();
        }
    },
    handleUp: function (ctx: any, dispatch: any) {
        dispatch(setDraw(false));
    }
};
