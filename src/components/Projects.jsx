import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaServer, FaLock, FaTimes, FaPlay } from 'react-icons/fa';
import vinaImage from '../assets/vina/vina.png';
import appli1 from '../assets/appli/appli1.png';
import appli2 from '../assets/appli/appli2.png';
import appli3 from '../assets/appli/appli3.png';
import appli4 from '../assets/appli/appli4.png';
import appli5 from '../assets/appli/appli5.png';
import appli6 from '../assets/appli/appli6.png';
import esp32Image from '../assets/Iot/esp32.png';
import esp32Image2 from '../assets/Iot/esp32-1.png';
import maisonVideo from '../assets/fichier/MaisonConnecté.mp4';

const Projects = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.projects : en.projects;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef(null);

  // Bloquer le scroll du body quand la modale vidéo est ouverte
  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showVideoModal]);

  const projects = [
    {
      id: 1,
      title: "Association VINA",
      period: "Janvier - Avril 2026",
      role: { fr: "Développeur Full-Stack", en: "Full-Stack Developer" },
      description: {
        fr: "Site web complet pour l'association VINA qui œuvre pour le développement durable. Site vitrine avec gestion de contenu, formulaire de contact et système de don.",
        en: "Complete website for the VINA association which works for sustainable development. Showcase website with content management, contact form and donation system."
      },
      technologies: ["Spring Boot", "React Native", "PostgreSQL", "Supabase", "Oracle Cloud", "Vercel", "Nginx", "Cloudflared"],
      image: vinaImage,
      githubFront: "https://github.com/Rolly09-Hira/Vina",
      githubBack: "https://github.com/Rolly09-Hira/backVina",
      liveDemo: "https://vina-association.vercel.app/",
      features: {
        fr: ["Site vitrine responsive", "Gestion de contenu dynamique", "Formulaire de contact", "Système de don", "Hébergement cloud", "Déploiement continu"],
        en: ["Responsive showcase website", "Dynamic content management", "Contact form", "Donation system", "Cloud hosting", "Continuous deployment"]
      },
      type: "web"
    },
    {
      id: 2,
      title: "Application Prism Solution",
      period: "Juin - Septembre 2025",
      role: { fr: "Développeur Mobile", en: "Mobile Developer" },
      description: {
        fr: "Application mobile de gestion de présence avec synchronisation offline. Développée lors de mon stage chez PRISM SOLUTION.",
        en: "Mobile attendance management application with offline synchronization. Developed during my internship at PRISM SOLUTION."
      },
      technologies: ["React Native", "Expo", "SQLite", "JavaScript", "Expo Router"],
      images: [appli1, appli2, appli3, appli4, appli5, appli6],
      github: "https://github.com/Rolly09-Hira/appliPrism",
      loginInfo: {
        email: "admin@prisme.com",
        password: "admin123"
      },
      features: {
        fr: ["Authentification sécurisée", "Gestion des présences", "Mode hors ligne", "Synchronisation des données", "Export de rapports", "Interface intuitive"],
        en: ["Secure authentication", "Attendance management", "Offline mode", "Data synchronization", "Report export", "Intuitive interface"]
      },
      type: "mobile"
    },
    {
      id: 3,
      title: "Maison Connectée - Système Domotique IoT",
      period: "M1 - 2025",
      role: { fr: "Développeur IoT Full-Stack", en: "IoT Full-Stack Developer" },
      description: {
        fr: "Développement d'une solution domotique complète simulant une maison intelligente connectée, intégrant capteurs environnementaux, actionneurs, interface utilisateur web et communication en temps réel via WebSocket.",
        en: "Development of a complete home automation solution simulating a connected smart home, integrating environmental sensors, actuators, web user interface and real-time communication via WebSocket."
      },
      technologies: ["ESP32", "C++", "Node.js", "WebSocket", "React", "TypeScript", "Tailwind CSS", "Wokwi"],
      images: [esp32Image, esp32Image2],
      video: maisonVideo,
      github: "https://github.com/Rolly09-Hira/Iot",
      features: {
        fr: [
          "Sécurité : Clavier code PIN avec anti-intrusion",
          "Éclairage automatique selon luminosité ambiante",
          "Ventilation intelligente (auto/manual)",
          "Détection de gaz/fumée avec seuil ajustable",
          "Dashboard temps réel avec contrôles",
          "Commandes à distance (porte, alarme, ventilation)"
        ],
        en: [
          "Security: PIN keypad with anti-intrusion",
          "Automatic lighting according to ambient light",
          "Smart ventilation (auto/manual)",
          "Gas/smoke detection with adjustable threshold",
          "Real-time dashboard with controls",
          "Remote controls (door, alarm, ventilation)"
        ]
      },
      architecture: {
        fr: "ESP32 (simulé sur Wokwi) ←→ Node.js Gateway (WebSocket) ←→ React Frontend",
        en: "ESP32 (simulated on Wokwi) ←→ Node.js Gateway (WebSocket) ←→ React Frontend"
      },
      type: "iot"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-12 md:py-20 relative overflow-hidden scroll-mt-20" style={{ backgroundColor: '#0A0B1F' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
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

        {/* Grille des projets */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: 'rgba(26, 27, 58, 0.4)',
                border: '1px solid rgba(0, 212, 255, 0.2)'
              }}
            >
              <div className={`grid ${project.type === 'mobile' ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-6`}>
                {/* Images pour projet mobile */}
                {project.type === 'mobile' && project.images && (
                  <div className="p-6">
                    <div className="flex justify-center gap-4 flex-wrap">
                      {project.images.map((img, idx) => (
                        <div key={idx} className="relative">
                          <div className="w-32 h-64 md:w-40 md:h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-cyan-500/30">
                            <img
                              src={img}
                              alt={`${project.title} screenshot ${idx + 1}`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Images pour projet IoT */}
                {project.type === 'iot' && project.images && (
                  <div className="p-6">
                    <div className="flex justify-center gap-4 flex-wrap">
                      {project.images.map((img, idx) => (
                        <div key={idx} className="relative">
                          <div className="w-64 h-48 md:w-80 md:h-56 rounded-xl overflow-hidden shadow-xl border-2 border-cyan-500/30">
                            <img
                              src={img}
                              alt={`${project.title} screenshot ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                      {project.video && (
                        <div
                          className="relative cursor-pointer group"
                          onClick={() => setShowVideoModal(true)}
                        >
                          <div className="w-64 h-48 md:w-80 md:h-56 rounded-xl overflow-hidden shadow-xl border-2 border-cyan-500/30 bg-black flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                                <FaPlay className="text-cyan-400 text-2xl ml-1" />
                              </div>
                              <span className="text-white text-sm">Vidéo de démonstration</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Image pour projet web */}
                {project.type === 'web' && (
                  <div className="relative overflow-hidden group h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                )}

                {/* Contenu */}
                <div className="p-6 md:p-8">
                  {/* Période */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <FaCalendarAlt className="w-3 h-3 text-cyan-400" />
                    <span>{project.period}</span>
                  </div>

                  {/* Architecture pour IoT */}
                  {project.architecture && (
                    <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: '#00D4FF10', border: '1px solid #00D4FF30' }}>
                      <p className="text-xs font-mono text-cyan-400">
                        {project.architecture[language]}
                      </p>
                    </div>
                  )}

                  {/* Titre */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
                    {project.title}
                  </h3>

                  {/* Rôle */}
                  <p className="text-cyan-400 text-sm mb-4">
                    {language === 'fr' ? project.role.fr : project.role.en}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                    {language === 'fr' ? project.description.fr : project.description.en}
                  </p>

                  {/* Fonctionnalités */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#00D4FF' }}>
                      {language === 'fr' ? 'Fonctionnalités clés :' : 'Key features:'}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {(language === 'fr' ? project.features.fr : project.features.en).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: '#00D4FF10',
                            color: '#00D4FF',
                            border: '1px solid #00D4FF30'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Liens */}
                  <div className="flex flex-wrap gap-4">
                    {project.githubFront && (
                      <a
                        href={project.githubFront}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: '#1A1B3A',
                          color: '#00D4FF',
                          border: '1px solid #00D4FF'
                        }}
                      >
                        <FaGithub />
                        <span>{language === 'fr' ? 'Frontend' : 'Frontend'}</span>
                      </a>
                    )}
                    
                    {project.githubBack && (
                      <a
                        href={project.githubBack}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: '#1A1B3A',
                          color: '#00D4FF',
                          border: '1px solid #00D4FF'
                        }}
                      >
                        <FaServer />
                        <span>{language === 'fr' ? 'Backend' : 'Backend'}</span>
                      </a>
                    )}
                    
                    {project.github && !project.githubFront && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: '#1A1B3A',
                          color: '#00D4FF',
                          border: '1px solid #00D4FF'
                        }}
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                    
                    {project.loginInfo && (
                      <button
                        onClick={() => setShowLoginModal(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: '#10B981',
                          color: '#FFFFFF'
                        }}
                      >
                        <FaLock />
                        <span>{language === 'fr' ? 'Tester' : 'Try it'}</span>
                      </button>
                    )}
                    
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: '#00D4FF',
                          color: '#0A0B1F'
                        }}
                      >
                        <FaExternalLinkAlt />
                        <span>{language === 'fr' ? 'Voir le site' : 'View site'}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Login */}
        {showLoginModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="rounded-2xl p-6 max-w-md w-full"
              style={{ backgroundColor: '#1A1B3A', border: '1px solid #00D4FF' }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: '#00D4FF' }}>
                {language === 'fr' ? 'Informations de connexion' : 'Login information'}
              </h3>
              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#0A0B1F' }}>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-mono">admin@prisme.com</p>
                </div>
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#0A0B1F' }}>
                  <p className="text-sm text-gray-400">{language === 'fr' ? 'Mot de passe' : 'Password'}</p>
                  <p className="text-white font-mono">admin123</p>
                </div>
              </div>
              <button
                onClick={() => setShowLoginModal(false)}
                className="w-full py-2 rounded-lg font-medium transition-all"
                style={{ backgroundColor: '#00D4FF', color: '#0A0B1F' }}
              >
                {language === 'fr' ? 'Fermer' : 'Close'}
              </button>
            </motion.div>
          </div>
        )}

        {/* Modal Vidéo - avec bouton de fermeture en bas à droite */}
        {showVideoModal && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowVideoModal(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              }
            }}
          >
            <div className="relative max-w-4xl w-full">
              <video
                ref={videoRef}
                src={maisonVideo}
                controls
                autoPlay
                className="w-full rounded-2xl shadow-2xl"
                controlsList="nodownload"
              />
              {/* Bouton de fermeture en bas à droite */}
              <button
                onClick={() => {
                  setShowVideoModal(false);
                  if (videoRef.current) {
                    videoRef.current.pause();
                  }
                }}
                className="absolute -bottom-12 left-0 text-white text-sm hover:text-cyan-400 transition-colors z-20 cursor-pointer bg-black/50 rounded-full px-4 py-2 flex items-center gap-2"
              >
                <FaTimes />
                <span>Fermer</span>
              </button>
            </div>
          </div>
        )}

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
                ? "Plus de projets à venir..."
                : "More projects coming soon..."}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;