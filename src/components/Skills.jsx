import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs,
  FaJava, FaPython, FaDatabase, FaDocker,
  FaAws, FaGitAlt, FaFigma, FaCode, FaServer,
  FaMobileAlt, FaCloud, FaTools
} from 'react-icons/fa';
import { 
  SiTypescript, SiExpress, SiSpringboot,
  SiFlutter, SiNestjs, SiMongodb, SiPostgresql, 
  SiSqlite, SiFirebase, SiPostman, SiTrello,
  SiNginx, SiCloudflare
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const Skills = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.skills : en.skills;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = language === 'fr' ? [
    {
      title: "Frontend",
      icon: <FaReact className="text-2xl" />,
      color: "#00D4FF",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <FaMobileAlt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-2xl" />,
      color: "#8B5CF6",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "NestJS", icon: <SiNestjs /> }
      ]
    },
    {
      title: "Base de Données",
      icon: <FaDatabase className="text-2xl" />,
      color: "#10B981",
      skills: [
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Firebase", icon: <SiFirebase /> }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud className="text-2xl" />,
      color: "#F59E0B",
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS Basics", icon: <FaAws /> },
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "CI/CD", icon: <FaCode /> },
        { name: "Nginx", icon: <SiNginx /> },
        { name: "Cloudflared", icon: <SiCloudflare /> }
      ]
    },
    {
      title: "Outils",
      icon: <FaTools className="text-2xl" />,
      color: "#EC4899",
      skills: [
        { name: "VS Code", icon: <VscCode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Trello", icon: <SiTrello /> }
      ]
    }
  ] : [
    {
      title: "Frontend",
      icon: <FaReact className="text-2xl" />,
      color: "#00D4FF",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "React Native", icon: <FaMobileAlt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer className="text-2xl" />,
      color: "#8B5CF6",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "NestJS", icon: <SiNestjs /> }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-2xl" />,
      color: "#10B981",
      skills: [
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Firebase", icon: <SiFirebase /> }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <FaCloud className="text-2xl" />,
      color: "#F59E0B",
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS Basics", icon: <FaAws /> },
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "CI/CD", icon: <FaCode /> },
        { name: "Nginx", icon: <SiNginx /> },
        { name: "Cloudflared", icon: <SiCloudflare /> }
      ]
    },
    {
      title: "Tools",
      icon: <FaTools className="text-2xl" />,
      color: "#EC4899",
      skills: [
        { name: "VS Code", icon: <VscCode /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Trello", icon: <SiTrello /> }
      ]
    }
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
    <section id="skills" className="py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#0A0B1F' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Grille des compétences */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              className="rounded-2xl overflow-hidden"
              style={{ 
                backgroundColor: 'rgba(26, 27, 58, 0.4)',
                border: `1px solid ${category.color}30`
              }}
            >
              {/* En-tête de catégorie */}
              <div className="p-4 text-center" style={{ backgroundColor: `${category.color}15` }}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div style={{ color: category.color }}>{category.icon}</div>
                  <h3 className="text-lg font-bold" style={{ color: category.color }}>
                    {category.title}
                  </h3>
                </div>
                <div className="w-full h-0.5 rounded-full" style={{ backgroundColor: `${category.color}30` }}></div>
              </div>

              {/* Liste des compétences */}
              <div className="p-4 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group cursor-pointer flex items-center gap-3 p-2 rounded-lg transition-all"
                    whileHover={{ scale: 1.02, x: 3, backgroundColor: `${category.color}10` }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-lg" style={{ color: category.color }}>
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note de bas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)' }}>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-sm text-gray-300">
              {language === 'fr' 
                ? "⭐ 23+ technologies maîtrisées • En constante évolution"
                : "⭐ 23+ technologies mastered • Constantly evolving"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;