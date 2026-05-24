import { useLanguage } from '../contexts/LanguageContext';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const { language } = useLanguage();
  const t = language === 'fr' ? fr.contact : en.contact;
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "rollyandriamahery911@gmail.com",
      link: "mailto:rollyandriamahery911@gmail.com",
      color: "#00D4FF"
    },
    {
      icon: <FaPhone />,
      label: "Téléphone",
      value: "+261 34 31 462 49 | +261 33 19 933 10",
      link: "tel:+261343146249",
      color: "#10B981"
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+261 33 19 933 10",
      link: "https://wa.me/261331993310",
      color: "#25D366"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "Rolly09-Hira",
      link: "https://github.com/Rolly09-Hira",
      color: "#FFFFFF"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Rolly Andriamahery",
      link: "https://www.linkedin.com/in/rolly-andriamahery-04971a359/",
      color: "#0077B5"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: language === 'fr' ? "Localisation" : "Location",
      value: "Antananarivo/Fianarantsoa, Madagascar",
      link: null,
      color: "#F59E0B"
    }
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: '#0A0B1F' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Bouton retour */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            backgroundColor: '#1A1B3A',
            color: '#00D4FF',
            border: '1px solid #00D4FF'
          }}
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>{language === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}</span>
        </motion.button>

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Grille des contacts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl p-6 transition-all duration-300 cursor-pointer group"
                  style={{
                    backgroundColor: 'rgba(26, 27, 58, 0.6)',
                    border: `1px solid ${contact.color}40`,
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${contact.color}20`;
                    e.currentTarget.style.borderColor = contact.color;
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(26, 27, 58, 0.6)';
                    e.currentTarget.style.borderColor = `${contact.color}40`;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-2xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${contact.color}20`,
                        color: contact.color
                      }}
                    >
                      {contact.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 transition-all duration-300 group-hover:tracking-wider" style={{ color: contact.color }}>
                      {contact.label}
                    </h3>
                    <p className="text-gray-300 text-sm break-all transition-all duration-300 group-hover:text-white">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  className="rounded-2xl p-6 transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(26, 27, 58, 0.6)',
                    border: `1px solid ${contact.color}40`,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-2xl"
                      style={{
                        backgroundColor: `${contact.color}20`,
                        color: contact.color
                      }}
                    >
                      {contact.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: contact.color }}>
                      {contact.label}
                    </h3>
                    <p className="text-gray-300 text-sm">{contact.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Message de disponibilité */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)' }}>
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-sm text-gray-300">
              {language === 'fr' 
                ? " Disponible 24h/24 - Réponse sous 24h"
                : " Available 24/7 - Response within 24h"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;