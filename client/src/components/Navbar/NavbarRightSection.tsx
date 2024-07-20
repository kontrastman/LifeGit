import React from "react";
import NavSettingsIcon from "./NavSettingsIcon";
import NavAccountIcon from "./NavAcountIcon";

const NavbarRightSection: React.FC = () => {
return (
    <div className="flex-none">
        <NavSettingsIcon/>
        <NavAccountIcon/>
    </div>
)
}

export default NavbarRightSection;