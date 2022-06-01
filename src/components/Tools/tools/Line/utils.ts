import { saveCanvas, setDraw, setStartPosition, State } from '@/store/reducers/tools';

export const line = {
    handleDown: function({nativeEvent}: any, ctx: any, dispatch: any, state: State) {
        ctx.beginPath();    
        ctx.strokeStyle = state.currentColor;
        const  savedCanvas = ctx.canvas.toDataURL();
        dispatch(saveCanvas(savedCanvas));
        dispatch(setStartPosition({ x: nativeEvent.offsetX, y: nativeEvent.offsetY }));
        dispatch(setDraw(true));
    },
    handleDraw: function ({nativeEvent}: any,  ctx: any, state: any) {
        const x = state.startPosition.x;
        const y = state.startPosition.y;

        if (state.isDraw) {
            const img = new Image();
            img.src = state.savedCanvas;

            img.onload = () => {                  
                ctx.clearRect(0, 0, ctx.canvas.offsetWidth, ctx.canvas.offsetHeight);
                ctx.drawImage(img, 0, 0, ctx.canvas.offsetWidth, ctx.canvas.offsetHeight);
                ctx.beginPath();
                ctx.moveTo(x, y); 
                ctx.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
                ctx.stroke();
            }
        }
    },
    handleUp: function (ctx: any, dispatch: any) {
        dispatch(setDraw(false));
    }
};
