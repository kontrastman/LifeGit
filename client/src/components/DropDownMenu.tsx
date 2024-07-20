import React from "react";

interface DropDownMenu {
  // other props if needed
}

const DropDownMenu: React.FC<React.PropsWithChildren<DropDownMenu>> = ({children}) => {
  return (
    <div
      tabIndex={0}
      className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
    >
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default DropDownMenu;
