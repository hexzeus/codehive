import React from 'react';
import {
    ProtectedContainer,
    ProtectedHeader,
    ProtectedContent,
    LogoutButton
} from './ProtectedPageStyles';

const ProtectedPage = () => {
    const user = window.netlifyIdentity.currentUser();

    if (!user) {
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
                <h1>Welcome, {user.user_metadata.full_name}!</h1>
                <p>You have successfully logged in!</p>
            </ProtectedHeader>
            <ProtectedContent>
                <p>This is your protected content.</p>
                <p>Feel free to explore and enjoy the features available to you.</p>
            </ProtectedContent>
            <LogoutButton onClick={logout}>
                Logout
            </LogoutButton>
        </ProtectedContainer>
    );
};

export default ProtectedPage;
