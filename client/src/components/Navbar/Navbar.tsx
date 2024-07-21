import React from "react";
import Logo from "./Logo";
import NavbarRightSection from "./NavbarRightSection";
import SidebarButton from "./SidebarButton";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-primary px-5 h-[60px]">
      <Logo/>
      <SidebarButton/>
      <NavbarRightSection/>
      </div>
  );
};

export default Navbar;
