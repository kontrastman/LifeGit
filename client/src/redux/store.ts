import {configureStore} from '@reduxjs/toolkit';
import selectedNoteSlice from './selectedNoteSlice';
import selectedNoteReducer from './selectedNoteSlice';

const store = configureStore({
    reducer: {
        selectedNote: selectedNoteReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;