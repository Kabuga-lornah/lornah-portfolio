import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
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

const ContactContainer = styled.section`
  background: linear-gradient(135deg, ${theme.secondaryColor} 0%, #f8f9fa 100%);
  color: ${theme.textDark};
  padding: 6rem 2rem;
  text-align: center;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, ${theme.primaryColor}15 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${theme.accentColor}10 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ContactTitle = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  background: linear-gradient(135deg, ${theme.primaryColor}, ${theme.accentColor});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  text-shadow: 0 4px 8px rgba(0,0,0,0.1);
  animation: ${fadeInUp} 0.8s ease-out;
  position: relative;
  z-index: 1;
`;

const Subtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: ${theme.textLight};
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  position: relative;
  z-index: 1;
`;

const ContactContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfoSection = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  }
`;

const SectionHeading = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 4vw, 2.2rem);
  color: ${theme.primaryColor};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, ${theme.primaryColor}, ${theme.accentColor});
    border-radius: 2px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContactLink = styled.a`
  font-size: clamp(1.1rem, 2vw, 1.2rem);
  color: ${theme.textDark};
  text-decoration: none;
  font-weight: 500;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  background: linear-gradient(135deg, ${theme.secondaryColor}, #f8f9fa);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    color: ${theme.secondaryColor};
    background: linear-gradient(135deg, ${theme.primaryColor}, ${theme.accentColor});
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    border-color: ${theme.primaryColor};

    &::before {
      left: 100%;
    }
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.primaryColor}20, ${theme.accentColor}20);
  animation: ${float} 3s ease-in-out infinite;

  &.icon-1 {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  &.icon-2 {
    top: 20%;
    right: 15%;
    animation-delay: 1s;
  }

  &.icon-3 {
    bottom: 20%;
    left: 15%;
    animation-delay: 2s;
  }

  &.icon-4 {
    bottom: 10%;
    right: 10%;
    animation-delay: 0.5s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <FloatingIcon className="icon-1" />
      <FloatingIcon className="icon-2" />
      <FloatingIcon className="icon-3" />
      <FloatingIcon className="icon-4" />
      
      <ContactTitle>Get In Touch</ContactTitle>
      <Subtitle>
        I'm always open to new opportunities, collaborations, and conversations.
        Let's create something amazing together!
      </Subtitle>

      <ContactContent>
        <ContactGrid>
          <ContactInfoSection>
            <SectionHeading>Connect With Me</SectionHeading>
            <ContactInfo>
              <ContactLink href="mailto:wangarilornah@gmail.com">
                wangarilornah@gmail.com
              </ContactLink>
              <ContactLink 
                href="https://github.com/Kabuga-lornah" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub: Kabuga-lornah
              </ContactLink>
              <ContactLink 
                href="https://www.linkedin.com/in/lornahkabuga"
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn: lornahkabuga
              </ContactLink>
            </ContactInfo>
          </ContactInfoSection>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactPage;