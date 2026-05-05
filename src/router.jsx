// router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail'; // <-- Pastikan ini diimport

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} /> {/* <-- Route ini harus ada */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;