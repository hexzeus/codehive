import React from 'react';
import {
    ProtectedContainer,
    ProtectedHeader,
    LogoutButton
} from './ProtectedPageStyles';

const ProtectedPage = () => {
    const logout = () => {
        const netlifyIdentity = window.netlifyIdentity;
        if (netlifyIdentity) {
            netlifyIdentity.logout();
            window.location.href = '/';
        }
    };

    return (
        <ProtectedContainer>
            <ProtectedHeader>
                <h1>Protected Page</h1>
                <p>You have successfully logged in!</p>
            </ProtectedHeader>
            <LogoutButton onClick={logout}>
                Logout
            </LogoutButton>
        </ProtectedContainer>
    );
};

export default ProtectedPage;
