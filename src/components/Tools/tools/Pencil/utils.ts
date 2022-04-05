import { setDraw } from '@/store/reducers/tools';

export const pencil = {
    handleDown: function({nativeEvent}: any, ctx: any, dispatch: any) {
        const canvasElement = ctx.current;

        canvasElement.beginPath();
        canvasElement.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        dispatch(setDraw(true));
    },
    handleDraw: function ({nativeEvent}: any,  ctx: any, isDraw: any) {
        const canvasElement = ctx.current;

        if (isDraw) {
            canvasElement.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
            canvasElement.stroke();
        }
    },
    handleUp: function (ctx: any, dispatch: any) {
        dispatch(setDraw(false));
    }
};
