// src/pages/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import theme from '../theme'; 


// Styled Components for HomePage
const HomePageHero = styled.section`
  background-color: ${theme.primaryColor};
  color: ${theme.textDark};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  background-image: linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 100%),
                    linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 100%);
  background-size: 60px 60px;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-evenly;
    text-align: left;
  }
`;

const HeroContent = styled.div`
  max-width: 650px;
  margin-bottom: 3rem;
  z-index: 1;

  @media (min-width: 992px) {
    margin-bottom: 0;
    margin-right: 4rem;
  }

  h1 {
    font-family: 'Cinzel', serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 0.8rem;
    color: ${theme.secondaryColor};
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    line-height: 1.2;
  }

  h2 {
    font-family: 'Cinzel', serif;
    font-size: clamp(1.8rem, 4vw, 3rem);
    margin-bottom: 2rem;
    color: ${theme.textDark};
    line-height: 1.2;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1rem, 2vw, 1.25rem);
    margin-bottom: 3rem;
    color: ${theme.textDark};
  }
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 1rem 2.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  font-family: 'Poppins', sans-serif;

  &.primary-btn {
    background-color: ${theme.secondaryColor};
    color: ${theme.primaryColor};
    border: 2px solid ${theme.secondaryColor};

    &:hover {
      background-color: ${theme.accentColor};
      color: ${theme.secondaryColor};
      border-color: ${theme.accentColor};
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    }
  }

  &.secondary-btn {
    background-color: transparent;
    color: ${theme.secondaryColor};
    border: 2px solid ${theme.secondaryColor};

    &:hover {
      background-color: ${theme.secondaryColor};
      color: ${theme.primaryColor};
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    }
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  border: 8px solid ${theme.secondaryColor};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 8px solid transparent;
    box-shadow: 0 0 25px rgba(255,255,255,0.8), inset 0 0 25px rgba(255,255,255,0.8);
    animation: pulseBorder 2s infinite alternate;
    pointer-events: none;
  }

  @keyframes pulseBorder {
    from { transform: scale(1); opacity: 0.7; }
    to { transform: scale(1.03); opacity: 1; }
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: ${props => props.$bgColor || theme.secondaryColor};
  color: ${theme.textDark};
`;

const SectionTitle = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 2.5rem;
  color: ${theme.textDark};
`;

const SectionText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2vw, 1.15rem);
  max-width: 800px;
  margin: 0 auto 2rem auto;
  line-height: 1.8;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectCard = styled.div`
  background-color: ${theme.secondaryColor};
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    color: ${theme.primaryColor};
    margin-bottom: 0.8rem;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: ${theme.textLight};
    margin-bottom: 1.5rem;
  }

  a {
    color: ${theme.accentColor};
    font-weight: 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HomePage = () => {
  return (
    <>
      <HomePageHero>
        <HeroContent>
          <h1>Hi, I'm Lornah Kabuga</h1>
          <h2>A Passionate Software Developer</h2>
          <p>
            Welcome to my digital space! I specialize in building robust and
            scalable web applications, transforming complex ideas into elegant solutions.
            Explore my projects to see how I bring creativity and code together.
          </p>
          <HeroButtons>
            <StyledButton href="/projects" className="primary-btn">View My Work</StyledButton>
            <StyledButton href="/contact" className="secondary-btn">Get In Touch</StyledButton>
          </HeroButtons>
        </HeroContent>
        <HeroImageContainer>
         
        </HeroImageContainer>
      </HomePageHero>

      <SectionContainer id="about-snippet">
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
          I am a passionate software developer with a strong foundation in building dynamic
          web applications. My journey into tech began with a curiosity for how things work,
          and has grown into a drive to create impactful solutions. I thrive on challenges
          and continuously seek to expand my knowledge and skill set.
        </SectionText>
        <StyledButton href="/about" className="secondary-btn">Read More About Me</StyledButton>
      </SectionContainer>

      <SectionContainer id="featured-projects" $bgColor={theme.primaryColor}>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          <ProjectCard>
            <h3>Netflix Clone</h3>
            <p>A full-stack Netflix-like streaming platform showcasing video playback, user authentication, and a responsive UI.</p>
            <a href="https://github.com/Kabuga-lornah/Netflix-Clone" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </ProjectCard>
          <ProjectCard>
            <h3>Blog App</h3>
            <p>A responsive blog application with user authentication, rich text editing, and comment functionalities.</p>
            <a href="https://github.com/Kabuga-lornah/Blog-App" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </ProjectCard>
          <ProjectCard>
            <h3>Project X (Placeholder)</h3>
            <p>Description for another exciting project you've worked on, highlighting key features and technologies.</p>
            <a href="/projects" target="_blank" rel="noopener noreferrer">Learn More</a>
          </ProjectCard>
        </ProjectGrid>
        <StyledButton href="/projects" className="secondary-btn" style={{marginTop: '3rem'}}>View All Projects</StyledButton>
      </SectionContainer>
    </>
  );
};

export default HomePage;
