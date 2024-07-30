import React from "react";
import Navbar from "../components/Navbar/Navbar";
import DiaryPage from "../components/DiaryPage";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <DiaryPage />
    </>
  );
};

export default Home;
