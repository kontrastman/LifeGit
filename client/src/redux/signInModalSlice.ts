import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface SignInModalState {
    isOpen: boolean,      
}

const initialState: SignInModalState = {
    isOpen: false,
}

const signInModalSlice = createSlice ({
    name: 'signInModal',
    initialState,
    reducers: {
        openSignInModal: (state) => {
            state.isOpen = true;
        },
        closeSignInModal: (state) => {
            state.isOpen = false;
        },
    },
});

export const {openSignInModal, closeSignInModal} = signInModalSlice.actions;

export const selectIsSignInModalOpen = (state: RootState) => state.signInModal.isOpen;

export default signInModalSlice.reducer;
