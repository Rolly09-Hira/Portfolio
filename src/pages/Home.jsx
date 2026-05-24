// src/pages/Home.jsx
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Formation from '../components/Formation';
import Experience from '../components/Experience';
import WelcomeModal from '../components/WelcomeModal';
const Home = () => {
  return (
    <div>
      <WelcomeModal />
      <Hero />
      <Experience />
      <Skills />
      <Formation />
      <Projects/>
      <About />
    </div>
  );
};

export default Home;