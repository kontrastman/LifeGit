import React from "react";
import ContrastIcon from "@mui/icons-material/Contrast";
import DropDownMenu from "../DropDownMenu";

const NavThemeIcon: React.FC = () => {
  return (
    <div className="dropdown dropdown-end ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost text-base-200 hover:bg-transparent p-0 pr-5"
      >
        <ContrastIcon />
      </div>
      <DropDownMenu>
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Light"
            value="default"
          />
        </li>
        <li>
        <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Dark"
            value="sunset"
          />
        </li>
        <li>
        <input
            type="radio"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Synthwave"
            value="synthwave"
          />
        </li>
      </DropDownMenu>
    </div>
  );
};

export default NavThemeIcon;
