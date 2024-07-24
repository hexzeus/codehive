import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProtectedPage from './ProtectedPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const netlifyIdentity = window.netlifyIdentity;
    if (netlifyIdentity) {
      netlifyIdentity.on('init', user => setUser(user));
      netlifyIdentity.on('login', user => {
        setUser(user);
        window.location.href = '/protected'; // Redirect to protected page on login
      });
      netlifyIdentity.on('logout', () => {
        setUser(null);
        window.location.href = '/'; // Redirect to login page on logout
      });
      netlifyIdentity.init();
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/protected" /> : <LoginPage />} />
        <Route path="/protected" element={user ? <ProtectedPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
