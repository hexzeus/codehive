import React, { useEffect, useState } from 'react';
import {
    LoginContainer,
    LoginHeader,
    IdentityButton,
} from './LoginPageStyles';

const LoginPage = ({ onSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role is 'user'

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
                <p>Please log in or sign up to continue</p>
            </LoginHeader>
            <IdentityButton onClick={openLogin}>
                Login / Sign Up with Netlify Identity
            </IdentityButton>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="editor">Editor</option>
                </select>
            </div>
            <div id="netlify-modal"></div>
        </LoginContainer>
    );
};

export default LoginPage;
