import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from '@mui/icons-material/Delete';
import DropDownMenu from "../DropDownMenu";

const handleIconClick = (event: React.MouseEvent) => {
  event.stopPropagation();
};

const NoteListItemSettings: React.FC = () => {
  return (
    <div className="dropdown dropdown-end relative z-50">
      <div
        tabIndex={0}
        role="button"
        className=" btn btn-ghost text-base-200 hover:bg-transparent p-0"
        onClick={handleIconClick}
      >
        <MoreHorizIcon />
      </div>
      <DropDownMenu>
        <DeleteIcon/>
        </DropDownMenu>
    </div>
  );
};

export default NoteListItemSettings;
