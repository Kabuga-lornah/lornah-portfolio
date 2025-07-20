// src/pages/AboutPage.jsx
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

// Styled Components for About Page
const AboutContainer = styled.section`
  background-color: ${theme.secondaryColor}; /* White background */
  color: ${theme.textDark};
  padding: 4rem 1.5rem; /* Reduced padding for content sections */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px); /* Adjust for Navbar and Footer height */
`;

const AboutTitle = styled.h1`
  font-family: 'Cinzel', serif; /* Consistent font */
  font-size: clamp(2rem, 5vw, 3.5rem); /* Reduced size */
  color: ${theme.primaryColor}; /* Primary color for main title */
  margin-bottom: 2rem; /* Reduced margin */
  text-shadow: 1px 1px 3px rgba(0,0,0,0.05);
`;

const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left; /* Align text left for readability */
  line-height: 1.7; /* Reduced line height slightly */
  font-family: 'Poppins', sans-serif;
`;

const SectionHeading = styled.h2`
  font-family: 'Cinzel', serif; /* Consistent font */
  font-size: clamp(1.6rem, 3.5vw, 2.5rem); /* Reduced size */
  color: ${theme.textDark};
  margin-top: 2.5rem; /* Reduced margin */
  margin-bottom: 1.2rem; /* Reduced margin */
  text-align: center; /* Center section headings */
`;

const Paragraph = styled.p`
  font-size: clamp(0.9rem, 1.7vw, 1.05rem); /* Reduced size */
  margin-bottom: 1.2rem; /* Reduced margin */
  color: ${theme.textLight};
`;

// New styled component for Skill Category
const SkillCategory = styled.h3`
  font-family: 'Cinzel', serif; /* Consistent font */
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  color: ${theme.textDark};
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
`;

// Updated SkillsGrid for the new layout (matching image)
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); /* Adjusted for smaller, icon-focused items */
  gap: 1.2rem; /* Reduced gap */
  margin-top: 1rem;
  margin-bottom: 2.5rem; /* Adjusted margin */
  padding: 0 0.5rem; /* Reduced horizontal padding */
  justify-content: center; /* Center items in the grid */

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.5rem;
  }
`;

// Redesigned SkillItem (matching image)
const SkillItem = styled.div`
  background-color: ${theme.secondaryColor}; /* Consistent white background */
  color: ${theme.textDark};
  padding: 0.8rem; /* Adjusted padding */
  border-radius: 8px; /* Consistent border-radius */
  font-family: 'Poppins', sans-serif;
  font-weight: 500; /* Lighter font-weight for skill name */
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Subtle shadow like image */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110px; /* Fixed height for consistent card size */
  width: 100%; /* Ensure it fills grid column */

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12); /* Enhanced shadow on hover */
    /* Removed gradient change on hover for consistent color */
  }
`;

// Styled component for skill icons
const SkillIcon = styled.img`
  width: 50px; /* Icon size */
  height: 50px; /* Icon size */
  margin-bottom: 0.5rem; /* Space between icon and text */
  object-fit: contain; /* Ensure the whole icon is visible */
`;

// Styled component for skill name text
const SkillName = styled.span`
  font-size: 0.9rem; /* Smaller font size for skill name */
  color: ${theme.textDark};
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

        <SkillCategory>Front-end</SkillCategory>
        <SkillsGrid>
          <SkillItem>
            <SkillIcon src="./javascripts.png" alt="JavaScript" />
            <SkillName>JavaScript</SkillName>
          </SkillItem>
          <SkillItem>
            <SkillIcon src="./react.png" alt="React" />
            <SkillName>React</SkillName>
          </SkillItem>
          <SkillItem>
            <SkillIcon src="./html.png" alt="HTML5" />
            <SkillName>HTML5</SkillName>
          </SkillItem>
          <SkillItem>
            <SkillIcon src="./css.png" alt="CSS3" />
            <SkillName>CSS3</SkillName>
          </SkillItem>
          
          {/* Add more front-end skills as needed */}
        </SkillsGrid>

        <SkillCategory>Back-end</SkillCategory>
        <SkillsGrid>
          
          <SkillItem>
            <SkillIcon src="./python.jpeg" alt="Python" />
            <SkillName>Python</SkillName>
          </SkillItem>
          <SkillItem>
            <SkillIcon src="./django.png" alt="Django" />
            <SkillName>Django</SkillName>
          </SkillItem>
          <SkillItem>
            <SkillIcon src="./postgresql.png" alt="PostgreSQL" />
            <SkillName>PostgreSQL</SkillName>
          </SkillItem>
          <SkillItem>
            <SkillIcon src="./mongodb.png" alt="MongoDB" />
            <SkillName>MongoDB</SkillName>
          </SkillItem>
          {/* Add more back-end skills as needed */}
        </SkillsGrid>


        
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPage;