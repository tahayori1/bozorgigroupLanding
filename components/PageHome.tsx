import React from 'react';
import Hero from './Hero';
import About from './About';
import Departments from './Departments';
import History from './Team';
import Humanity from './Philosophy';
import Contact from './Contact';

const PageHome: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Departments />
      <History />
      <Humanity />
      <Contact />
    </>
  );
};

export default PageHome;