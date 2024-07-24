import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NoteHeaderEmptyNote from "./NoteHeaderEmptyNote";
import NoteHeaderInfo from "./NoteHeaderInfo";

const NoteHeader: React.FC = () => {
  const selectedNote = useSelector(
    (state: RootState) => state.selectedNote.selectedNote
  );

  return selectedNote === null ? (
    <NoteHeaderEmptyNote />
  ) : (
    <NoteHeaderInfo />
  );
};

export default NoteHeader;
