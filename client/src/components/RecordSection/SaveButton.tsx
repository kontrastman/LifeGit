import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectIsToday } from "../../redux/selectedNoteSlice";
import { useEditorContext } from "../../utils/EditorContext";
import { formatTime } from "../../utils/dateHelper";
import SaveIcon from '@mui/icons-material/Save';

import { records } from "../../records";
import { addRecord } from "../../updateRecords";


const SaveButton: React.FC = () => {
  const { getEditorMarkdown, updateMarkdownContent } = useEditorContext();

  const selectedNote = useSelector(
    (state: RootState) => state.selectedNote.selectedNote
  );

  const handleSave = () => {
    const markdown = getEditorMarkdown();
    const newRecord = { 
      time: formatTime(new Date()),
      text: markdown,
    }
    addRecord(selectedNote!, newRecord);
    updateMarkdownContent("Start writing here...");

  }

  const isToday = useSelector(selectIsToday);
  return (
    <button onClick = {handleSave} className={`btn btn-accent ${isToday ? "" : "invisible"} w-[100px] btn-save h-[30px]`}>
      <SaveIcon fontSize="small"/>
      <span>Save</span>
    </button>
  );
};

export default SaveButton;
