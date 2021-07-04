import { configureStore } from '@reduxjs/toolkit';
import id from './slices/id';
import isNameVisible from './slices/is-name-visible';
import { starWarsAPI } from './api/swapi';

export const store = configureStore({
    reducer: {
        person: id,
        showName: isNameVisible,
        [starWarsAPI.reducerPath]: starWarsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(starWarsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
