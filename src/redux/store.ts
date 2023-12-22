import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './Counter';   
import userSlice from './UserSlice';

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        user: userSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
