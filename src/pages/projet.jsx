import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const Projects = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.project : en.project;

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20" style={{ backgroundColor: '#0A0B1F' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12" style={{ color: '#FFFFFF' }}>
          {t.title}
        </h2>
        <p className="text-center text-gray-400">Page en construction...</p>
      </div>
    </section>
  );
};

export default Projects;