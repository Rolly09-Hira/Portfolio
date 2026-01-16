import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = language === 'fr' ? fr.navbar : en.navbar;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 shadow-sm" style={{ backgroundColor: '#0A0B1F' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo avec image */}
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="text-xl font-bold hidden sm:block" style={{ color: '#FFFFFF' }}>
              Rolly Andriamahery
            </span>
          </button>
          
          {/* Menu + bouton langue */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-blue-600 transition-colors"
                style={{ color: '#E0E0E0' }}
              >
                {t.about}
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="hover:text-blue-600 transition-colors"
                style={{ color: '#E0E0E0' }}
              >
                {t.skills}
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="hover:text-blue-600 transition-colors"
                style={{ color: '#E0E0E0' }}
              >
                {t.projects}
              </button>
            </div>

            {/* Bouton de langue */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
              style={{ 
                backgroundColor: '#1A1B3A',
                color: '#00D4FF',
                border: '1px solid #00D4FF'
              }}
              title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
            >
              <span className="text-lg font-bold">
                {language === 'fr' ? 'EN' : 'FR'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;