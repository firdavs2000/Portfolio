import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DarkModeContext } from './context/DarkModeContext';

import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contacts from './pages/Contacts';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default App;
