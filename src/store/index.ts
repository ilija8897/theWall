import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import canvasReducer from '@/store/reducers/canvas';
import toolsReducer from '@/store/reducers/tools';
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        canvas: canvasReducer,
        tools: toolsReducer,
    },
    middleware: [
        logger
    ]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch