import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProtectedPage from './ProtectedPage';
import AdminPage from './AdminPage';
import GlobalStyles from './GlobalStyles';
import GoTrue from 'gotrue-js';

const auth = new GoTrue({
  APIUrl: 'https://adamives.com/.netlify/identity',
  audience: '',
  setCookie: true,
});

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const netlifyIdentity = window.netlifyIdentity;

    if (netlifyIdentity) {
      netlifyIdentity.on('init', user => {
        console.log('Init user:', user);
        setUser(user);
      });
      netlifyIdentity.on('login', user => {
        console.log('Login user:', user);
        setUser(user);

        // Redirect based on role
        const roles = user.app_metadata.roles;
        if (roles.includes('admin')) {
          window.location.href = '/admin';
        } else {
          window.location.href = '/protected';
        }
      });
      netlifyIdentity.on('logout', () => {
        console.log('Logout');
        setUser(null);
        window.location.href = '/'; // Redirect to login page on logout
      });
      netlifyIdentity.on('error', err => console.error('Netlify Identity Error', err));

      netlifyIdentity.init({
        container: '#netlify-modal',
        locale: 'en',
      });

      // Check the current user
      const currentUser = netlifyIdentity.currentUser();
      if (currentUser) {
        console.log('Current user:', currentUser);
        setUser(currentUser);
      }
    }
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/protected" /> : <LoginPage />} />
          <Route path="/protected" element={user ? <ProtectedPage /> : <Navigate to="/" />} />
          <Route path="/admin" element={user && user.app_metadata.roles.includes('admin') ? <AdminPage /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
