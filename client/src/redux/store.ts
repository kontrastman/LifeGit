import {configureStore} from '@reduxjs/toolkit';
import selectedNoteReducer from './selectedNoteSlice';
import loginModalReducer from './loginModalSlice';

const store = configureStore({
    reducer: {
        selectedNote: selectedNoteReducer,
        loginModal: loginModalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;