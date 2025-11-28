// src/pages/ProjectsPage.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

// Keyframes for animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
  50% {
    box-shadow: 0 12px 30px rgba(155, 135, 95, 0.2);
  }
`;

// Styled Components for Projects Page
const ProjectsContainer = styled.section`
  background: linear-gradient(135deg, ${theme.secondaryColor} 0%, #fefefe 100%);
  color: ${theme.textDark};
  padding: 8rem 2rem 6rem;
  min-height: calc(100vh - 120px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 20% 50%, rgba(155, 135, 95, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(155, 135, 95, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(155, 135, 95, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProjectsTitle = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: clamp(3rem, 8vw, 5rem);
  color: ${theme.primaryColor};
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.1);
  position: relative;
  animation: ${slideInLeft} 1s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, ${theme.primaryColor}, transparent);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  color: ${theme.textLight};
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0.8;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  line-height: 1.6;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProjectCard = styled.div`
  background: linear-gradient(145deg, ${theme.secondaryColor} 0%, rgba(255, 255, 255, 0.95) 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
  text-align: left;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(155, 135, 95, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.primaryColor}, ${theme.accentColor});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    animation: ${glow} 2s ease-in-out infinite;

    &::before {
      transform: scaleX(1);
    }
  }

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
`;

const ProjectHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.9rem;
  color: ${theme.primaryColor};
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.3;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: ${theme.accentColor};
  }
`;

const ProjectDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.05rem;
  color: ${theme.textLight};
  line-height: 1.7;
  margin-bottom: 2rem;
  flex-grow: 1;
  opacity: 0.9;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-top: auto;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-align: center;
  min-width: 140px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &.github-link {
    background: linear-gradient(135deg, ${theme.textDark} 0%, #2c2c2c 100%);
    color: ${theme.secondaryColor};
    border: 2px solid ${theme.textDark};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    &:hover {
      background: linear-gradient(135deg, ${theme.primaryColor} 0%, #8b7355 100%);
      border-color: ${theme.primaryColor};
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(155, 135, 95, 0.4);
    }
  }

  &.demo-link {
    background: linear-gradient(135deg, ${theme.accentColor} 0%, #c19a6b 100%);
    color: ${theme.secondaryColor};
    border: 2px solid ${theme.accentColor};
    box-shadow: 0 4px 15px rgba(193, 154, 107, 0.3);

    &:hover {
      background: linear-gradient(135deg, ${theme.primaryColor} 0%, #8b7355 100%);
      border-color: ${theme.primaryColor};
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(155, 135, 95, 0.4);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 4rem 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin: 3rem 0;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(155, 135, 95, 0.1);
  min-width: 120px;
  transition: transform 0.3s ease;
  animation: ${fadeInUp} 1s ease-out;

  &:hover {
    transform: translateY(-5px);
  }

  .number {
    font-family: 'Cinzel', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: ${theme.primaryColor};
    display: block;
    margin-bottom: 0.5rem;
  }

  .label {
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    color: ${theme.textLight};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

const ProjectsPage = () => {
  // Static project data with more details
  const projects = [
    {
      id: 1,
      name: "Mental Health App",
      description: "A comprehensive application designed to provide support and resources for mental well-being. Features include mood tracking, guided meditations, and access to a curated list of mental health articles and professional contacts. Built with React and Node.js.",
      githubUrl: "https://github.com/Kabuga-lornah/mental-health",
      demoUrl: "https://mentalhealth10.vercel.app/",
    },
    {
      id: 2,
      name: "Pet Adoption Website",
      description: "A culminating React capstone project for adopting pets. It features a responsive design, advanced search and filtering options for available pets, user authentication, and an intuitive interface for managing adoption requests. Technologies include React Router and Styled Components.",
      githubUrl: "https://github.com/Kabuga-lornah/react-capstone",
      demoUrl: "https://react-capstone-tan.vercel.app/",
    },
    {
      id: 3,
      name: "Skincare Website",
      description: "An e-commerce style website focused on skincare products. It includes product listings with detailed descriptions, a shopping cart functionality, and user reviews. The site emphasizes a clean and responsive UI/UX, built using HTML, CSS, and JavaScript.",
      githubUrl: "https://github.com/Kabuga-lornah/skincare-website",
      demoUrl: "https://kabuga-lornah.github.io/skincare-website/home",
    },
    {
      id: 4,
      name: "Recipe Book",
      description: "A dynamic web application where users can discover, save, and manage their favorite recipes. Key features include searching recipes by ingredients, categories, or cuisine types, and adding personal notes. Developed using HTML, CSS, and vanilla JavaScript with local storage for persistence.",
      githubUrl: "https://github.com/Kabuga-lornah/recipe_book",
      demoUrl: "https://kabuga-lornah.github.io/recipe_book/home",
    },
    {
      id: 5,
      name: "To Do Website",
      description: "A simple yet functional to-do list application built using React. It allows users to add, delete, and mark tasks as complete, with persistent storage using local storage. This project demonstrates fundamental React concepts like component state, props, and event handling.",
      githubUrl: "https://github.com/Kabuga-lornah/week-3-react",
      demoUrl: "https://week-3-react.vercel.app/",
    },
    {
      id: 6,
      name: "Weather App",
      description: "A minimalist weather application that fetches real-time weather data for any city worldwide. Users can search for locations and view current temperature, humidity, and wind speed. Built with JavaScript and integrated with a third-party weather API for data retrieval.",
      githubUrl: "https://github.com/Kabuga-lornah/weather_app",
      demoUrl: "https://kabuga-lornah.github.io/weather_app/weather",
    },
    {
      id: 7,
      name: "UlinziMind",
      description: "An advanced web application built for mental resilience and well-being. It offers tools for stress management and cognitive support, designed with a focus on user privacy and data-driven insights.",
      githubUrl: "https://github.com/Kabuga-lornah/UlinziMind",
      demoUrl: null, // Assuming no live demo is available
    },
    {
      id: 8,
      name: "Face Recognition System",
      description: "A robust computer vision project for real-time face detection and recognition, showcasing expertise in image processing and machine learning algorithms using Python.",
      githubUrl: "https://github.com/Kabuga-lornah/face-recognition",
      demoUrl: null, // Assuming no live demo is available
    },
  ];

  return (
    <ProjectsContainer>
      <ContentWrapper>
        <ProjectsTitle>My Projects</ProjectsTitle>
        <Subtitle>
          Explore my portfolio of web applications and digital experiences, 
          each crafted with attention to detail and modern technologies.
        </Subtitle>

        <StatsContainer>
          <StatItem>
            <span className="number">{projects.length}</span> 
            <span className="label">Projects</span>
          </StatItem>
         
          <StatItem>
            <span className="number">100%</span>
            <span className="label">Responsive</span>
          </StatItem>
        </StatsContainer>

        <ProjectGrid>
          {projects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectHeader>
                <ProjectTitle>{project.name}</ProjectTitle>
              </ProjectHeader>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLink 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                >
                  View on GitHub
                </ProjectLink>
                {project.demoUrl && (
                  <ProjectLink 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="demo-link"
                  >
                    Live Demo
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default ProjectsPage;