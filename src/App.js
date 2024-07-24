import React, { useEffect } from 'react';
import logo from './logo.svg';
import {
  AppContainer,
  AppHeader,
  AppLogo,
  AppLink,
  IdentityButton,
  LogoutButton
} from './StyledComponents';

function App() {
  useEffect(() => {
    const initNetlifyIdentity = () => {
      const netlifyIdentity = window.netlifyIdentity;
      if (netlifyIdentity) {
        try {
          netlifyIdentity.init({
            container: '#netlify-modal', // Ensure this ID exists in your HTML
            locale: 'en' // defaults to 'en'
          });

          netlifyIdentity.on('init', user => console.log('init', user));
          netlifyIdentity.on('login', user => console.log('login', user));
          netlifyIdentity.on('logout', () => console.log('Logged out'));
          netlifyIdentity.on('error', err => console.error('Error', err));
          netlifyIdentity.on('open', () => console.log('Widget opened'));
          netlifyIdentity.on('close', () => console.log('Widget closed'));
        } catch (error) {
          console.error('Failed to initialize Netlify Identity:', error);
        }
      } else {
        console.error('Netlify Identity Widget not loaded');
      }
    };

    if (document.readyState === 'complete') {
      initNetlifyIdentity();
    } else {
      window.addEventListener('load', initNetlifyIdentity);
    }

    return () => {
      window.removeEventListener('load', initNetlifyIdentity);
    };
  }, []);

  const openWidget = () => {
    const netlifyIdentity = window.netlifyIdentity;
    if (netlifyIdentity) {
      netlifyIdentity.open();
    }
  };

  const logout = () => {
    const netlifyIdentity = window.netlifyIdentity;
    if (netlifyIdentity) {
      netlifyIdentity.logout();
    }
  };

  return (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
        <IdentityButton onClick={openWidget}>
          Login with Netlify Identity
        </IdentityButton>
        <LogoutButton onClick={logout}>
          Logout
        </LogoutButton>
        <div id="netlify-modal"></div>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
