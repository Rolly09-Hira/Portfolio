import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.footer : en.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0A0B1F' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 opacity-10" style={{ backgroundColor: '#00D4FF', borderRadius: '50%', filter: 'blur(64px)' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Section Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#00D4FF' }}>
              {t.contactTitle}
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:rollyandriamahery911@gmail.com" 
                className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <FaEnvelope className="w-5 h-5" style={{ color: '#00D4FF' }} />
                <span className="group-hover:underline">rollyandriamahery911@gmail.com</span>
              </a>
              <a 
                href="tel:+261343146249" 
                className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <FaPhone className="w-5 h-5" style={{ color: '#00D4FF' }} />
                <span className="group-hover:underline">034 31 462 49 | 033 19 933 10</span>
              </a>
            </div>
          </div>

          {/* Section Réseaux sociaux */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#00D4FF' }}>
              {t.connectTitle}
            </h3>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Rolly09-Hira"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:shadow-lg transition-all"
                style={{ backgroundColor: '#1A1B3A', color: '#00D4FF' }}
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/rolly-andriamahery-04971a359/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:shadow-lg transition-all"
                style={{ backgroundColor: '#1A1B3A', color: '#00D4FF' }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/261331993310"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:shadow-lg transition-all"
                style={{ backgroundColor: '#1A1B3A', color: '#00D4FF' }}
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Section Navigation rapide */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#00D4FF' }}>
              {t.navigationTitle}
            </h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="#hero" 
                className="text-gray-300 hover:text-white transition-colors hover:underline"
                style={{ hoverColor: '#00D4FF' }}
              >
                {t.navHome}
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white transition-colors hover:underline"
                style={{ hoverColor: '#00D4FF' }}
              >
                {t.navProjects}
              </a>
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-white transition-colors hover:underline"
                style={{ hoverColor: '#00D4FF' }}
              >
                {t.navSkills}
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-colors hover:underline"
                style={{ hoverColor: '#00D4FF' }}
              >
                {t.navAbout}
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t mb-6 pt-6" style={{ borderColor: '#1A1B3A' }}></div>

        {/* Copyright et message */}
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © {currentYear} <span style={{ color: '#00D4FF', fontWeight: 'bold' }}>Johnson Rolly Andriamaherimanana</span>. {t.copyright}
          </p>
          
          <p className="text-gray-400 text-sm mt-2">
            {t.availableMessage}
          </p>
          
          {/* Bouton Back to Top */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-6 px-6 py-2 rounded-full font-medium transition-all"
            style={{ 
              backgroundColor: '#1A1B3A',
              color: '#00D4FF',
              border: '1px solid #00D4FF'
            }}
          >
            {t.backToTop}
          </motion.button>
        </div>

        {/* Note discrète */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            {t.lastUpdate}: {new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;