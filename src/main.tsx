import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/css/style.css"
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap App with BrowserRouter */}
      <AuthProvider> {/* Wrap with AuthProvider if using Context */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);