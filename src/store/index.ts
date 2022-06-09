import { configureStore } from '@reduxjs/toolkit';
import canvasReducer from '@/store/reducers/canvas';
import toolsReducer from '@/store/reducers/tools';

export const store = configureStore({
    reducer: {
        canvas: canvasReducer,
        tools: toolsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
