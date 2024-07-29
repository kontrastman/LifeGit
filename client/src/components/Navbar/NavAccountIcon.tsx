import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from "react-redux";
import { openLoginModal } from "../../redux/loginModalSlice";


const NavAccountIcon: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenLoginModal = () => {
    dispatch(openLoginModal());
  }

  return (
      <div tabIndex={0} role="button" className="btn btn-ghost text-base-200 hover:bg-transparent p-0">
        <PersonIcon onClick={handleOpenLoginModal}/>
      </div>
  );
};

export default NavAccountIcon;
