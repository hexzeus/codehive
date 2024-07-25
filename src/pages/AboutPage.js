import React from 'react';
import { Container, Section, Title, Subtitle, Team, Member, History, HistoryItem } from '../styles/AboutPageStyles';

const AboutPage = () => (
  <Container>
    <Section>
      <Title>About Us</Title>
      <Subtitle>Learn more about CodeHive and our mission.</Subtitle>
    </Section>
    <Section>
      <h2>Our Mission</h2>
      <p>At CodeHive, our mission is to deliver top-notch web and mobile solutions that empower businesses to achieve their goals. We strive to innovate and create products that not only meet but exceed our clients' expectations.</p>
    </Section>
    <Team>
      <h2>Meet the Team</h2>
      <Member>
        <h3>John Doe</h3>
        <p>CEO & Founder</p>
      </Member>
      <Member>
        <h3>Jane Smith</h3>
        <p>Lead Developer</p>
      </Member>
      <Member>
        <h3>Emily Johnson</h3>
        <p>UI/UX Designer</p>
      </Member>
    </Team>
    <History>
      <h2>Our History</h2>
      <HistoryItem>
        <h3>2021</h3>
        <p>CodeHive was founded with the vision of creating cutting-edge web solutions.</p>
      </HistoryItem>
      <HistoryItem>
        <h3>2022</h3>
        <p>Expanded our services to include mobile app development and design.</p>
      </HistoryItem>
      <HistoryItem>
        <h3>2023</h3>
        <p>Launched several successful projects and grew our team.</p>
      </HistoryItem>
    </History>
  </Container>
);

export default AboutPage;
