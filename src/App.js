import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Users from './pages/Users/Users';
import './index.css'; 

const App = () => (
  <Router>
      <div className="flex flex-col lg:flex-row bg-gray-900 min-h-screen">
          <Sidebar />
          <div className="flex-1 p-6">
              <Header />
              <div className="bg-gray-800 rounded-lg shadow-lg mt-4">
                  <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/users" element={<Users />} />
                      {/* Tambahkan rute lainnya di sini */}
                  </Routes>
              </div>
          </div>
      </div>
  </Router>
);

export default App;