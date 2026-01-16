import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const Projects = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.projects : en.projects;

  const projects = language === 'fr' ? [
    {
      title: "Application Mobile - Gestion de Présence",
      description: "Application cross-platform développée from scratch avec React Native/Expo. Implémentation d'une solution offline complète avec SQLite pour stockage local et synchronisation des données.",
      technologies: ["React Native", "Expo", "SQLite", "JavaScript"],
      period: "Juin - Septembre 2025",
      context: "Stage - PRISM SOLUTION",
      type: "mobile"
    },
    {
      title: "Système de Gestion Immobilière",
      description: "Plateforme web complète pour la gestion de biens immobiliers avec interface administrateur et espace client. Système de réservation et gestion des contrats.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      period: "2023 - 2024",
      context: "Projet Académique - EMIT L2",
      type: "web"
    },
    {
      title: "Application de Gestion Pharmaceutique",
      description: "Application desktop Java pour la gestion complète d'une pharmacie : stock, ventes, fournisseurs, expiration des produits. Interface graphique avec Java Swing.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      period: "2023 - 2024",
      context: "Projet Académique - EMIT L2",
      type: "desktop"
    },
    {
      title: "Site Vitrine Professionnel",
      description: "Conception et développement d'un site web responsive pour cabinet professionnel. Intégration de maquettes UI/UX et implémentation des fonctionnalités frontend.",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
      period: "Juin - Août 2024",
      context: "Stage - CABINET EXCELLENT",
      type: "web"
    },
    {
      title: "Architecture Réseau Entreprise",
      description: "Modélisation et configuration d'une infrastructure réseau complète pour une entreprise moyenne. Configuration VLAN, routage inter-VLAN et sécurité réseau.",
      technologies: ["Cisco Packet Tracer", "Réseaux", "TCP/IP"],
      period: "2023 - 2024",
      context: "Projet Académique - EMIT L2",
      type: "network"
    }
  ] : [
    {
      title: "Mobile Application - Attendance Management",
      description: "Cross-platform application developed from scratch with React Native/Expo. Implementation of a complete offline solution with SQLite for local storage and data synchronization.",
      technologies: ["React Native", "Expo", "SQLite", "JavaScript"],
      period: "June - September 2025",
      context: "Internship - PRISM SOLUTION",
      type: "mobile"
    },
    {
      title: "Real Estate Management System",
      description: "Complete web platform for real estate management with admin interface and client space. Booking system and contract management.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      period: "2023 - 2024",
      context: "Academic Project - EMIT L2",
      type: "web"
    },
    {
      title: "Pharmacy Management Application",
      description: "Java desktop application for complete pharmacy management: stock, sales, suppliers, product expiration. Graphical interface with Java Swing.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      period: "2023 - 2024",
      context: "Academic Project - EMIT L2",
      type: "desktop"
    },
    {
      title: "Professional Showcase Website",
      description: "Design and development of a responsive website for a professional office. UI/UX mockup integration and frontend feature implementation.",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX"],
      period: "June - August 2024",
      context: "Internship - CABINET EXCELLENT",
      type: "web"
    },
    {
      title: "Enterprise Network Architecture",
      description: "Modeling and configuration of a complete network infrastructure for a medium-sized company. VLAN configuration, inter-VLAN routing and network security.",
      technologies: ["Cisco Packet Tracer", "Networks", "TCP/IP"],
      period: "2023 - 2024",
      context: "Academic Project - EMIT L2",
      type: "network"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      mobile: '#00D4FF',
      web: '#8B5CF6',
      desktop: '#10B981',
      network: '#F59E0B'
    };
    return colors[type] || '#00D4FF';
  };

  const getTypeLabel = (type, lang) => {
    const labels = {
      mobile: lang === 'fr' ? 'Mobile' : 'Mobile',
      web: lang === 'fr' ? 'Web' : 'Web',
      desktop: lang === 'fr' ? 'Desktop' : 'Desktop',
      network: lang === 'fr' ? 'Réseau' : 'Network'
    };
    return labels[type] || 'Project';
  };

  return (
    <section id="projects" className="py-12 md:py-16" style={{ backgroundColor: '#0A0B1F' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14" style={{ color: '#FFFFFF' }}>
          {t.title}
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: '#1A1B3A', border: '1px solid #00D4FF' }}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Left side - Main content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium" 
                        style={{ 
                          backgroundColor: getTypeColor(project.type) + '20',
                          color: getTypeColor(project.type),
                          border: `1px solid ${getTypeColor(project.type)}`
                        }}
                      >
                        {getTypeLabel(project.type, language)}
                      </span>
                      <span className="text-sm" style={{ color: '#00D4FF' }}>{project.period}</span>
                      <span className="text-sm" style={{ color: '#E0E0E0' }}>{project.context}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                      {project.title}
                    </h3>

                    <p className="mb-4" style={{ color: '#E0E0E0' }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs"
                          style={{ 
                            backgroundColor: '#0A0B1F', 
                            color: '#00D4FF', 
                            border: '1px solid #00D4FF' 
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Timeline indicator (desktop only) */}
                  <div className="hidden lg:flex items-center">
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-4 h-4 rounded-full mb-2"
                        style={{ backgroundColor: getTypeColor(project.type) }}
                      ></div>
                      {index !== projects.length - 1 && (
                        <div 
                          className="w-0.5 h-16"
                          style={{ backgroundColor: '#1A1B3A' }}
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;