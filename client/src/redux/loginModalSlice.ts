import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface LoginModalState {
    isOpen: boolean,      
}

const initialState: LoginModalState = {
    isOpen: false,
}

const loginModalSlice = createSlice ({
    name: 'loginModal',
    initialState,
    reducers: {
        openLoginModal: (state) => {
            state.isOpen = true;
        },
        closeLoginModal: (state) => {
            state.isOpen = false;
        },
    },
});

export const {openLoginModal, closeLoginModal} = loginModalSlice.actions;

export const selectIsLoginModalOpen = (state: RootState) => state.loginModal.isOpen;

export default loginModalSlice.reducer;

