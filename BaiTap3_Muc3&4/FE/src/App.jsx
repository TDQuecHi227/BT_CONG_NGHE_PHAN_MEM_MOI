import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#98E4FF',
                fontSize: '1.2rem',
                gap: 12,
              }}
            >
              <span style={{ fontSize: '4rem' }}>📄</span>
              <strong>404 — Trang không tồn tại</strong>
              <a href="/login" style={{ color: '#98E4FF' }}>
                Quay về đăng nhập
              </a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
