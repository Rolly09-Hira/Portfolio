import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaTrophy, FaCertificate, FaStar } from 'react-icons/fa';

const Formation = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.formation : en.formation;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const formations = [
    {
      id: 1,
      title: "EMIT - École de Management et d'Innovation Technologique",
      degree: { fr: "Master en SDIA (Sciences des Données et Intelligence Artificielle)", en: "Master in SDIA (Data Science and Artificial Intelligence)" },
      period: "2025 - Présent",
      description: {
        fr: "Spécialisation en Sciences des Données et Intelligence Artificielle. Formation avancée en data science, machine learning, deep learning et IA.",
        en: "Specialization in Data Science and Artificial Intelligence. Advanced training in data science, machine learning, deep learning and AI."
      },
      color: "#00D4FF",
      badge: "En cours"
    },
    {
      id: 2,
      title: "EMIT - École de Management et d'Innovation Technologique",
      degree: { fr: "Licence en Développement d'Applications Internet et Intranet", en: "Bachelor's Degree in Internet and Intranet Application Development" },
      period: "2022 - 2025",
      description: {
        fr: "Licence avec mention Bien. Développement d'applications web et mobiles, gestion de bases de données, réseaux et initiation à l'intelligence artificielle.",
        en: "Bachelor's degree with Honors. Web and mobile application development, database management, networks and introduction to artificial intelligence."
      },
      color: "#8B5CF6",
      badge: "Mention Bien"
    },
    {
      id: 3,
      title: "Lycée Ivato Aéroport",
      degree: { fr: "Baccalauréat Série C", en: "Baccalaureate Series C" },
      period: "2017",
      description: {
        fr: "Baccalauréat série scientifique.",
        en: "Scientific baccalaureate."
      },
      color: "#10B981",
      badge: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="formation" className="py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#0A0B1F' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent"></div>
      <div className="absolute top-40 left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
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
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Cartes de formation - Style moderne */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {formations.map((formation, index) => (
            <motion.div
              key={formation.id}
              variants={itemVariants}
              custom={index}
              className="group"
            >
              <div 
                className="relative rounded-2xl overflow-hidden transition-all duration-500"
                style={{ 
                  backgroundColor: 'rgba(26, 27, 58, 0.4)',
                  border: `1px solid ${formation.color}20`,
                }}
              >
                {/* Effet de fond au hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at top right, ${formation.color}15, transparent 80%)`,
                  }}
                ></div>

                <div className="relative p-6 md:p-8">
                  {/* Badge et période */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${formation.color}20`,
                          color: formation.color
                        }}
                      >
                        <FaGraduationCap className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {formation.title}
                        </h3>
                        <p className="text-sm" style={{ color: formation.color }}>
                          {formation.degree[language]}
                        </p>
                      </div>
                    </div>
                    
                    {/* Badge de mention */}
                    {formation.badge && (
                      <div 
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${formation.color}20`,
                          border: `1px solid ${formation.color}40`,
                          color: formation.color
                        }}
                      >
                        {formation.badge === "Mention Bien" ? <FaTrophy className="w-3 h-3" /> : <FaStar className="w-3 h-3" />}
                        <span>{formation.badge}</span>
                      </div>
                    )}
                  </div>

                  {/* Période */}
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: `${formation.color}10` }}>
                      <FaCalendarAlt className="w-3 h-3" style={{ color: formation.color }} />
                      <span className="text-gray-300">{formation.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed pl-2" style={{ borderLeft: `3px solid ${formation.color}` }}>
                    {formation.description[language]}
                  </p>

                  {/* Ligne décorative en bas */}
                  <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full" style={{ backgroundColor: formation.color }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Formation;