import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import SocialNetworks from './components/SocialNetworks/SocialNetworks';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Skills />
      <Experience />
      <Education />
      <SocialNetworks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
