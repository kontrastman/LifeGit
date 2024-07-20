import React from "react";
import DropDownMenu from "../DropDownMenu";
import PersonIcon from '@mui/icons-material/Person';

const NavAccountIcon: React.FC = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost text-base-200 hover:bg-transparent p-0">
        <PersonIcon/>
      </div>
      <DropDownMenu>
        {/* content */}
      </DropDownMenu>
    </div>
  );
};

export default NavAccountIcon;
