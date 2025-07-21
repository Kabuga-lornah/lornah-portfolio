// src/pages/HomePage.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "../theme";

// Enhanced Animations
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
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

const pulseBorder = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

// Styled Components for HomePage
const HomePageHero = styled.section`
  background: linear-gradient(135deg, 
    ${theme.primaryColor} 0%, 
    rgba(${theme.primaryColor.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.9) 50%,
    ${theme.primaryColor} 100%
  );
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.03) 75%),
      linear-gradient(-45deg, rgba(255, 255, 255, 0.03) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.03) 75%);
    background-size: 60px 60px;
    animation: ${shimmer} 20s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, 
      rgba(255, 255, 255, 0.05) 0%, 
      transparent 50%
    );
    animation: ${float} 8s ease-in-out infinite;
    pointer-events: none;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-evenly;
    text-align: left;
  }
`;

const HeroContent = styled.div`
  max-width: 650px;
  margin-bottom: 3rem;
  z-index: 2;
  animation: ${fadeInLeft} 1s ease-out;

  @media (min-width: 992px) {
    margin-bottom: 0;
    margin-right: 4rem;
  }

  h1 {
    font-family: "Cinzel", serif;
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
    color: ${theme.secondaryColor};
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    line-height: 1.2;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, 
        ${theme.secondaryColor}, 
        transparent
      );
      border-radius: 2px;
      animation: ${shimmer} 3s ease-in-out infinite;
    }

    @media (min-width: 992px) {
      &::after {
        left: 0;
      }
    }
  }

  h2 {
    font-family: "Cinzel", serif;
    font-size: clamp(1.5rem, 3.5vw, 2.5rem);
    margin-bottom: 2rem;
    color: ${theme.textDark};
    line-height: 1.3;
    font-weight: 400;
    opacity: 0.95;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: clamp(1rem, 1.8vw, 1.15rem);
    margin-bottom: 3rem;
    color: ${theme.textDark};
    line-height: 1.7;
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  animation: ${fadeInUp} 1s ease-out 0.5s both;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  font-family: "Poppins", sans-serif;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &.primary-btn {
    background: linear-gradient(135deg, 
      ${theme.secondaryColor}, 
      rgba(255, 255, 255, 0.9)
    );
    color: ${theme.primaryColor};
    border: 2px solid ${theme.secondaryColor};

    &:hover {
      background: linear-gradient(135deg, 
        ${theme.accentColor}, 
        rgba(${theme.accentColor.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.9)
      );
      color: ${theme.secondaryColor};
      border-color: ${theme.accentColor};
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    }
  }

  &.secondary-btn {
    background: transparent;
    color: ${(props) =>
      props.$onPrimaryBackground ? theme.secondaryColor : theme.primaryColor};
    border: 2px solid
      ${(props) =>
        props.$onPrimaryBackground ? theme.secondaryColor : theme.primaryColor};
    backdrop-filter: blur(10px);

    &:hover {
      background: ${theme.secondaryColor};
      color: ${theme.primaryColor};
      border-color: ${theme.secondaryColor};
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
    }
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 10px solid ${theme.secondaryColor};
  z-index: 2;
  animation: ${fadeInRight} 1s ease-out 0.3s both;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: linear-gradient(45deg, 
      ${theme.secondaryColor}, 
      rgba(255, 255, 255, 0.8), 
      ${theme.secondaryColor}
    );
    background-size: 200% 200%;
    animation: ${gradientShift} 3s ease-in-out infinite;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    box-shadow: 
      inset 0 0 30px rgba(255, 255, 255, 0.3),
      0 0 50px rgba(255, 255, 255, 0.2);
    animation: ${pulseBorder} 2s infinite alternate;
    pointer-events: none;
  }

  @media (max-width: 991px) {
    width: 300px;
    height: 300px;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SectionContainer = styled.section`
  padding: 5rem 1.5rem;
  text-align: center;
  background: ${(props) => 
    props.$bgColor === theme.primaryColor 
      ? `linear-gradient(135deg, ${theme.primaryColor} 0%, rgba(${theme.primaryColor.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.95) 100%)`
      : `linear-gradient(135deg, ${theme.secondaryColor} 0%, rgba(255, 255, 255, 0.95) 100%)`
  };
  color: ${theme.textDark};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(${theme.primaryColor.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.3), 
      transparent
    );
  }
`;

const SectionTitle = styled.h2`
  font-family: "Cinzel", serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin-bottom: 3rem;
  color: ${(props) => 
    props.$onPrimary ? theme.secondaryColor : theme.textDark
  };
  position: relative;
  animation: ${fadeInUp} 1s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, 
      transparent, 
      ${(props) => props.$onPrimary ? theme.secondaryColor : theme.primaryColor}, 
      transparent
    );
    border-radius: 2px;
  }
