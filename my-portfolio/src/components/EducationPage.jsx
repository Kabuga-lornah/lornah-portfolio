// src/pages/EducationPage.jsx
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

// Styled Components for Education Page
const EducationContainer = styled.section`
  background-color: ${theme.secondaryColor}; /* White background */
  color: ${theme.textDark};
  padding: 6rem 2rem;
  text-align: center;
  min-height: calc(100vh - 120px); /* Adjust for Navbar and Footer height */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EducationTitle = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${theme.primaryColor};
  margin-bottom: 3rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.05);
`;

const EducationContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  font-family: 'Poppins', sans-serif;
`;

const EducationEntry = styled.div`
  background-color: ${theme.primaryColor}; 
  color: ${theme.secondaryColor}; 
  padding: 2.5rem;
  border-radius: 12px;
  margin-bottom: 2.5rem;
 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  padding-right: 80px; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-family: 'Cinzel', serif;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    color: ${theme.secondaryColor}; /* White for headings */
    margin-bottom: 0.5rem;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-weight: 600;
    color: ${theme.textDark}; /* Darker text for institution/program */
    margin-bottom: 0.8rem;
  }

  p {
    font-size: clamp(0.95rem, 1.8vw, 1.1rem);
    line-height: 1.7;
    color: ${theme.textDark}; /* Darker text for descriptions */
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
    margin-top: 1rem;
    color: ${theme.textDark};
    font-size: clamp(0.9rem, 1.7vw, 1.05rem);
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const SchoolLogo = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${theme.secondaryColor}; /* Added background for visibility */
  padding: 5px; /* Added padding to ensure logo is within its circle */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const EducationPage = () => {
  return (
    <EducationContainer>
      <EducationTitle>My Education</EducationTitle>

      <EducationContent>
        <EducationEntry>
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
            <li>Mastering advanced JavaScript, React, Node.js, and database management.</li>
            <li>Developing robust and scalable web applications from conception to deployment.</li>
            <li>Engaging in agile development practices and version control with Git.</li>
            <li>Focusing on clean code, testing, and performance optimization.</li>
          </ul>
        </EducationEntry>

        <EducationEntry>
          <SchoolLogo src="/pioneer.jpg" alt="Pioneer International University Logo" /> 
          <h2>Pioneer International University</h2>
          <h3>Bachelor of Arts in International Relations and Diplomacy (2020 - 2024)</h3>
          <p>
            Majored in Foreign Policy and Diplomacy of Superpower Countries.
            This academic journey provided a comprehensive understanding of global
            dynamics, critical thinking, and complex problem-solving.
          </p>
          <ul>
            <li>Developed strong research, analytical, and communication skills.</li>
            <li>Gained insights into geopolitical strategies and international law.</li>
            <li>Cultivated a global perspective, enhancing adaptability and cross-cultural understanding.</li>
            <li>Honed abilities in negotiation, strategic planning, and policy analysis.</li>
          </ul>
        </EducationEntry>

        <EducationEntry>
          <SchoolLogo src="/maryhill.png" alt="Maryhill Girls High School Logo" /> 
          <h2>Maryhill Girls High School</h2>
          <h3>Kenya Certificate of Secondary Education (KCSE) (2016 - 2019)</h3>
          <p>
            Completed secondary education with a strong academic record,
            laying a solid foundation for higher learning. Engaged in various
            extracurricular activities that fostered leadership and teamwork.
          </p>
          <ul>
            <li>Achieved excellent results in core subjects, including Mathematics and Sciences.</li>
            <li>Participated in debate clubs and community service initiatives.</li>
            <li>Developed discipline, time management, and problem-solving abilities.</li>
          </ul>
        </EducationEntry>
      </EducationContent>
    </EducationContainer>
  );
};

export default EducationPage;