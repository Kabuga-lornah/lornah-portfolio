// src/pages/AboutPage.jsx
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

// Styled Components for About Page
const AboutContainer = styled.section`
  background-color: ${theme.secondaryColor}; /* White background */
  color: ${theme.textDark};
  padding: 6rem 2rem; /* More padding for content sections */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px); /* Adjust for Navbar and Footer height */
`;

const AboutTitle = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${theme.primaryColor}; /* Primary color for main title */
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.05);
`;

const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left; /* Align text left for readability */
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
`;

const SectionHeading = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${theme.textDark};
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  text-align: center; /* Center section headings */
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  margin-bottom: 1.5rem;
  color: ${theme.textLight};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const SkillItem = styled.div`
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColor};
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>

      <AboutContent>
        <Paragraph>
          Hello! I'm Lornah Kabuga, a passionate Software Developer with a knack for
          transforming complex problems into elegant, user-friendly solutions. My journey
          in technology began with a deep fascination for how digital experiences are
          crafted, leading me to immerse myself in the world of coding and development.
        </Paragraph>
        <Paragraph>
          With a solid foundation in both front-end and back-end technologies, I specialize
          in building robust and scalable web applications. I thrive in dynamic environments
          where I can continuously learn, innovate, and contribute to meaningful projects.
          My approach is always user-centric, ensuring that the applications I build are
          not only functional but also intuitive and enjoyable to use.
        </Paragraph>
        <Paragraph>
          Beyond the code, I am a firm believer in continuous learning and collaboration.
          I enjoy exploring new technologies, participating in tech communities, and
          sharing knowledge with peers. When I'm not coding, you can find me enjoying
          the outdoors or delving into a good book.
        </Paragraph>

        <SectionHeading>My Skills</SectionHeading>
        <SkillsGrid>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>Node.js</SkillItem>
          <SkillItem>Python</SkillItem>
          <SkillItem>Django</SkillItem>
          <SkillItem>HTML5</SkillItem>
          <SkillItem>CSS3</SkillItem>
          <SkillItem>Styled Components</SkillItem>
          <SkillItem>RESTful APIs</SkillItem>
          <SkillItem>Git & GitHub</SkillItem>
          <SkillItem>SQL (PostgreSQL)</SkillItem>
          <SkillItem>MongoDB</SkillItem>
          <SkillItem>Responsive Design</SkillItem>
          <SkillItem>Problem Solving</SkillItem>
          <SkillItem>Team Collaboration</SkillItem>
        </SkillsGrid>

        <SectionHeading>My Philosophy</SectionHeading>
        <Paragraph>
          I believe that great software is a blend of technical excellence and creative
          problem-solving. My goal is to build applications that are not only efficient
          and reliable but also delightful for the end-user. I am always eager to take
          on new challenges and contribute to projects that make a real impact.
        </Paragraph>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPage;
