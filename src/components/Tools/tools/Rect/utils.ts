import { setDraw, setStartPosition, saveCanvas, State } from '@/store/reducers/tools';
import { Dispatch } from '@reduxjs/toolkit';

export const rect = {
    handleDown: function({nativeEvent}: any, ctx: any, dispatch: any, state: State) {
        ctx.beginPath();
        ctx.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);     
        ctx.strokeStyle = state.currentColor;
        const  savedCanvas = ctx.canvas.toDataURL();
        dispatch(saveCanvas(savedCanvas));
        dispatch(setStartPosition({ x: nativeEvent.offsetX, y: nativeEvent.offsetY }));
        dispatch(setDraw(true));
    },
    handleDraw: function ({nativeEvent}: any,  ctx: any, state: State, dispatch: Dispatch ) {
        const width = nativeEvent.offsetX - state.startPosition.x;
        const height = nativeEvent.offsetY - state.startPosition.y;
        const x = state.startPosition.x;
        const y = state.startPosition.y;

        if (state.isDraw) {
            const img = new Image();
            img.src = state.savedCanvas;

            img.onload = () => {                  
                ctx.clearRect(0, 0, ctx.canvas.offsetWidth, ctx.canvas.offsetHeight);
                ctx.drawImage(img, 0, 0, ctx.canvas.offsetWidth, ctx.canvas.offsetHeight);
                ctx.beginPath();
                ctx.strokeRect(x, y, width, height);
            }
        }
    },
    handleUp: function (ctx: any, dispatch: any, state: State) {
        dispatch(setDraw(false));
    }
};
