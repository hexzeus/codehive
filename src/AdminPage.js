import React from 'react';
import {
    ProtectedContainer,
    ProtectedHeader,
    ProtectedContent,
    LogoutButton
} from './ProtectedPageStyles';

const AdminPage = () => {
    const user = window.netlifyIdentity.currentUser();

    if (!user || !user.app_metadata.roles.includes('admin')) {
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
                <h1>Admin Page</h1>
                <p>Welcome, {user.user_metadata.full_name}!</p>
            </ProtectedHeader>
            <ProtectedContent>
                <p>This is the admin section.</p>
                <p>You have access to manage the application.</p>
            </ProtectedContent>
            <LogoutButton onClick={logout}>
                Logout
            </LogoutButton>
        </ProtectedContainer>
    );
};

export default AdminPage;
