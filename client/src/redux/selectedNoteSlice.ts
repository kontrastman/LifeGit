import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setSelectedNote(state, action: PayloadAction<string>) {
      state.selectedNote = action.payload;
    },
    clearSelectedNote(state) {
      state.selectedNote = null;
    },
  },
});

export const {setSelectedNote, clearSelectedNote} = selectedNoteSlice.actions;
export default selectedNoteSlice.reducer;