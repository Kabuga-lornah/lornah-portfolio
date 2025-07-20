// src/pages/ContactPage.jsx
import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

// Styled Components for Contact Page
const ContactContainer = styled.section`
  background-color: ${theme.secondaryColor}; /* White background */
  color: ${theme.textDark};
  padding: 6rem 2rem;
  text-align: center;
  min-height: calc(100vh - 120px); /* Adjust for Navbar and Footer height */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactTitle = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${theme.primaryColor};
  margin-bottom: 3rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.05);
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;

  a {
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    color: ${theme.textDark};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.primaryColor};
    }
  }
`;

const SectionHeading = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${theme.textDark};
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// Moved Paragraph definition here, before its usage in the functional component
const Paragraph = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  max-width: 800px;
  margin: 0 auto 2rem auto;
  line-height: 1.8;
  color: ${theme.textLight}; /* Ensure color is defined here */
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 2.5rem;
  background-color: ${theme.primaryColor};
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
`;

const FormGroup = styled.div`
  text-align: left;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: ${theme.secondaryColor};
  }
  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid ${theme.accentColor};
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    background-color: ${theme.secondaryColor};
    color: ${theme.textDark};

    &:focus {
      outline: none;
      border-color: ${theme.textDark};
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
    }
  }
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: ${theme.textDark};
  color: ${theme.secondaryColor};
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: ${theme.accentColor};
    transform: translateY(-2px);
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactTitle>Get In Touch</ContactTitle>

      <ContactContent>
        <Paragraph>
          I'm always open to new opportunities, collaborations, and conversations.
          Feel free to reach out through any of the channels below!
        </Paragraph>

        <ContactInfo>
          <a href="mailto:wangarilornah@gmail.com">
            Email: wangarilornah@gmail.com
          </a>
          <a href="https://github.com/Kabuga-lornah" target="_blank" rel="noopener noreferrer">
            GitHub: Kabuga-lornah
          </a>
          {/* Add LinkedIn or other relevant links if you wish */}
        </ContactInfo>

       
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactPage;
