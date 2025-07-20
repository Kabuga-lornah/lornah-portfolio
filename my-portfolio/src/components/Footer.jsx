// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import theme from '../theme'; 


const FooterContainer = styled.footer`
  background-color: ${theme.textDark};
  color: ${theme.secondaryColor};
  padding: 2rem 1rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  margin-top: auto;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  a {
    color: ${theme.secondaryColor};
    font-size: 1.5rem;
    margin: 0 0.8rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.primaryColor};
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <p>&copy; {currentYear} Lornah Kabuga. All rights reserved.</p>
      <SocialLinks>
        <a href="https://github.com/Kabuga-lornah" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/lornah-kabuga" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;

