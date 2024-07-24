import React from "react";
import SaveIcon from '@mui/icons-material/Save';

const SaveButton: React.FC = () => {
  return (
    <button className="btn btn-accent w-[100px] btn-save h-[30px]">
      <SaveIcon fontSize="small"/>
      <span className="">Save</span>
    </button>
  );
};

export default SaveButton;
