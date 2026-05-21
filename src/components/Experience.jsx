import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaProjectDiagram, FaCalendarAlt, FaCloud } from 'react-icons/fa';

const Experience = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.experience : en.experience;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = language === 'fr' ? [
    {
      title: 'ASSOCIATION VINA',
      role: 'Développeur Full-Stack',
      period: 'Janvier - Avril 2026',
      description: 'Développement complet d\'un site web pour l\'association VINA. Backend avec Spring Boot, frontend React Native, base de données PostgreSQL sur Supabase. Hébergement backend sur VPS Oracle Cloud et frontend sur Vercel.',
      technologies: ['Spring Boot', 'React Native', 'PostgreSQL', 'Supabase', 'Oracle Cloud', 'Vercel'],
      icon: <FaCloud />,
      color: '#10B981'
    },
    {
      title: 'PRISM SOLUTION',
      role: 'Stagiaire Développeur Mobile',
      period: 'Juin - Septembre 2025',
      description: 'Développement d\'une application de gestion de présence avec React Native/Expo, SQLite pour le stockage offline et synchronisation des données.',
      technologies: ['React Native', 'Expo', 'SQLite', 'JavaScript'],
      icon: <FaCode />,
      color: '#00D4FF'
    },
    {
      title: 'CABINET EXCELLENT',
      role: 'Stagiaire Développement Web',
      period: 'Juin - Août 2024',
      description: 'Conception UI/UX, intégration de maquettes et implémentation de fonctionnalités pour un site vitrine professionnel.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      icon: <FaProjectDiagram />,
      color: '#8B5CF6'
    }
  ] : [
    {
      title: 'ASSOCIATION VINA',
      role: 'Full-Stack Developer',
      period: 'January - April 2026',
      description: 'Complete development of a website for the VINA association. Backend with Spring Boot, frontend React Native, PostgreSQL database on Supabase. Backend hosting on Oracle Cloud VPS and frontend on Vercel.',
      technologies: ['Spring Boot', 'React Native', 'PostgreSQL', 'Supabase', 'Oracle Cloud', 'Vercel'],
      icon: <FaCloud />,
      color: '#10B981'
    },
    {
      title: 'PRISM SOLUTION',
      role: 'Mobile Developer Intern',
      period: 'June - September 2025',
      description: 'Development of an attendance management application with React Native/Expo, SQLite for offline storage and data synchronization.',
      technologies: ['React Native', 'Expo', 'SQLite', 'JavaScript'],
      icon: <FaCode />,
      color: '#00D4FF'
    },
    {
      title: 'CABINET EXCELLENT',
      role: 'Web Development Intern',
      period: 'June - August 2024',
      description: 'UI/UX design, mockup integration and feature implementation for a professional showcase website.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      icon: <FaProjectDiagram />,
      color: '#8B5CF6'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#0A0B1F' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-purple-900/5 to-transparent"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
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
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
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

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Ligne verticale centrale */}
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-[15px] md:left-1/2 top-5 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10"
                style={{ 
                  backgroundColor: exp.color,
                  boxShadow: `0 0 0 4px rgba(0, 212, 255, 0.2), 0 0 0 8px rgba(0, 212, 255, 0.1)`
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: exp.color }}
                ></motion.div>
              </div>

              {/* Contenu */}
              <div className={`ml-12 md:ml-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                  style={{ 
                    backgroundColor: 'rgba(26, 27, 58, 0.6)',
                    border: `1px solid ${exp.color}30`,
                    backdropFilter: 'blur(10px)'
                  }}
                  whileHover={{ 
                    borderColor: `${exp.color}60`,
                    boxShadow: `0 10px 40px ${exp.color}20`
                  }}
                >
                  {/* En-tête */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${exp.color}20` }}>
                        <div style={{ color: exp.color }} className="text-xl">{exp.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm" style={{ color: exp.color }}>{exp.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Période */}
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                    <FaCalendarAlt className="w-3 h-3" style={{ color: exp.color }} />
                    <span>{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}30`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note d'expérience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)' }}>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-sm text-gray-300">{t.note}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;