import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton: React.FC = () => {
  const handleGoogleLoginSuccess = (response: any) => {
    // response
  };

  return (
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
      />
  );
};

export default GoogleLoginButton;
