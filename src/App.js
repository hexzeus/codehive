import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import ProtectedPage from './ProtectedPage';
import GlobalStyles from './GlobalStyles';
import GoTrue from 'gotrue-js';

const auth = new GoTrue({
  APIUrl: 'https://<your-site>.netlify.app/.netlify/identity',
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
        window.location.href = '/protected'; // Redirect to protected page on login
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

  const handleSignup = (email, password, role) => {
    auth.signup(email, password, { role: role })
      .then(response => {
        console.log('Confirmation email sent', response);
      })
      .catch(error => {
        console.error('Error sending confirmation email', error);
      });
  };

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/protected" /> : <LoginPage onSignup={handleSignup} />} />
          <Route path="/protected" element={user ? <ProtectedPage /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
