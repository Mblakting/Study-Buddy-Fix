import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';

function App() {
  // Gunakan fungsi pengambil token agar selalu sinkron dengan localStorage
  const [token, setToken] = useState(localStorage.getItem('user_token'));

  return (
    <Router>
      <Routes>
        {/* Kirim fungsi setToken langsung ke halaman Login */}
        <Route 
          path="/login" 
          element={!token ? <Login onLoginSuccess={setToken} /> : <Navigate to="/" />} 
        />
        <Route path="/signup" element={!token ? <Register /> : <Navigate to="/" />} />
        
        <Route path="/" element={token ? <MainLayout /> : <Navigate to="/login" />}>
          <Route index element={<Dashboard />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;