// src/pages/HomePage.jsx
import React from "react";
import styled from "styled-components";
import theme from "../theme";

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

  background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.05) 25%,
      transparent 25%,
      transparent 75%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.05) 25%,
      transparent 25%,
      transparent 75%,
      rgba(255, 255, 255, 0.05) 75%,
      rgba(255, 255, 255, 0.05) 100%
    );
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
    font-family: "Cinzel", serif;
    font-size: clamp(1.8rem, 4.5vw, 3rem); /* Further reduced size */
    margin-bottom: 0.8rem;
    color: ${theme.secondaryColor};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    line-height: 1.2;
  }

  h2 {
    font-family: "Cinzel", serif;
    font-size: clamp(1.3rem, 3vw, 2.2rem); /* Further reduced size */
    margin-bottom: 2rem;
    color: ${theme.textDark};
    line-height: 1.2;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: clamp(0.85rem, 1.6vw, 1rem); /* Further reduced size */
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
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;

  &.primary-btn {
    background-color: ${theme.secondaryColor};
    color: ${theme.primaryColor};
    border: 2px solid ${theme.secondaryColor};

    &:hover {
      background-color: ${theme.accentColor};
      color: ${theme.secondaryColor};
      border-color: ${theme.accentColor};
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
  }

  &.secondary-btn {
    background-color: transparent;
    color: ${(props) =>
      props.$onPrimaryBackground ? theme.secondaryColor : theme.primaryColor};
    border: 2px solid
      ${(props) =>
        props.$onPrimaryBackground ? theme.secondaryColor : theme.primaryColor};

    &:hover {
      background-color: ${theme.secondaryColor};
      color: ${theme.primaryColor};
      border-color: ${theme.primaryColor};
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    }
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 8px solid ${theme.secondaryColor};
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 8px solid transparent;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.8),
      inset 0 0 25px rgba(255, 255, 255, 0.8);
    animation: pulseBorder 2s infinite alternate;
    pointer-events: none;
  }

  @keyframes pulseBorder {
    from {
      transform: scale(1);
      opacity: 0.7;
    }
    to {
      transform: scale(1.03);
      opacity: 1;
    }
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const SectionContainer = styled.section`
  padding: 3rem 1.5rem;
  text-align: center;
  background-color: ${(props) => props.$bgColor || theme.secondaryColor};
  color: ${theme.textDark};
`;

const SectionTitle = styled.h2`
  font-family: "Cinzel", serif;
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  margin-bottom: 2rem;
  color: ${theme.textDark};
`;

const SectionText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  max-width: 700px;
  margin: 0 auto 1.5rem auto;
  line-height: 1.7;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectCard = styled.div`
  background-color: ${theme.secondaryColor};
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.07);
  padding: 1.8rem;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }

  h3 {
    font-family: "Cinzel", serif;
    font-size: 1.6rem;
    color: ${theme.primaryColor};
    margin-bottom: 0.7rem;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 0.95rem;
    color: ${theme.textLight};
    margin-bottom: 1.2rem;
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

const HobbyImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.8rem;
`;

// New styled component for Hobby Cards
const HobbyCard = styled(ProjectCard)`
  background-color: ${theme.primaryColor};
  color: ${theme.secondaryColor};
  border: 1px solid ${theme.accentColor};
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: ${theme.secondaryColor};
  }

  p {
    color: ${theme.textDark};
  }
`;

const HomePage = () => {
  return (
    <>
      <HomePageHero>
        <HeroContent>
          <h1>Hi, I'm Lornah Kabuga</h1>
          <h2>A Passionate Software Enginner</h2>
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
            {/* Added $onPrimaryBackground prop to differentiate styling on primary color background */}
            <StyledButton
              href="/contact"
              className="secondary-btn"
              $onPrimaryBackground
            >
              Get In Touch
            </StyledButton>
          </HeroButtons>
        </HeroContent>
        <HeroImageContainer></HeroImageContainer>
      </HomePageHero>

      {/* Featured Projects section (now above Hobbies) with white background */}
      <SectionContainer id="featured-projects" $bgColor={theme.secondaryColor}>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          <ProjectCard>
            <h3>Mental Health App</h3>
            <p>
              An application focused on mental health support and resources.
            </p>
            <a
              href="https://mentalhealth10.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </ProjectCard>
          <ProjectCard>
            <h3>Skincare Website</h3>
            <p>A website dedicated to skincare products and routines.</p>
            <a
              href="https://kabuga-lornah.github.io/skincare-website/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </ProjectCard>
          <ProjectCard>
            <h3>Pet Adoption Website</h3>
            <p>A culminating project demonstrating React development skills.</p>
            <a
              href="https://react-capstone-tan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </ProjectCard>
        </ProjectGrid>
        <StyledButton
          href="/projects"
          className="secondary-btn"
          style={{ marginTop: "2.5rem" }}
        >
          View All Projects
        </StyledButton>
      </SectionContainer>

      {/* Hobbies section now uses unique cards with images and main theme color background */}
      <SectionContainer id="hobbies-snippet" $bgColor={theme.primaryColor}>
        <SectionTitle>My Hobbies</SectionTitle>
        <ProjectGrid>
          {" "}
          {/* Reusing ProjectGrid for card layout */}
          <HobbyCard>
            {" "}
            {/* Using the new HobbyCard for unique styling */}
            <HobbyImage src="hicking.jpg" alt="Hiking" />
            <h3>Hiking & Outdoors</h3>
            <p>
              I love exploring nature trails and discovering new landscapes.
              It's a great way to clear my mind and stay active.
            </p>
          </HobbyCard>
          <HobbyCard>
            <HobbyImage src="coding.jpg" alt="Coding" />{" "}
            {/* Changed from reading.jpg to coding.jpg and alt to "Coding" */}
            <h3>Coding</h3> {/* Changed from Reading to Coding */}
            <p>
              I enjoy diving into new programming languages and frameworks,
              building innovative solutions and constantly expanding my
              technical skills.
            </p>{" "}
            {/* Updated description */}
          </HobbyCard>
          <HobbyCard>
            <HobbyImage src="baking.jpg" alt="Cooking" />
            <h3>Cooking & Baking</h3>
            <p>
              Experimenting with new recipes and creating delicious meals is a
              passion of mine. There's nothing like sharing good food with loved
              ones.
            </p>
          </HobbyCard>
          <HobbyCard>
            <HobbyImage src="photo.jpg" alt="Photography" />
            <h3>Photography</h3>
            <p>
              Capturing moments and the beauty of the world around me through my
              lens is a fulfilling creative outlet.
            </p>
          </HobbyCard>
        </ProjectGrid>
        {/* You can add a button here if you have a dedicated hobbies page */}
        {/* <StyledButton href="/hobbies" className="primary-btn" style={{marginTop: '2.5rem'}}>Discover More Hobbies</StyledButton> */}
      </SectionContainer>
    </>
  );
};

export default HomePage;
