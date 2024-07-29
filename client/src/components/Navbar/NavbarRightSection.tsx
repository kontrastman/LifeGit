import React from "react";
import NavSettingsIcon from "./NavSettingsIcon";
import NavAccountIcon from "./NavAccountIcon";
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import { selectIsLoginModalOpen } from "../../redux/loginModalSlice";
import AuthModal from "../AuthModal/AuthModal";

const NavbarRightSection: React.FC = () => {
    const isOpen = useSelector((state: RootState) => selectIsLoginModalOpen(state));

return (
    <div className="flex-none">
        <NavSettingsIcon/>
        <NavAccountIcon/>
        {isOpen && <AuthModal/>}
    </div>
)
}

export default NavbarRightSection;