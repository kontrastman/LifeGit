import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import DropDownMenu from "../DropDownMenu";

const NavSettingsIcon: React.FC = () => {
    return (
        <div className="dropdown dropdown-end ">
        <div tabIndex={0} role="button" className="btn btn-ghost text-base-200 hover:bg-transparent p-0 pr-5">
          <SettingsIcon/>
        </div>
        <DropDownMenu>
            {/*  content*/}
        </DropDownMenu>
      </div>
    );
};

export default NavSettingsIcon;