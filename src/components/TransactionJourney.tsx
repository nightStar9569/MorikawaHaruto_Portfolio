import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TransactionJourney = () => {
  const { t } = useLanguage();
  const journeySteps = [
    {
      location: t('journey.delhi.location'),
      action: t('journey.delhi.action'),
      amount: '₹250',
      flag: '🇮🇳',
      icon: '🚕'
    },
    {
      location: t('journey.london.location'),
      action: t('journey.london.action'),
      amount: '£8.50',
      flag: '🇬🇧',
      icon: '☕'
    },
    {
      location: t('journey.ny.location'),
      action: t('journey.ny.action'),
      amount: '$25.00',
      flag: '🇺🇸',
      icon: '🚇'
    },
    {
      location: t('journey.tokyo.location'),
      action: t('journey.tokyo.action'),
      amount: '¥4,500',
      flag: '🇯🇵',
      icon: '🍜'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl mb-6"
          >
            🌍
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            {t('journey.title').split(' ').map((word, i, arr) =>
              word === 'everywhere' || word === 'どこでも' ? (
                <span key={i} className="text-lime-400 font-medium">{word}{i < arr.length - 1 ? ' ' : ''}</span>
              ) : (
                word + (i < arr.length - 1 ? ' ' : '')
              )
            )}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block ml-4"
            >
              ✨
            </motion.span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('journey.subtitle')}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Journey Path */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-400 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Node */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-lime-400 rounded-full border-4 border-slate-900 z-10 hidden lg:block" />

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className="text-4xl mb-4"
                  >
                    {step.icon}
                  </motion.div>

                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <MapPin className="text-slate-400" size={16} />
                    <span className="text-slate-400 text-sm">{step.location}</span>
                    <motion.span
                      className="text-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {step.flag}
                    </motion.span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.action}
                  </h3>

                  <motion.div
                    className="text-2xl font-bold text-lime-400 mb-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {step.amount}
                  </motion.div>

                  <div className="flex items-center justify-center space-x-2 text-emerald-400">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <CheckCircle size={16} />
                    </motion.div>
                    <span className="text-sm">{t('journey.paidInstantly')}</span>
                  </div>
                </motion.div>

                {/* Mobile Arrow */}
                {index < journeySteps.length - 1 && (
                  <motion.div
                    className="flex justify-center my-6 lg:hidden"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="text-slate-400" size={24} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 text-4xl opacity-20"
            >
              💰
            </motion.div>
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 text-4xl opacity-20"
            >
              🚀
            </motion.div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('journey.realRatesTitle')}
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block ml-2"
              >
                ⚡
              </motion.span>
            </h3>
            <p className="text-slate-400 mb-6">
              {t('journey.realRatesDesc')}
            </p>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-lime-300 transition-colors shadow-lg hover:shadow-xl"
            >
              {t('journey.cta')} 💬
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransactionJourney;