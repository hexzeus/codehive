import React from 'react';
import {
  Container,
  Section,
  Title,
  Subtitle,
  Team,
  Member,
  History,
  HistoryItem,
  ValueProposition,
  Testimonial,
  Awards,
  AwardItem,
  CTASection,
  CTAButton
} from '../styles/AboutPageStyles';

const AboutPage = () => (
  <Container>
    <Section>
      <Title>Redefining Digital Experiences</Title>
      <Subtitle>At IVES HUB, we're not just building websites and apps. We're crafting digital solutions that transform businesses and delight users.</Subtitle>
    </Section>

    <ValueProposition>
      <h2>Our Approach</h2>
      <div>
        <h3>Innovate</h3>
        <p>We push the boundaries of what's possible in web and mobile development.</p>
      </div>
      <div>
        <h3>Value</h3>
        <p>We create solutions that deliver tangible business results and user satisfaction.</p>
      </div>
      <div>
        <h3>Evolve</h3>
        <p>We continuously adapt to the ever-changing digital landscape.</p>
      </div>
      <div>
        <h3>Succeed</h3>
        <p>We measure our success by the success of our clients and their users.</p>
      </div>
    </ValueProposition>

    <Team>
      <h2>The Minds Behind IVES HUB</h2>
      <Member>
        <img src="/path/to/john-doe.jpg" alt="John Doe" />
        <h3>John Doe</h3>
        <p>Visionary & Founder</p>
        <p>With 15+ years in tech, John leads our team with passion and innovation.</p>
      </Member>
      <Member>
        <img src="/path/to/jane-smith.jpg" alt="Jane Smith" />
        <h3>Jane Smith</h3>
        <p>Tech Maestro</p>
        <p>Jane's expertise in cutting-edge technologies drives our development process.</p>
      </Member>
      <Member>
        <img src="/path/to/emily-johnson.jpg" alt="Emily Johnson" />
        <h3>Emily Johnson</h3>
        <p>Design Alchemist</p>
        <p>Emily transforms complex ideas into beautiful, intuitive user experiences.</p>
      </Member>
    </Team>

    <History>
      <h2>Our Journey</h2>
      <HistoryItem>
        <h3>2021: The Genesis</h3>
        <p>IVES Design was born from a vision to revolutionize digital experiences.</p>
      </HistoryItem>
      <HistoryItem>
        <h3>2022: Expanding Horizons</h3>
        <p>We ventured into mobile development, broadening our impact across platforms.</p>
      </HistoryItem>
      <HistoryItem>
        <h3>2023: Scaling New Heights</h3>
        <p>Our team grew, our projects flourished, and our reputation soared.</p>
      </HistoryItem>
    </History>

    <Testimonial>
      <blockquote>"IVES HUB didn't just meet our expectations—they shattered them. Their work has been transformative for our business."</blockquote>
      — Alex Thompson, CEO of InnoTech Solutions
    </Testimonial>

    <Awards>
      <h2>Recognition</h2>
      <AwardItem>
        <img src="/path/to/award1.svg" alt="Best in Innovation 2023" />
        <p>Best in Innovation 2023</p>
      </AwardItem>
      <AwardItem>
        <img src="/path/to/award2.svg" alt="Top Web Design Firm 2022" />
        <p>Top Web Design Firm 2022</p>
      </AwardItem>
    </Awards>

    <CTASection>
      <h2>Ready to Elevate Your Digital Presence?</h2>
      <CTAButton to="/contact">Let's Create Something Amazing</CTAButton>
    </CTASection>
  </Container>
);

export default AboutPage;