import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { 
  FaJava, FaPython, FaJs, FaPhp, FaHtml5, FaCss3Alt,
  FaReact, FaNodeJs, FaLaravel, FaDatabase, FaDocker,
  FaAws, FaGitAlt, FaFigma, FaCode, FaMicrosoft
} from 'react-icons/fa';
import { 
  SiCplusplus, SiC, SiExpress, SiSpringboot,
  SiFlutter, SiNestjs, SiMongodb, SiPostgresql, 
  SiSqlite, SiFirebase, SiPostman
} from 'react-icons/si';

const Skills = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.skills : en.skills;

  const languages = [
    { name: 'Java', percentage: 60, color: '#007396' },
    { name: 'Python', percentage: 70, color: '#3776AB' },
    { name: 'C++', percentage: 65, color: '#00599C' },
    { name: 'C', percentage: 80, color: '#A8B9CC' },
    { name: 'C#', percentage: 75, color: '#239120' },
    { name: 'JavaScript', percentage: 89, color: '#F7DF1E' },
    { name: 'PHP', percentage: 60, color: '#777BB4' },
    { name: 'CSS', percentage: 90, color: '#1572B6' },
    { name: 'HTML', percentage: 85, color: '#E34F26' }
  ];

  const frameworks = language === 'fr' ? [
    'React', 'React Native', 'Node.js', 'Express.js', 'Laravel', 'Spring Boot', 'Flutter', 'NestJS'
  ] : [
    'React', 'React Native', 'Node.js', 'Express.js', 'Laravel', 'Spring Boot', 'Flutter', 'NestJS'
  ];

  const databases = language === 'fr' ? [
    'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'
  ] : [
    'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase'
  ];

  const tools = language === 'fr' ? [
    'Git & GitHub', 'Docker', 'AWS Basics', 'REST API', 'Figma', 'VS Code', 'Postman'
  ] : [
    'Git & GitHub', 'Docker', 'AWS Basics', 'REST API', 'Figma', 'VS Code', 'Postman'
  ];

  // Mappings d'icônes
  const languageIcons = {
    'Java': <FaJava />,
    'Python': <FaPython />,
    'C++': <SiCplusplus />,
    'C': <SiC />,
    'C#': <FaMicrosoft />,
    'JavaScript': <FaJs />,
    'PHP': <FaPhp />,
    'CSS': <FaCss3Alt />,
    'HTML': <FaHtml5 />
  };

  const frameworkIcons = {
    'React': <FaReact />,
    'React Native': <FaReact />,
    'Node.js': <FaNodeJs />,
    'Express.js': <SiExpress />,
    'Laravel': <FaLaravel />,
    'Spring Boot': <SiSpringboot />,
    'Flutter': <SiFlutter />,
    'NestJS': <SiNestjs />
  };

  const databaseIcons = {
    'MySQL': <FaDatabase />,
    'PostgreSQL': <SiPostgresql />,
    'MongoDB': <SiMongodb />,
    'SQLite': <SiSqlite />,
    'Firebase': <SiFirebase />
  };

  const toolIcons = {
    'Git & GitHub': <FaGitAlt />,
    'Docker': <FaDocker />,
    'AWS Basics': <FaAws />,
    'REST API': <FaCode />,
    'Figma': <FaFigma />,
    'VS Code': <FaCode />,
    'Postman': <SiPostman />
  };

  const calculateStrokeDashoffset = (percentage) => {
    const circumference = 2 * Math.PI * 45;
    return circumference - (percentage / 100) * circumference;
  };

  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden">
      {/* Même background que Hero */}
      <div className="absolute inset-0" style={{ backgroundColor: '#0A0B1F' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" style={{ backgroundColor: '#00D4FF', opacity: 0.05, borderRadius: '50%', filter: 'blur(64px)' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96" style={{ backgroundColor: '#1A1B3A', opacity: 0.1, borderRadius: '50%', filter: 'blur(64px)' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" style={{ color: '#FFFFFF' }}>
          {t.title}
        </h2>

        {/* Languages avec graphiques circulaires */}
        <div className="mb-10 md:mb-14">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-center" style={{ color: '#00D4FF' }}>
            {t.languagesTitle}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-3">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45"
                      stroke="#1A1B3A"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45"
                      stroke={lang.color}
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 45}
                      strokeDashoffset={calculateStrokeDashoffset(lang.percentage)}
                      style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-xl md:text-2xl font-bold" style={{ color: '#FFFFFF' }}>
                        {lang.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg" style={{ color: lang.color }}>
                    {languageIcons[lang.name]}
                  </span>
                  <span className="font-medium text-center" style={{ color: '#E0E0E0' }}>{lang.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Autres sections en grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Frameworks & Libraries */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#00D4FF' }}>
              <FaReact />
              {t.frameworksTitle}
            </h3>
            <div className="space-y-3">
              {frameworks.map((framework, index) => (
                <div 
                  key={index} 
                  className="p-3 rounded-lg flex items-center"
                  style={{ backgroundColor: '#1A1B3A', border: '1px solid #00D4FF' }}
                >
                  <div className="mr-3 text-lg" style={{ color: '#00D4FF' }}>
                    {frameworkIcons[framework]}
                  </div>
                  <span style={{ color: '#E0E0E0' }}>{framework}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bases de données */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#00D4FF' }}>
              <FaDatabase />
              {t.databasesTitle}
            </h3>
            <div className="space-y-3">
              {databases.map((db, index) => (
                <div 
                  key={index} 
                  className="p-3 rounded-lg flex items-center"
                  style={{ backgroundColor: '#1A1B3A', border: '1px solid #00D4FF' }}
                >
                  <div className="mr-3 text-lg" style={{ color: '#00D4FF' }}>
                    {databaseIcons[db]}
                  </div>
                  <span style={{ color: '#E0E0E0' }}>{db}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outils & Technologies */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#00D4FF' }}>
              <FaCode />
              {t.toolsTitle}
            </h3>
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="p-3 rounded-lg flex items-center"
                  style={{ backgroundColor: '#1A1B3A', border: '1px solid #00D4FF' }}
                >
                  <div className="mr-3 text-lg" style={{ color: '#00D4FF' }}>
                    {toolIcons[tool]}
                  </div>
                  <span style={{ color: '#E0E0E0' }}>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;