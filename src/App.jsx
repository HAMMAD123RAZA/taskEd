import React from 'react';
import Index from './home/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './courses/Create';
import Content from './components/Content';
import SideBar from './components/SideBar';
import EditCourse from './components/EditCourse';

const App = () => {
  return (
    <div className="flex h-screen">
      <BrowserRouter>
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Content />} />
            <Route path="/edit/:id" element={<EditCourse />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;