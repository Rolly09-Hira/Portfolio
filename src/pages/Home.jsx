// src/pages/Home.jsx
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects/>
    </div>
  );
};

export default Home;