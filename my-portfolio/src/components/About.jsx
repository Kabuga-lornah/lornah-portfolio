// src/pages/AboutPage.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

// Animations
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Styled Components for About Page
const AboutContainer = styled.section`
  background: linear-gradient(135deg, 
    ${theme.secondaryColor} 0%, 
    rgba(255, 255, 255, 0.95) 50%,
    ${theme.secondaryColor} 100%
  );
  color: ${theme.textDark};
  padding: 6rem 1.5rem 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent, 
      ${theme.primaryColor}, 
      transparent
    );
    animation: ${shimmer} 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, 
      rgba(${theme.primaryColor.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.08) 0%, 
      transparent 70%
    );
    border-radius: 50%;
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const AboutTitle = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${theme.primaryColor};
  margin-bottom: 2.5rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  position: relative;
  animation: ${fadeInUp} 1s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, 
      transparent, 
      ${theme.primaryColor}, 
      transparent
    );
    border-radius: 2px;
  }
`;

const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
`;

const SectionHeading = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${theme.textDark};
  margin: 3rem 0 2rem;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: ${theme.primaryColor};
    border-radius: 1px;
  }
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  margin-bottom: 1.5rem;
  color: ${theme.textLight};
  text-align: justify;
  text-justify: inter-word;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    color: ${theme.textDark};
  }
`;

const SkillCategory = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  color: ${theme.textDark};
  margin: 3rem 0 1.5rem;
  text-align: center;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, 
      ${theme.primaryColor}, 
      rgba(${theme.primaryColor.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3)
    );
    border-radius: 1px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1.8rem;
  margin: 2rem 0 3rem;
  padding: 1rem;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.2rem;
    padding: 0.5rem;
  }
`;

const SkillItem = styled.div`
  background: linear-gradient(145deg, 
    ${theme.secondaryColor}, 
    rgba(255, 255, 255, 0.9)
  );
  color: ${theme.textDark};
  padding: 1.5rem 1rem;
  border-radius: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-align: center;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.1),
    0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 140px;
  width: 100%;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent, 
      ${theme.primaryColor}, 
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-12px) scale(1.05);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.15),
      0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: rgba(${theme.primaryColor.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  &:nth-child(odd) {
    animation: ${fadeInUp} 0.8s ease-out;
  }

  &:nth-child(even) {
    animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  }
`;

const SkillIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 0.8rem;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  ${SkillItem}:hover & {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.2));
  }
`;

const SkillName = styled.span`
  font-size: 1rem;
  color: ${theme.textDark};
  font-weight: 600;
  transition: color 0.3s ease;

  ${SkillItem}:hover & {
    color: ${theme.primaryColor};
  }
`;

const IntroSection = styled.div`
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      ${theme.primaryColor}, 
      transparent
    );
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>

      <AboutContent>
        <IntroSection>
          <Paragraph>
            Hello! I'm <strong>Lornah Kabuga</strong>, a passionate Software Developer with a knack for
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
        </IntroSection>

        <SectionHeading>My Skills</SectionHeading>

        <SkillCategory>Front-end Technologies</SkillCategory>
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
        </SkillsGrid>

        <SkillCategory>Back-end Technologies</SkillCategory>
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
        </SkillsGrid>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutPage;