import React from "react";

interface DropDownMenu {
  // other props if needed
}

const DropDownMenu: React.FC<React.PropsWithChildren<DropDownMenu>> = ({
  children,
}) => {
  return (
    <ul
      tabIndex={0}
      className="menu dropdown-content bg-base-100 rounded-box z-50 p-2 shadow-lg"
    >
      {children}
    </ul>
  );
};

export default DropDownMenu;
