// src/pages/EducationPage.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

// Animations
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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(139, 69, 19, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(139, 69, 19, 0);
  }
`;

// Styled Components for Education Page
const EducationContainer = styled.section`
  background: linear-gradient(135deg, ${theme.secondaryColor} 0%, #f8f9fa 100%);
  color: ${theme.textDark};
  padding: 6rem 2rem;
  text-align: center;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(45deg, ${theme.primaryColor}20, transparent);
    pointer-events: none;
  }
`;

const EducationTitle = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${theme.primaryColor};
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  animation: ${fadeInUp} 0.8s ease-out;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, ${theme.primaryColor}, ${theme.primaryColor}80);
    border-radius: 2px;
  }
`;

const EducationContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
`;

const EducationEntry = styled.div`
  background: linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.primaryColor}e6 100%);
  color: ${theme.secondaryColor};
  padding: 3rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  padding-right: 120px;
  overflow: hidden;
  border: 2px solid transparent;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 0%, ${theme.secondaryColor}10 100%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${theme.secondaryColor}15 0%, transparent 70%);
    pointer-events: none;
    transform: rotate(45deg);
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 
      0 20px 40px rgba(139, 69, 19, 0.3),
      0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: ${theme.secondaryColor}40;
  }

  &:nth-child(even) {
    background: linear-gradient(135deg, ${theme.primaryColor}f0 0%, ${theme.primaryColor} 100%);
  }

  h2 {
    font-family: 'Cinzel', serif;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    color: ${theme.secondaryColor};
    margin-bottom: 0.8rem;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    position: relative;
    z-index: 3;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-weight: 600;
    color: ${theme.textDark}; /* Changed to dark text */
    margin-bottom: 1.2rem;
    position: relative;
    z-index: 3;
  }

  p {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    line-height: 1.8;
    color: ${theme.textDark}; /* Changed to dark text */
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 3;
    text-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }

  ul {
    list-style: none;
    margin-left: 0;
    margin-top: 1.5rem;
    color: ${theme.textDark}; /* Changed to dark text */
    font-size: clamp(0.9rem, 1.7vw, 1.05rem);
    position: relative;
    z-index: 3;
  }

  li {
    margin-bottom: 0.8rem;
    padding-left: 2rem;
    position: relative;
    line-height: 1.6;
    
    &:hover {
      color: ${theme.secondaryColor};
      transform: translateX(5px);
      transition: all 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    padding-right: 2rem;
  }
`;

const SchoolLogo = styled.img`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${theme.secondaryColor};
  padding: 8px;
  box-shadow: 
    0 8px 16px rgba(0,0,0,0.2),
    0 0 0 4px ${theme.secondaryColor}80;
  transition: all 0.3s ease;
  z-index: 4;
  animation: ${pulse} 4s infinite;
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 
      0 12px 24px rgba(0,0,0,0.3),
      0 0 0 6px ${theme.secondaryColor};
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    top: 20px;
    right: 20px;
  }
`;

const EducationPage = () => {
  return (
    <EducationContainer>
      <EducationTitle>My Educational Journey</EducationTitle>

      <EducationContent>
        <EducationEntry delay="0.2s">
          <SchoolLogo src="/zindua.png" alt="Zindua Coding School Logo" /> 
          <h2>Zindua Coding School</h2>
          <h3>Software Engineering Program (February 2025 - Present)</h3>
          <p>
            Currently immersed in an intensive Software Engineering program,
            honing practical skills in modern web development. This program
            emphasizes hands-on projects, collaborative coding, and a deep dive
            into full-stack development methodologies.
          </p>
          <ul>
            <li>Mastering advanced JavaScript, React, Node.js, and database management</li>
            <li>Developing robust and scalable web applications from conception to deployment</li>
            <li>Engaging in agile development practices and version control with Git</li>
            <li>Focusing on clean code, testing, and performance optimization</li>
          </ul>
        </EducationEntry>

        <EducationEntry delay="0.4s">
          <SchoolLogo src="/pioneer.jpg" alt="Pioneer International University Logo" /> 
          <h2>Pioneer International University</h2>
          <h3>Bachelor of Arts in International Relations and Diplomacy (2020 - 2024)</h3>
          <p>
            Majored in Foreign Policy and Diplomacy of Superpower Countries.
            This academic journey provided a comprehensive understanding of global
            dynamics, critical thinking, and complex problem-solving.
          </p>
          <ul>
            <li>Developed strong research, analytical, and communication skills</li>
            <li>Gained insights into geopolitical strategies and international law</li>
            <li>Cultivated a global perspective, enhancing adaptability and cross-cultural understanding</li>
            <li>Honed abilities in negotiation, strategic planning, and policy analysis</li>
          </ul>
        </EducationEntry>

        <EducationEntry delay="0.6s">
          <SchoolLogo src="/maryhill.png" alt="Maryhill Girls High School Logo" /> 
          <h2>Maryhill Girls High School</h2>
          <h3>Kenya Certificate of Secondary Education (KCSE) (2016 - 2019)</h3>
          <p>
            Completed secondary education with a strong academic record,
            laying a solid foundation for higher learning. Engaged in various
            extracurricular activities that fostered leadership and teamwork.
          </p>
          <ul>
            <li>Achieved excellent results in core subjects, including Mathematics and Sciences</li>
            <li>Participated in debate clubs and community service initiatives</li>
            <li>Developed discipline, time management, and problem-solving abilities</li>
          </ul>
        </EducationEntry>
      </EducationContent>
    </EducationContainer>
  );
};

export default EducationPage;