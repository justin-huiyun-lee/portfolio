import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ExperiencePage />
      <ContactPage />
    </div>
  );
};

export default App;
