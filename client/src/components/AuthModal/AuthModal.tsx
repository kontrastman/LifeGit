import { useDispatch } from "react-redux";
import { closeLoginModal } from "../../redux/loginModalSlice";
import GoogleLoginButton from "./GoogleLoginButton";
import CredentialsTextFields from "./CredentialsTextFields";

const AuthModal: React.FC = () => {
  const dispatch = useDispatch();

  const handleLoginModalClose = () => {
    dispatch(closeLoginModal());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={handleLoginModalClose}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Login</h3>
        <div className="flex flex-col justify-center items-center">
          <CredentialsTextFields />

          <div className="flex flex-col gap-3 my-5 w-max justify-center items-center">
            <button className="btn btn-accent text-white lifegit-button w-full">
              Log in
            </button>
            <GoogleLoginButton></GoogleLoginButton>
          </div>

          <p className="text-ghost mt-4 text-sm">
            Don't have an account?&#160;
            <a className="link link-secondary">Sign in</a></p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
