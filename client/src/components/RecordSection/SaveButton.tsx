import React from "react";
import { useSelector } from "react-redux";
import { selectIsToday } from "../../redux/selectedNoteSlice";
import SaveIcon from '@mui/icons-material/Save';

const SaveButton: React.FC = () => {
  const isToday = useSelector(selectIsToday);

  return (
    <button className={`btn btn-accent ${isToday ? "" : "invisible"} w-[100px] btn-save h-[30px]`}>
      <SaveIcon fontSize="small"/>
      <span>Save</span>
    </button>
  );
};

export default SaveButton;
