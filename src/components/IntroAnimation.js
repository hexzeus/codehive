import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #121212;
  color: #e0e0e0;
  text-align: center;
  position: relative;
`;

const CodeAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #121212;
  overflow: hidden;
  z-index: 1;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    opacity: 0.1;
  }

  span {
    color: #61dafb;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5rem;
    animation: ${keyframes`
      0% { transform: translateY(0); }
      100% { transform: translateY(-100vh); }
    `} 10s linear infinite;
  }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; transform: scale(1); }
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 2rem;
  animation: ${fadeIn} 2s forwards;
  z-index: 2;
  filter: drop-shadow(0 0 10px #61dafb);
`;

const PasswordInput = styled.input`
  margin-top: 2rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  background-color: #1f1f1f;
  color: #e0e0e0;
  z-index: 2;
`;

const generateBinary = () => {
    let binaryStr = '';
    for (let i = 0; i < 1000; i++) {
        binaryStr += Math.random() > 0.5 ? '1' : '0';
    }
    return binaryStr;
};

const IntroAnimation = ({ onComplete }) => {
    const [showCode, setShowCode] = useState(true);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setShowCode(false), 3000); // 3 seconds for animation
        return () => clearTimeout(timer);
    }, []);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordSubmit = (e) => {
        if (e.key === 'Enter' && password === '5555') {
            onComplete();
            navigate('/');
        }
    };

    return (
        <Container>
            <CodeAnimation>
                <div>
                    {[...Array(100)].map((_, index) => (
                        <span key={index}>{generateBinary()}</span>
                    ))}
                </div>
            </CodeAnimation>
            {!showCode && (
                <>
                    <Logo src={logo} alt="Logo" />
                    <PasswordInput
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handlePasswordChange}
                        onKeyDown={handlePasswordSubmit}
                    />
                </>
            )}
        </Container>
    );
};

export default IntroAnimation;
