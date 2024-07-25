import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { checkIfIsToday } from "../utils/dateHelper";

interface SelectedNoteState {
  selectedNote: string | null;
}

const initialState: SelectedNoteState = {
  selectedNote: null,
};

const selectedNoteSlice = createSlice({
  name: "selectedNote",
  initialState,
  reducers: {
    setSelectedNote(state, action: PayloadAction<string | null>) {
      state.selectedNote = action.payload;
    },
  },
});

export const { setSelectedNote } = selectedNoteSlice.actions;

export const selectSelectedNote = (state: RootState) => state.selectedNote.selectedNote;
export const selectIsToday = (state: RootState) => {
  const selectedNote = state.selectedNote.selectedNote;
  return selectedNote ? checkIfIsToday(selectedNote) : false;
};

export default selectedNoteSlice.reducer;