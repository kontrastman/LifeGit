import React from "react";
import Logo from "./Logo";
import NavbarRightSection from "./NavbarRightSection";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-primary px-5">
      <Logo/>
      <NavbarRightSection/>
      </div>
  );
};

export default Navbar;
