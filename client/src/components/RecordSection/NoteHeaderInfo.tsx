import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { formatDate } from "../../utils/dateHelper";
import SaveButton from "./SaveButton";

const NoteHeaderInfo: React.FC = () => {
  const selectedNote = useSelector(
    (state: RootState) => state.selectedNote.selectedNote
  );
  const displayDate = selectedNote
    ? formatDate(selectedNote, "dd/MM/yyyy", "dd MMM yyyy")
    : "";

  return (
    <div className="flex items-center bg-base-100 sticky top-0 border-b-[1px] pt-[30px] pb-[15px]">
      <h1 className="flex-1 font-bold text-xl ">{displayDate}</h1>
      <SaveButton />
    </div>
  );
};

export default NoteHeaderInfo;
