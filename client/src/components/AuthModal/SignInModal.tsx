import AuthModal from "./AuthModal";
import { useDispatch } from "react-redux";
import { closeSignInModal } from "../../redux/signInModalSlice";
import { openLoginModal } from "../../redux/loginModalSlice";


const SignInModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignInModalClose = () => {
    dispatch(closeSignInModal());
  };

  const handleLogInButtonClick = () => {
    dispatch(openLoginModal());
    handleSignInModalClose();
  }

  const handleSignIn = () => {
    console.log("Signing in");
  };

  return (
    <AuthModal title="Create an account" onClickCloseIcon={handleSignInModalClose} mode={'signin'}>
      <div className="flex flex-col my-5 w-max justify-center items-center">
        <button
          className="btn btn-accent text-white lifegit-button w-full"
          onClick={handleSignIn}
        >
          Create an account
        </button>
        
      </div>
      <p className="text-ghost mt-4 text-sm">
        Already have an account?&#160;
        <a className="link link-secondary" onClick={handleLogInButtonClick}>Log in</a>
      </p>
    </AuthModal>
  );
};

export default SignInModal;