`;

const SectionText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: clamp(1rem, 2vw, 1.15rem);
  max-width: 800px;
  margin: 0 auto 2rem auto;
  line-height: 1.8;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Adjusted min-width */
  gap: 1.5rem; /* Adjusted gap */
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectCard = styled.div`
  background: linear-gradient(145deg, 
    ${theme.secondaryColor}, 
    rgba(255, 255, 255, 0.95)
  );
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  padding: 2.5rem 2rem;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(${theme.primaryColor.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.1);
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out;

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
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    
    &::before {
      left: 100%;
    }
  }

  &:nth-child(even) {
    animation-delay: 0.2s;
  }

  &:nth-child(3n) {
    animation-delay: 0.4s;
  }

  h3 {
    font-family: "Cinzel", serif;
    font-size: 1.8rem;
    color: ${theme.primaryColor};
    margin-bottom: 1rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
      height: 2px;
      background: ${theme.accentColor};
      border-radius: 1px;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: ${theme.textLight};
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  a {
    color: ${theme.accentColor};
    font-weight: 600;
    text-decoration: none;
    font-size: 1.05rem;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${theme.accentColor};
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: ${theme.primaryColor};
      &::after {
        width: 100%;
      }
    }
  }
`;

const HobbyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
`;

const HobbyCard = styled(ProjectCard)`
  background: linear-gradient(145deg, 
    ${theme.primaryColor}, 
    rgba(${theme.primaryColor.replace('#', '').match(/.{2}/g).map(x => parseInt(x, 16)).join(', ')}, 0.95)
  );
  color: ${theme.secondaryColor};
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${fadeInUp} 0.8s ease-out;

  &::before {
    background: linear-gradient(90deg, 
      transparent, 
      ${theme.secondaryColor}, 
      transparent
    );
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  h3 {
    color: ${theme.secondaryColor};
    
    &::after {
      background: ${theme.secondaryColor};
    }
  }

  p {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const ViewAllButton = styled(StyledButton)`
  margin-top: 3rem;
  animation: ${pulse} 2s ease-in-out infinite;
  
  &:hover {
    animation: none;
  }
`;

const HomePage = () => {
  return (
    <>
      <HomePageHero>
        <HeroContent>
          <h1>Hi, I'm Lornah Kabuga</h1>
          <h2>A Passionate Software Engineer</h2>
          <p>
            Discover my online portfolio! I focus on developing reliable and
            scalable web applications, turning challenging concepts into refined
            digital experiences. Browse through my work to see how I combine
            innovation and programming expertise.
          </p>
          <HeroButtons>
            <StyledButton href="/projects" className="primary-btn">
              View My Work
            </StyledButton>
            <StyledButton
              href="/contact"
              className="secondary-btn"
              $onPrimaryBackground
            >
              Get In Touch
            </StyledButton>
          </HeroButtons>
        </HeroContent>
        <HeroImageContainer>
          {/* Add your profile image here */}
          {/* <ProfileImg src="your-profile-image.jpg" alt="Lornah Kabuga" /> */}
        </HeroImageContainer>
      </HomePageHero>

      <SectionContainer id="featured-projects" $bgColor={theme.secondaryColor}>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          <ProjectCard>
            <h3>Mental Health App</h3>
            <p>
              A comprehensive application focused on mental health support and resources,
              featuring user-friendly interfaces and accessible design principles.
            </p>
            <a
              href="https://mentalhealth10.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Project →
            </a>
          </ProjectCard>
          <ProjectCard>
            <h3>Skincare Website</h3>
            <p>
              A beautifully designed website dedicated to skincare products and routines,
              with responsive design and modern aesthetics.
            </p>
            <a
              href="https://kabuga-lornah.github.io/skincare-website/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Project →
            </a>
          </ProjectCard>
          <ProjectCard>
            <h3>Pet Adoption Website</h3>
            <p>
              A culminating React project demonstrating advanced development skills
              with interactive features and seamless user experience.
            </p>
            <a
              href="https://react-capstone-tan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Project →
            </a>
          </ProjectCard>
        </ProjectGrid>
        <ViewAllButton
          href="/projects"
          className="secondary-btn"
        >
          View All Projects
        </ViewAllButton>
      </SectionContainer>

      <SectionContainer id="hobbies-snippet" $bgColor={theme.primaryColor}>
        <SectionTitle $onPrimary>My Hobbies</SectionTitle>
        <ProjectGrid>
          <HobbyCard>
            <HobbyImage src="hicking.jpg" alt="Hiking" />
            <h3>Hiking & Outdoors</h3>
            <p>
              I love exploring nature trails and discovering new landscapes.
              It's a great way to clear my mind and stay active while connecting with nature.
            </p>
          </HobbyCard>
          <HobbyCard>
            <HobbyImage src="coding.jpg" alt="Coding" />
            <h3>Coding</h3>
            <p>
              I enjoy diving into new programming languages and frameworks,
              building innovative solutions and constantly expanding my
              technical skills through personal projects.
            </p>
          </HobbyCard>
          <HobbyCard>
            <HobbyImage src="baking.jpg" alt="Cooking" />
            <h3>Cooking & Baking</h3>
            <p>
              Experimenting with new recipes and creating delicious meals is a
              passion of mine. There's nothing like sharing good food with loved
              ones and exploring different cuisines.
            </p>
          </HobbyCard>
          <HobbyCard>
            <HobbyImage src="photo.jpg" alt="Photography" />
            <h3>Photography</h3>
            <p>
              Capturing moments and the beauty of the world around me through my
              lens is a fulfilling creative outlet that helps me see life from different perspectives.
            </p>
          </HobbyCard>
        </ProjectGrid>
      </SectionContainer>
    </>
  );
};

export default HomePage;