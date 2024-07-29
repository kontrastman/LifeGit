import AuthModal from "./AuthModal";
import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../redux/loginModalSlice";
import { openSignInModal } from "../../redux/signInModalSlice";
import GoogleLoginButton from "./GoogleLoginButton";

const LoginModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleLoginModalClose = () => {
    dispatch(closeLoginModal());
  };

  const handleSignInButtonClick = () => {
    dispatch(openSignInModal());
    handleLoginModalClose();
  }

  const handleLogIn = () => {
    console.log("Logging in");
  };

  return (
    <AuthModal title="Login" onClickCloseIcon={handleLoginModalClose} mode={'login'}>
      <div className="flex flex-col gap-3 my-5 w-max justify-center items-center">
        <button className="btn btn-accent text-white lifegit-button w-full" onClick={handleLogIn}>
          Log in
        </button>
        <GoogleLoginButton></GoogleLoginButton>
      </div>

      <p className="text-ghost mt-4 text-sm">
        Don't have an account?&#160;
        <a className="link link-secondary" onClick={handleSignInButtonClick}>Sign in</a>
      </p>
    </AuthModal>
  );
};

export default LoginModal;
