import { setDraw, State } from '@/store/reducers/tools';

export const eracer = {
    handleDown: function({nativeEvent}: any, ctx: any, dispatch: any) {
        ctx.lineWidth = 25;
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        dispatch(setDraw(true));
    },
    handleDraw: function ({nativeEvent}: any,  ctx: any, state: State) {
        if (state.isDraw) {
            ctx.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
            ctx.stroke();
        }
    },
    handleUp: function (ctx: any, dispatch: any, state: State) {
        dispatch(setDraw(false));
        ctx.lineWidth = 1;
        ctx.strokeStyle = state.currentColor;
    }
};
