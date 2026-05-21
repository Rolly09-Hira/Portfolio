import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileImage from '../assets/p.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import cvFile from '../assets/fichier/CV.pdf';
import { 
  FaMobileAlt, FaJava, FaPython, FaPhp, FaJs,
  FaReact, FaNodeJs, FaLeaf, FaDatabase, FaGitAlt,
  FaDownload, FaEnvelope
} from 'react-icons/fa';
import { SiTypescript, SiSpringboot } from 'react-icons/si';

const Hero = () => {
  const navigate = useNavigate();
  const goToContact = () => navigate('/contact');
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('about');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'CV_Johnson_Rolly_Andriamaherimanana.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden"
      style={{ backgroundColor: '#0A0B1F' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" style={{ backgroundColor: '#00D4FF', opacity: 0.08, borderRadius: '50%', filter: 'blur(64px)' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" style={{ backgroundColor: '#1A1B3A', opacity: 0.2, borderRadius: '50%', filter: 'blur(64px)' }}></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid principale : texte à gauche / photo à droite */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Colonne gauche - Texte */}
          <div className="text-center lg:text-left space-y-3 sm:space-y-4">
            {/* Badge IA/Data Science */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div 
                className="inline-flex items-center gap-2 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full shadow-xl"
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
            
            {/* Salutation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight break-words hyphens-auto" style={{ color: '#ffffff' }}>
                {t.greeting}
              </h1>
            </motion.div>

            {/* Prénom et nom */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight break-words hyphens-auto" style={{ color: '#00D4FF' }}>
                {t.lastName} {t.name}
              </h3>
            </motion.div>

            {/* Description professionnelle */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-2 sm:space-y-3 pt-1 sm:pt-2"
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold break-words" style={{ color: '#E0E0E0' }}>
                <span style={{ color: '#feffff', fontWeight: 'bold' }}>{t.subtitle}</span>
              </p>

              <div className="h-8 sm:h-10 flex items-center justify-center lg:justify-start overflow-visible">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg break-words flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2" style={{ color: '#E0E0E0' }}>
                  <span>{t.skills}</span>
                  <motion.span
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="font-bold whitespace-nowrap flex items-center gap-1 sm:gap-2"
                    style={{ color: '#00D4FF' }}
                  >
                    <span className="text-base sm:text-lg md:text-xl">
                      {technologies[textIndex].icon}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base">{technologies[textIndex].name}</span>
                  </motion.span>
                </p>
              </div>
            </motion.div>

            {/* Boutons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              <button
                onClick={goToContact}
                className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#00D4FF', 
                  color: '#0A0B1F',
                  boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)'
                }}
              >
                <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{language === 'fr' ? 'Me contacter' : 'Contact me'}</span>
              </button>
              
              <button
                onClick={downloadCV}
                className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: '#00D4FF',
                  border: '2px solid #00D4FF'
                }}
              >
                <FaDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{language === 'fr' ? 'Télécharger mon CV' : 'Download my CV'}</span>
              </button>
            </motion.div>
          </div>

          {/* Colonne droite - Photo et Localisation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 sm:space-y-5"
          >
            {/* Photo */}
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full blur-xl opacity-40 scale-110"
                style={{ background: 'linear-gradient(to top right, #00D4FF, #1A1B3A)' }}
              ></div>
              <img
                src={profileImage}
                alt="Johnson Rolly Andriamaherimanana"
                className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-full shadow-2xl border-4 sm:border-6 md:border-8"
                style={{ borderColor: '#00D4FF', backgroundColor: '#0A0B1F' }}
              />
              <div 
                className="absolute inset-0 rounded-full ring-1 sm:ring-2 md:ring-4 animate-pulse"
                style={{ borderColor: '#00D4FF', opacity: 0.3 }}
              ></div>
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="pl-3 sm:pl-4" style={{ borderLeft: '3px solid #00D4FF' }}>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-left" style={{ color: '#E0E0E0' }}>
                  {t.description}
                </p>
              </div>
            </div>

           {/* Localisation */}
            <div className="text-center pt-1" style={{ color: '#E0E0E0' }}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                <div className="flex items-center gap-1 sm:gap-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: '#00D4FF' }}>
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm">{t.location}</span>
                </div>
                <span style={{ color: '#00D4FF' }} className="hidden sm:inline mx-2">•</span>
                
                {/* Animation pour disponible */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(16, 185, 129, 0.4)',
                      '0 0 0 8px rgba(16, 185, 129, 0)',
                      '0 0 0 0 rgba(16, 185, 129, 0)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid #10B981'
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0
                    }}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#10B981' }}
                  />
                  <motion.span
                    animate={{
                      textShadow: [
                        '0 0 0px #10B981',
                        '0 0 5px #10B981',
                        '0 0 0px #10B981'
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0
                    }}
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: '#10B981' }}
                  >
                    {t.available}
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>        
      </div>
    </section>
  );
};

export default Hero;