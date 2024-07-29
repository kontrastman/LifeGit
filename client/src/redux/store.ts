import {configureStore} from '@reduxjs/toolkit';
import selectedNoteReducer from './selectedNoteSlice';
import loginModalReducer from './loginModalSlice';
import signInModalReducer from './signInModalSlice';

const store = configureStore({
    reducer: {
        selectedNote: selectedNoteReducer,
        loginModal: loginModalReducer,
        signInModal: signInModalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;