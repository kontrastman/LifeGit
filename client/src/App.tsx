import React from 'react';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiaryPage from './pages/DiaryPage';

const App: React.FC = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<DiaryPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
