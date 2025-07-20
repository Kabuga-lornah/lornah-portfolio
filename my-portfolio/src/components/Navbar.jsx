// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';

const Nav = styled.nav`
  background-color: ${theme.secondaryColor};
  color: ${theme.textDark};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled(Link)`
  font-family: 'Cinzel', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.primaryColor};
  text-decoration: none;

  &:hover {
    color: ${theme.accentColor};
  }
`;

// Corrected: Use $isOpen for the prop to prevent it from being passed to the DOM
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    background-color: ${theme.secondaryColor};
    position: absolute;
    top: 100%;
    left: 0;
    padding: 1rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')}; /* Use $isOpen here */
    align-items: center;
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  a {
    color: ${theme.textDark};
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    position: relative;
    padding-bottom: 0.3rem;

    &:hover {
      color: ${theme.primaryColor};
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${theme.primaryColor};
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${theme.textDark};

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">Lornah Kabuga</Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </Hamburger>
      {/* Corrected: Pass $isOpen prop to NavLinks */}
      <NavLinks $isOpen={isOpen}>
        <NavItem><Link to="/" onClick={toggleMenu}>Home</Link></NavItem>
        <NavItem><Link to="/about" onClick={toggleMenu}>About</Link></NavItem>
        <NavItem><Link to="/projects" onClick={toggleMenu}>Projects</Link></NavItem>
        <NavItem><Link to="/education" onClick={toggleMenu}>Education</Link></NavItem>
        <NavItem><Link to="/contact" onClick={toggleMenu}>Contact</Link></NavItem>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
