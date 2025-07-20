// src/pages/ProjectsPage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../theme';

// Styled Components for Projects Page
const ProjectsContainer = styled.section`
  background-color: ${theme.secondaryColor};
  color: ${theme.textDark};
  padding: 6rem 2rem;
  text-align: center;
  min-height: calc(100vh - 120px); /* Adjust for Navbar and Footer height */
`;

const ProjectsTitle = styled.h1`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: ${theme.primaryColor};
  margin-bottom: 3rem;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.05);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background-color: ${theme.secondaryColor};
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Pushes buttons to the bottom */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    color: ${theme.primaryColor};
    margin-bottom: 0.8rem;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: ${theme.textLight};
    margin-bottom: 1.5rem;
    flex-grow: 1; /* Allows description to take available space */
  }
`;

const ProjectLinks = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* Allow links to wrap on small screens */

  a {
    display: inline-block;
    padding: 0.7rem 1.2rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
  }

  .github-link {
    background-color: ${theme.textDark}; /* Dark background for GitHub link */
    color: ${theme.secondaryColor};
    border: 2px solid ${theme.textDark};

    &:hover {
      background-color: ${theme.primaryColor};
      border-color: ${theme.primaryColor};
    }
  }

  .demo-link {
    background-color: ${theme.accentColor}; /* Accent color for demo link */
    color: ${theme.secondaryColor};
    border: 2px solid ${theme.accentColor};

    &:hover {
      background-color: ${theme.primaryColor};
      border-color: ${theme.primaryColor};
    }
  }
`;

const LoadingMessage = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: ${theme.textLight};
  margin-top: 5rem;
`;

const ErrorMessage = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: red;
  margin-top: 5rem;
`;

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/Kabuga-lornah/repos?sort=updated&direction=desc');
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();

        // Filter and map relevant projects
        const filteredProjects = data
          .filter(repo => !repo.fork && !repo.archived && repo.description) // Filter out forks, archived, and repos without descriptions
          .slice(0, 6) // Take top 6 projects
          .map(repo => ({
            id: repo.id,
            name: repo.name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase()), // Format name (e.g., "netflix-clone" to "Netflix Clone")
            description: repo.description,
            githubUrl: repo.html_url,
            demoUrl: repo.homepage || null, // homepage is often the live demo link
            language: repo.language,
            updatedAt: new Date(repo.updated_at).toLocaleDateString(),
          }));

        setProjects(filteredProjects);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsContainer>
      <ProjectsTitle>My Projects</ProjectsTitle>

      {loading && <LoadingMessage>Loading projects...</LoadingMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && projects.length === 0 && (
        <p>No projects found. Please check the GitHub username or try again later.</p>
      )}

      <ProjectGrid>
        {!loading && !error && projects.map(project => (
          <ProjectCard key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ProjectLinks>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-link">
                  Live Demo
                </a>
              )}
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default ProjectsPage;
