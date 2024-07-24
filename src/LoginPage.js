import React, { useEffect } from 'react';
import {
    LoginContainer,
    LoginHeader,
    LoginLogo,
    IdentityButton,
} from './LoginPageStyles';
import logo from './logo.svg';

const LoginPage = ({ onSignup }) => {
    useEffect(() => {
        const netlifyIdentity = window.netlifyIdentity;
        if (netlifyIdentity) {
            netlifyIdentity.on('login', () => {
                window.location.href = '/protected';
            });
            netlifyIdentity.on('error', err => console.error('Netlify Identity Error', err));
            netlifyIdentity.init();
        }
    }, []);

    const openLogin = () => {
        const netlifyIdentity = window.netlifyIdentity;
        if (netlifyIdentity) {
            netlifyIdentity.open('login'); // Open the modal to the login tab
        }
    };

    const openSignUp = () => {
        const netlifyIdentity = window.netlifyIdentity;
        if (netlifyIdentity) {
            netlifyIdentity.open('signup'); // Open the modal to the signup tab
        }
    };

    return (
        <LoginContainer>
            <LoginHeader>
                <LoginLogo src={logo} alt="logo" />
                <h1>Welcome to Our App</h1>
                <p>Please log in or sign up to continue</p>
            </LoginHeader>
            <IdentityButton onClick={openLogin}>
                Login with Netlify Identity
            </IdentityButton>
            <IdentityButton onClick={openSignUp}>
                Sign Up with Netlify Identity
            </IdentityButton>
            <div id="netlify-modal"></div>
        </LoginContainer>
    );
};

export default LoginPage;
