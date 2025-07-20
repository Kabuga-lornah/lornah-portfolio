// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';


const FooterContainer = styled.footer`
  background-color: ${theme.textDark};
  color: ${theme.secondaryColor};
  padding: 2.5rem 1.5rem; /* Slightly increased padding for more breathing room */
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Subtle top border for separation */
`;

const SocialLinks = styled.div`
  margin-top: 1.2rem; /* Adjusted margin */
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Increased gap between links */

  a {
    color: ${theme.secondaryColor}; /* This color will now apply to the icon itself if it's an SVG that inherits color */
    font-size: 1.8rem; /* This will be overridden by img width/height, but kept for potential text fallback */
    transition: color 0.3s ease, transform 0.2s ease; /* Added transform to transition */
    display: flex; /* To center icon if needed */
    align-items: center; /* To center icon if needed */
    justify-content: center; /* To center icon if needed */

    &:hover {
      color: ${theme.primaryColor}; /* Change color on hover (for text or SVG that inherits) */
      transform: translateY(-3px); /* Subtle lift effect on hover */
    }
  }
`;

const SocialIcon = styled.img`
  width: 30px; /* Set a specific size for the icon images */
  height: 30px;
  object-fit: contain; /* Ensure the entire icon is visible */
  /* Removed filter: brightness(0) invert(1); to display original icon colors */
  transition: transform 0.2s ease; /* Add transition for hover effect */

  ${SocialLinks} a:hover & {
    transform: scale(1.1); /* Slightly enlarge icon on hover */
  }
`;


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <p>&copy; {currentYear} Lornah Kabuga. All rights reserved.</p>
      <SocialLinks>
        <a href="https://github.com/Kabuga-lornah" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/lornahkabuga" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <a href="mailto:wangarilornah@gmail.com">
          <SocialIcon src="/icons/email.svg" alt="Email" />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;