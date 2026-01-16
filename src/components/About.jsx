import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const About = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.about : en.about;

  const diplomas = language === 'fr' ? [
    { institution: 'EMIT', period: '2024 - 2025', description: 'Troisième année de Licence en Informatique' },
    { institution: 'Lycée Ivato Aéroport', period: '2024 - 2025', description: 'Baccalauréat Série C' }
  ] : [
    { institution: 'EMIT', period: '2024 - 2025', description: 'Third year Bachelor\'s Degree in Computer Science' },
    { institution: 'Ivato Airport High School', period: '2024 - 2025', description: 'Baccalaureate Series C' }
  ];

  const languages = language === 'fr' ? [
    { name: 'Malagasy', level: 'Langue maternelle' },
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Moyenne' },
    { name: 'Allemand', level: 'Moyenne' }
  ] : [
    { name: 'Malagasy', level: 'Native language' },
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Intermediate' },
    { name: 'German', level: 'Intermediate' }
  ];

  const experiences = language === 'fr' ? [
    { title: 'EMIT - L3 Informatique', period: '2024-2025', description: 'Développement d\'applications web et mobiles, gestion de bases de données, réseaux et initiation à l\'intelligence artificielle.' },
    { title: 'PRISM SOLUTION - Stagiaire Développeur Mobile', period: 'Juin-Sept 2025', description: 'Développement d\'une application de gestion de présence avec React Native/Expo, SQLite pour le stockage offline et synchronisation.' },
    { title: 'EMIT - L2 Informatique', period: '2023-2024', description: 'Développement full-stack : site web de gestion immobilière (PHP), application pharmacie (Java/MySQL), architecture réseau (Cisco).' },
    { title: 'CABINET EXCELLENT - Stagiaire Développement Web', period: 'Juin-Août 2024', description: 'Conception UI/UX, intégration de maquettes et implémentation de fonctionnalités pour un site vitrine professionnel.' }
  ] : [
    { title: 'EMIT - L3 Computer Science', period: '2024-2025', description: 'Web and mobile application development, database management, networks and introduction to artificial intelligence.' },
    { title: 'PRISM SOLUTION - Mobile Developer Intern', period: 'June-Sept 2025', description: 'Development of an attendance management application with React Native/Expo, SQLite for offline storage and synchronization.' },
    { title: 'EMIT - L2 Computer Science', period: '2023-2024', description: 'Full-stack development: real estate management website (PHP), pharmacy application (Java/MySQL), network architecture (Cisco).' },
    { title: 'CABINET EXCELLENT - Web Development Intern', period: 'June-Aug 2024', description: 'UI/UX design, mockup integration and feature implementation for a professional showcase website.' }
  ];

  const aptitudes = language === 'fr' ? [
    'Gestion de projet', 'Travail d\'équipe', 'Gestion du temps', 'Leadership', 'Communication efficace', 'Esprit d\'analyse'
  ] : [
    'Project Management', 'Teamwork', 'Time Management', 'Leadership', 'Effective Communication', 'Analytical Mind'
  ];

  const interests = language === 'fr' ? [
    'Jeux vidéo', 'Musique', 'Football', 'Apprentissage des langues'
  ] : [
    'Video Games', 'Music', 'Football', 'Language Learning'
  ];

  return (
    <section id="about" className="py-12 md:py-16" style={{ backgroundColor: '#0A0B1F' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" style={{ color: '#FFFFFF' }}>
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Left Column - Contact, Diplomas & Languages */}
          <div className="space-y-6">
            {/* Contact */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#00D4FF' }}>
                {t.contactTitle}
              </h3>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#1A1B3A', border: '1px solid #00D4FF' }}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#00D4FF' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm md:text-base" style={{ color: '#E0E0E0' }}>034 31 462 49 | 033 19 933 10</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#00D4FF' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base" style={{ color: '#E0E0E0' }}>Antananarivo/Fianarantsoa Madagascar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#00D4FF' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a 
                      href="mailto:rollyandriamahery911@gmail.com"
                      className="text-sm md:text-base hover:underline transition-all"
                      style={{ color: '#00D4FF' }}
                    >
                      rollyandriamahery911@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#00D4FF' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <a 
                      href="https://github.com/Rolly09-Hira" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base hover:underline transition-all"
                      style={{ color: '#00D4FF' }}
                    >
                      GitHub: Rolly09-Hira
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#00D4FF' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <a 
                      href="https://www.linkedin.com/in/rolly-andriamahery-04971a359/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base hover:underline transition-all"
                      style={{ color: '#00D4FF' }}
                    >
                      LinkedIn: Rolly Andriamahery
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#00D4FF' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 10-2 0 1 1 0 002 0zm4 0a1 1 0 10-2 0 1 1 0 002 0zm3 1a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                    <a 
                      href="https://wa.me/261331993310" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm md:text-base hover:underline transition-all"
                      style={{ color: '#00D4FF' }}
                    >
                      WhatsApp: +261 33 19 933 10
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Diplomas */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#00D4FF' }}>
                {t.diplomasTitle}
              </h3>
              <div className="space-y-3">
                {diplomas.map((diploma, index) => (
                  <div 
                    key={index} 
                    className="p-3 rounded-lg" 
                    style={{ backgroundColor: '#1A1B3A', border: '1px solid #00D4FF' }}
                  >
                    <h4 className="font-bold" style={{ color: '#FFFFFF' }}>{diploma.institution}</h4>
                    <p className="text-xs mb-1" style={{ color: '#00D4FF' }}>{diploma.period}</p>
                    <p className="text-sm" style={{ color: '#E0E0E0' }}>{diploma.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#00D4FF' }}>
                {t.languagesTitle}
              </h3>
              <div className="space-y-2">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: '#E0E0E0' }}>{lang.name}</span>
                    <span className="text-xs" style={{ color: '#00D4FF' }}>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Skills */}
          <div className="space-y-6">
            {/* Experience & Training */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4" style={{ color: '#00D4FF' }}>
                {t.experienceTitle}
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg" 
                    style={{ backgroundColor: '#1A1B3A', border: '1px solid #00D4FF' }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h4 className="font-bold text-sm md:text-base" style={{ color: '#FFFFFF' }}>{exp.title}</h4>
                      <span className="text-xs" style={{ color: '#00D4FF' }}>{exp.period}</span>
                    </div>
                    <p className="text-sm" style={{ color: '#E0E0E0' }}>{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#00D4FF' }}>
                {t.skillsTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {aptitudes.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 rounded-full text-xs md:text-sm"
                    style={{ backgroundColor: '#1A1B3A', color: '#E0E0E0', border: '1px solid #00D4FF' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3" style={{ color: '#00D4FF' }}>
                {t.interestsTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 rounded-full text-xs md:text-sm"
                    style={{ backgroundColor: '#1A1B3A', color: '#E0E0E0', border: '1px solid #00D4FF' }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;