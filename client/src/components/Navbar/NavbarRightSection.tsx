import React from "react";
import NavThemeIcon from "./NavThemeIcon";
import NavAccountIcon from "./NavAccountIcon";
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
import { selectIsLoginModalOpen } from "../../redux/loginModalSlice";
import { selectIsSignInModalOpen } from "../../redux/signInModalSlice";
import LoginModal from "../AuthModal/LoginModal";
import SignInModal from "../AuthModal/SignInModal";

const NavbarRightSection: React.FC = () => {
    const isLoginOpen = useSelector((state: RootState) => selectIsLoginModalOpen(state));
    const isSigninOpen = useSelector((state: RootState) => selectIsSignInModalOpen(state));

return (
    <div className="flex-none">
        <NavThemeIcon/>
        <NavAccountIcon/>
        {isLoginOpen && <LoginModal/>}
        {isSigninOpen && <SignInModal/>}
    </div>
)
}

export default NavbarRightSection;