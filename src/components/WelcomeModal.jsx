import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaTimes, FaLaptopCode, FaSmileWink } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const WelcomeModal = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const content = {
    fr: {
      title: "Bienvenue sur mon portfolio ! 🚀",
      message: "Ce site est actuellement en cours d'amélioration.",
      excuse: "Merci de votre compréhension et bonne visite !",
      signature: "Johnson Rolly"
    },
    en: {
      title: "Welcome to my portfolio! 🚀",
      message: "This site is currently being improved.",
      excuse: "Thank you for your understanding and enjoy your visit!",
      signature: "Johnson Rolly"
    }
  };

  const t = content[language];

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-[200] max-w-sm">
        <motion.div
          initial={{ opacity: 0, x: 100, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 50 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
          style={{ 
            background: 'linear-gradient(135deg, #1A1B3A 0%, #0A0B1F 100%)',
            border: '1px solid #00D4FF'
          }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>

          <div className="p-4">
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-500/50">
                  <FaLaptopCode className="text-lg text-cyan-400" />
                </div>
              </motion.div>

              <div className="flex-1">
                <h3 className="text-sm font-bold text-white">
                  {t.title}
                </h3>
                <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                  {t.message}
                  <span className="block text-cyan-400 text-xs mt-1">
                    {t.excuse}
                  </span>
                </p>
                <div className="flex items-center gap-1 mt-2 text-xs text-cyan-400">
                  <FaSmileWink className="text-[10px]" />
                  <span>{t.signature}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-cyan-400 transition-colors bg-black/30 rounded-full w-5 h-5 flex items-center justify-center"
            >
              <FaTimes className="w-2.5 h-2.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WelcomeModal;