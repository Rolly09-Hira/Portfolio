import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaPhone, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp,
  FaLanguage, FaLightbulb, FaHeart, FaCode, FaUsers, FaClock
} from 'react-icons/fa';

const About = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.about : en.about;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const languagesList = language === 'fr' ? [
    { name: 'Malagasy', level: 'Langue maternelle', percentage: 100 },
    { name: 'Français', level: 'Courant', percentage: 85 },
    { name: 'Anglais', level: 'Moyenne', percentage: 60 },
    { name: 'Allemand', level: 'Moyenne', percentage: 55 }
  ] : [
    { name: 'Malagasy', level: 'Native language', percentage: 100 },
    { name: 'French', level: 'Fluent', percentage: 85 },
    { name: 'English', level: 'Intermediate', percentage: 60 },
    { name: 'German', level: 'Intermediate', percentage: 55 }
  ];

  const aptitudes = language === 'fr' ? [
    { name: 'Gestion de projet', icon: <FaUsers />, color: '#00D4FF' },
    { name: 'Travail d\'équipe', icon: <FaUsers />, color: '#8B5CF6' },
    { name: 'Gestion du temps', icon: <FaClock />, color: '#EC4899' },
    { name: 'Leadership', icon: <FaLightbulb />, color: '#F59E0B' },
    { name: 'Communication efficace', icon: <FaUsers />, color: '#10B981' },
    { name: 'Esprit d\'analyse', icon: <FaCode />, color: '#EF4444' }
  ] : [
    { name: 'Project Management', icon: <FaUsers />, color: '#00D4FF' },
    { name: 'Teamwork', icon: <FaUsers />, color: '#8B5CF6' },
    { name: 'Time Management', icon: <FaClock />, color: '#EC4899' },
    { name: 'Leadership', icon: <FaLightbulb />, color: '#F59E0B' },
    { name: 'Effective Communication', icon: <FaUsers />, color: '#10B981' },
    { name: 'Analytical Mind', icon: <FaCode />, color: '#EF4444' }
  ];

  const interests = language === 'fr' ? [
    '🎮 Jeux vidéo', '🎵 Musique', '⚽ Football', '🌍 Apprentissage des langues'
  ] : [
    '🎮 Video Games', '🎵 Music', '⚽ Football', '🌍 Language Learning'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#0A0B1F' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 rounded-full bg-cyan-500"
            ></motion.div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Column - Contact */}
          <div className="space-y-6">
            {/* Contact Card with Glassmorphism */}
            <motion.div variants={itemVariants} className="group">
              <div className="p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] relative overflow-hidden"
                style={{ 
                  backgroundColor: 'rgba(26, 27, 58, 0.6)',
                  border: '1px solid rgba(0, 212, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#00D4FF' }}>
                  <FaPhone /> {t.contactTitle}
                </h3>
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                    <FaPhone className="w-4 h-4 text-cyan-400" />
                    <span>034 31 462 49 | 033 19 933 10</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaMapMarkerAlt className="w-4 h-4 text-cyan-400" />
                    <span>Antananarivo/Fianarantsoa Madagascar</span>
                  </div>
                  <a href="mailto:rollyandriamahery911@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group">
                    <FaEnvelope className="w-4 h-4 text-cyan-400" />
                    <span className="group-hover:underline">rollyandriamahery911@gmail.com</span>
                  </a>
                  <div className="flex gap-4 pt-2">
                    <a href="https://github.com/Rolly09-Hira" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/rolly-andriamahery-04971a359/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all hover:scale-110">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="https://wa.me/261331993310" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-all hover:scale-110">
                      <FaWhatsapp className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Languages with Progress Bars */}
            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(26, 27, 58, 0.4)', border: '1px solid rgba(0, 212, 255, 0.15)' }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#00D4FF' }}>
                  <FaLanguage /> {t.languagesTitle}
                </h3>
                <div className="space-y-3">
                  {languagesList.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{lang.name}</span>
                        <span className="text-cyan-400">{lang.level}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(0, 212, 255, 0.2)' }}>
                        <motion.div 
                          className="h-full rounded-full"
                          style={{ width: `${lang.percentage}%`, backgroundColor: '#00D4FF' }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${lang.percentage}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills & Interests */}
          <div className="space-y-6">
            {/* Skills Grid */}
            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(26, 27, 58, 0.4)', border: '1px solid rgba(0, 212, 255, 0.15)' }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#00D4FF' }}>
                  <FaCode /> {t.skillsTitle}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {aptitudes.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="p-3 rounded-xl flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
                      style={{ backgroundColor: `${skill.color}15`, border: `1px solid ${skill.color}40` }}
                      whileHover={{ backgroundColor: `${skill.color}25` }}
                    >
                      <div style={{ color: skill.color }}>{skill.icon}</div>
                      <span className="text-sm text-gray-200">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants}>
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(26, 27, 58, 0.4)', border: '1px solid rgba(0, 212, 255, 0.15)' }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#00D4FF' }}>
                  <FaHeart /> {t.interestsTitle}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 rounded-full cursor-pointer transition-all hover:scale-105"
                      style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)' }}
                      whileHover={{ backgroundColor: 'rgba(0, 212, 255, 0.2)' }}
                    >
                      <span className="text-sm text-gray-200">{interest}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;