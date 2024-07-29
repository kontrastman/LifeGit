import CredentialsTextFields from "./CredentialsTextFields";

interface AuthModalProps {
  children: React.ReactNode;
  onClickCloseIcon: () => void;
  title: string;
  mode: 'signin' | 'login';
}

const AuthModal: React.FC<AuthModalProps> = ({children, onClickCloseIcon, title, mode}) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClickCloseIcon}
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="flex flex-col justify-center items-center">
          <CredentialsTextFields mode={mode}/>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
