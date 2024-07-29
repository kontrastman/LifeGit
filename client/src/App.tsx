import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiaryPage from "./pages/DiaryPage";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="CLIENT_ID">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DiaryPage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
