import React, { useEffect } from 'react';
import {
    LoginContainer,
    LoginHeader,
    LoginLogo,
    IdentityButton,
} from './LoginPageStyles';
import logo from './logo.svg';

const LoginPage = () => {
    useEffect(() => {
        const netlifyIdentity = window.netlifyIdentity;
        if (netlifyIdentity) {
            netlifyIdentity.on('login', () => {
                window.location.href = '/protected';
            });
            netlifyIdentity.init();
        }
    }, []);

    const openWidget = () => {
        const netlifyIdentity = window.netlifyIdentity;
        if (netlifyIdentity) {
            netlifyIdentity.open();
        }
    };

    return (
        <LoginContainer>
            <LoginHeader>
                <LoginLogo src={logo} alt="logo" />
                <p>
                    Welcome! Please log in to access the protected page.
                </p>
                <IdentityButton onClick={openWidget}>
                    Login with Netlify Identity
                </IdentityButton>
                <div id="netlify-modal"></div>
            </LoginHeader>
        </LoginContainer>
    );
};

export default LoginPage;
