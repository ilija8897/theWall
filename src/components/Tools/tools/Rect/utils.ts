import { setDraw, setStartPosition, saveCanvas } from '@/store/reducers/tools';

export const rect = {
    handleDown: function({nativeEvent}: any, ctx: any, dispatch: any) {
        const canvasElement = ctx.current;

        canvasElement.beginPath();
        canvasElement.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        const  savedCanvas = canvasElement.toDataURL();
        dispatch(setStartPosition({ x: nativeEvent.offsetX, y: nativeEvent.offsetY }));
        dispatch(setDraw(true));
        dispatch(saveCanvas(savedCanvas));
    },
    handleDraw: function ({nativeEvent}: any,  ctx: any, isDraw: any, startPosition: any) {
        const canvasElement = ctx.current;

        if (isDraw) {
            canvasElement.strokeRect(startPosition.x, startPosition.y, nativeEvent.offsetX, nativeEvent.offsetY);
            canvasElement.stroke();
        }
    },
    handleUp: function (ctx: any, dispatch: any) {
        dispatch(setDraw(false));
    }
};
