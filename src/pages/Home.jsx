// src/pages/Home.jsx
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
const Home = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <Skills />
      <Projects/>
      <About />
    </div>
  );
};

export default Home;