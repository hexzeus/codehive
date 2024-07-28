import React from 'react';
import {
  Container,
  Section,
  Title,
  Subtitle,
  JourneyTimeline,
  TimelineItem,
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
      <Title>Pioneering the Future of Digital Innovation</Title>
      <Subtitle>At IVES HUB, we're on a mission to redefine the digital landscape through cutting-edge technology and visionary design.</Subtitle>
    </Section>

    <ValueProposition>
      <h2>Our Core Values</h2>
      <div>
        <h3>Innovation</h3>
        <p>Pushing boundaries and exploring new frontiers in technology.</p>
      </div>
      <div>
        <h3>Vision</h3>
        <p>Anticipating future trends and staying ahead of the curve.</p>
      </div>
      <div>
        <h3>Excellence</h3>
        <p>Delivering unparalleled quality in every project we undertake.</p>
      </div>
      <div>
        <h3>Synergy</h3>
        <p>Fostering collaboration between AI and human creativity.</p>
      </div>
    </ValueProposition>

    <JourneyTimeline>
      <h2>Our Extraordinary Journey</h2>
      <TimelineItem>
        <h3>The Spark of Innovation</h3>
        <p>From humble beginnings with Python snippets to an obsession with AI-powered programming.</p>
      </TimelineItem>
      <TimelineItem>
        <h3>Web Development Genesis</h3>
        <p>Mastering HTML and creating captivating websites with AI assistance.</p>
      </TimelineItem>
      <TimelineItem>
        <h3>The Anvil Revolution</h3>
        <p>Discovering Anvil and sharing our creations with the world.</p>
      </TimelineItem>
      <TimelineItem>
        <h3>Ascending to React</h3>
        <p>Embracing Node.js and React, elevating our development capabilities.</p>
      </TimelineItem>
      <TimelineItem>
        <h3>Commerce Integration Milestone</h3>
        <p>Successfully integrating Commerce.js, opening new possibilities for our platform.</p>
      </TimelineItem>
      <TimelineItem>
        <h3>The Future Unleashed</h3>
        <p>Continuously evolving, innovating, and pushing the boundaries of what's possible in the digital realm.</p>
      </TimelineItem>
    </JourneyTimeline>

    <Testimonial>
      <blockquote>"IVES HUB isn't just a development company; they're visionaries crafting the future of digital experiences. Their innovative approach and technical prowess are truly game-changing."</blockquote>
      — Dr. Evelyn Chen, CTO of FutureTech Industries
    </Testimonial>

    <Awards>
      <h2>Accolades & Recognition</h2>
      <AwardItem>
        <img src="/path/to/award1.svg" alt="Innovator of the Year 2023" />
        <p>Innovator of the Year 2023</p>
      </AwardItem>
      <AwardItem>
        <img src="/path/to/award2.svg" alt="Best AI Integration 2022" />
        <p>Best AI Integration 2022</p>
      </AwardItem>
      <AwardItem>
        <img src="/path/to/award3.svg" alt="Top Emerging Tech Company 2021" />
        <p>Top Emerging Tech Company 2021</p>
      </AwardItem>
    </Awards>

    <CTASection>
      <h2>Ready to Revolutionize Your Digital Presence?</h2>
      <CTAButton to="/contact">Embark on Your Digital Transformation</CTAButton>
    </CTASection>
  </Container>
);

export default AboutPage;