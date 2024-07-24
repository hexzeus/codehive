import React, { useEffect } from 'react';
import {
    LoginContainer,
    LoginHeader,
    IdentityButton,
} from './LoginPageStyles';

const LoginPage = () => {
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
            netlifyIdentity.open(); // Open the modal
        }
    };

    return (
        <LoginContainer>
            <LoginHeader>
                <h1>Welcome to Our App</h1>
                <p>Please log in to continue</p>
            </LoginHeader>
            <IdentityButton onClick={openLogin}>
                Login with Netlify Identity
            </IdentityButton>
            <div id="netlify-modal"></div>
        </LoginContainer>
    );
};

export default LoginPage;
