import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/p.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { 
  FaMobileAlt, FaJava, FaPython, FaPhp, FaJs,
  FaReact, FaNodeJs, FaLeaf, FaDatabase, FaGitAlt
} from 'react-icons/fa';
import { SiTypescript, SiSpringboot } from 'react-icons/si';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.hero : en.hero;
  
  const technologies = [
    { name: 'React Native', icon: <FaMobileAlt /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Git', icon: <FaGitAlt /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden px-3 sm:px-4 md:px-6"
      style={{ backgroundColor: '#0A0B1F' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" style={{ backgroundColor: '#00D4FF', opacity: 0.08, borderRadius: '50%', filter: 'blur(64px)' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" style={{ backgroundColor: '#1A1B3A', opacity: 0.2, borderRadius: '50%', filter: 'blur(64px)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Badge IA/Data Science */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6 sm:mb-8 md:mb-12"
        >
          <div 
            className="inline-flex items-center gap-2 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-xl"
            style={{ backgroundColor: '#1A1B3A', border: '1px solid #00D4FF' }}
          >
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full" style={{ backgroundColor: '#00D4FF', opacity: 0.75 }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3" style={{ backgroundColor: '#00D4FF' }}></span>
            </span>
            <span className="font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
              {language === 'fr' ? 'Spécialisation IA & Data Science en cours' : 'AI & Data Science Specialization in progress'}
            </span>
          </div>
        </motion.div>

        {/* Grid principale : texte à gauche / photo à droite */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center mb-8 sm:mb-12 md:mb-16">
          {/* Colonne gauche - Texte */}
          <div className="text-center lg:text-left space-y-2 sm:space-y-3 md:space-y-4">
            {/* Première ligne : Salutation */}
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight break-words hyphens-auto" style={{ color: '#00D4FF' }}>
                {t.greeting}
              </h1>
            </motion.div> */}

            {/* Deuxième ligne : Nom de famille */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold break-words hyphens-auto overflow-hidden" style={{ color: '#FFFFFF' }}>
                {t.name}
              </h2>
            </motion.div>

            {/* Troisième ligne : Prénom */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold break-words hyphens-auto" style={{ color: '#00D4FF' }}>
                {t.lastName}
              </h3>
            </motion.div>

            {/* Quatrième ligne : Description professionnelle */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-2 sm:space-y-3 md:space-y-4 pt-2 sm:pt-3 md:pt-4"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold break-words" style={{ color: '#E0E0E0' }}>
                <span style={{ color: '#00D4FF', fontWeight: 'bold' }}>{t.subtitle}</span>
              </p>

              <div className="h-8 sm:h-10 md:h-12 flex items-center justify-center lg:justify-start overflow-visible">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl break-words flex flex-wrap items-center justify-center lg:justify-start gap-2" style={{ color: '#E0E0E0' }}>
                  <span>{t.skills}</span>
                  <motion.span
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="font-bold whitespace-nowrap flex items-center gap-2"
                    style={{ color: '#00D4FF' }}
                  >
                    <span className="text-lg">
                      {technologies[textIndex].icon}
                    </span>
                    <span>{technologies[textIndex].name}</span>
                  </motion.span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Colonne droite - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full blur-xl opacity-40 scale-110"
                style={{ background: 'linear-gradient(to top right, #00D4FF, #1A1B3A)' }}
              ></div>
              <img
                src={profileImage}
                alt="Johnson Rolly Andriamaherimanana"
                className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full shadow-2xl border-4 sm:border-6 md:border-8"
                style={{ borderColor: '#00D4FF', backgroundColor: '#0A0B1F' }}
              />
              <div 
                className="absolute inset-0 rounded-full ring-1 sm:ring-2 md:ring-4 animate-pulse"
                style={{ borderColor: '#00D4FF', opacity: 0.3 }}
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Description centrée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center max-w-3xl md:max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12"
        >
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed px-2 sm:px-3 md:px-0" style={{ color: '#E0E0E0' }}>
            {t.description}
          </p>
        </motion.div>

        {/* Localisation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 px-2"
          style={{ color: '#E0E0E0' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#00D4FF' }}>
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm md:text-base">{t.location}</span>
            </div>
            <span style={{ color: '#00D4FF' }} className="hidden sm:inline mx-2 md:mx-3">•</span>
            <span className="text-xs sm:text-sm md:text-base">{t.available}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;