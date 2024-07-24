import React from 'react';
import {
    ProtectedContainer,
    ProtectedHeader,
    LogoutButton
} from './ProtectedPageStyles';

const ProtectedPage = () => {
    const user = window.netlifyIdentity.currentUser();

    if (!user || (user.app_metadata && !user.app_metadata.roles.includes('admin'))) {
        return <p>You do not have access to this page.</p>;
    }

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
