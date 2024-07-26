import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shineEffect = keyframes`
  0% { background-position: 200% 50%; }
  100% { background-position: -200% 50%; }
`;

const responsiveStyles = css`
  @media (max-width: 1200px) {
    font-size: 95%;
  }
  @media (max-width: 992px) {
    font-size: 90%;
  }
  @media (max-width: 768px) {
    font-size: 85%;
  }
  @media (max-width: 576px) {
    font-size: 80%;
  }
`;

export const Container = styled.div`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #151515 0%, #0b0b0b 100%);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    background: url(${logo}) no-repeat center center;
    background-size: 80%;
    opacity: 0.05;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    animation: ${fadeInUp} 2s ease-out;
  }

  ${responsiveStyles}
`;

export const Section = styled.section`
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: transparent;
  background: linear-gradient(45deg, #1e90ff, #ff6ad5);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${shineEffect} 3s linear infinite;
  text-shadow: 0 0 10px rgba(30, 144, 255, 0.5);

  ${responsiveStyles}
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  color: #b3b3b3;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease-out 0.5s both;

  ${responsiveStyles}
`;

export const ValueProposition = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;

  div {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  h3 {
    color: #1e90ff;
    margin-bottom: 1rem;
  }

  p {
    color: #b3b3b3;
  }
`;

export const Team = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;

  h2 {
    grid-column: 1 / -1;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #1e90ff;
  }
`;

export const Member = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeInUp} 1s ease-out both;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(30, 144, 255, 0.2);
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
    border: 4px solid #1e90ff;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #1e90ff;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3;
  }
`;

export const History = styled.div`
  margin: 4rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: #1e90ff;
    transform: translateX(-50%);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #1e90ff;
  }
`;

export const HistoryItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin: 2rem 0;
  position: relative;
  width: 45%;
  animation: ${fadeInUp} 1s ease-out both;

  &:nth-child(odd) {
    margin-left: auto;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -15px;
      width: 30px;
      height: 30px;
      background: #1e90ff;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }

  &:nth-child(even) {
    margin-right: auto;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: -15px;
      width: 30px;
      height: 30px;
      background: #1e90ff;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #1e90ff;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3;
  }
`;

export const Testimonial = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  margin: 4rem 0;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -30px;
    left: 20px;
    font-size: 6rem;
    color: #1e90ff;
    opacity: 0.5;
  }

  blockquote {
    font-size: 1.5rem;
    font-style: italic;
    margin-bottom: 1rem;
  }

  cite {
    font-size: 1.2rem;
    color: #1e90ff;
  }
`;

export const Awards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 4rem 0;
`;

export const AwardItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #1e90ff;
  }
`;

export const CTASection = styled.div`
  margin: 4rem 0;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #1e90ff;
  }
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(45deg, #1e90ff, #ff6ad5);
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(30, 144, 255, 0.3);
  }
`;