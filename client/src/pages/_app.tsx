import Head from "next/head";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/global.css";

const LifeGitApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="CLIENT_ID">
        <>
          <Head>
            <title>LifeGit</title>
            <meta name="description" content="LifeGit app" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default LifeGitApp;
