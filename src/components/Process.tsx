import { motion } from 'framer-motion';
import { MessageSquare, Code, Zap, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  const processSteps = [
    {
      icon: MessageSquare,
      title: t('process.discovery.title'),
      description: t('process.discovery.desc'),
      color: "from-blue-400 to-blue-600",
      emoji: "🤝"
    },
    {
      icon: Code,
      title: t('process.strategy.title'),
      description: t('process.strategy.desc'),
      color: "from-emerald-400 to-emerald-600",
      emoji: "⚡"
    },
    {
      icon: Zap,
      title: t('process.development.title'),
      description: t('process.development.desc'),
      color: "from-purple-400 to-purple-600",
      emoji: "🚀"
    },
    {
      icon: CheckCircle,
      title: t('process.launch.title'),
      description: t('process.launch.desc'),
      color: "from-orange-400 to-orange-600",
      emoji: "🎉"
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
    <section id="process" className="py-32 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl mb-4"
          >
            🎯
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            {t('process.title')}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block ml-4"
            >
              😊
            </motion.span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
              whileHover={{ y: -10 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
              >
                <step.icon className="text-white" size={32} />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                className="text-3xl mb-4"
              >
                {step.emoji}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-3xl p-8 max-w-3xl mx-auto relative overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 text-6xl opacity-20"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 text-6xl opacity-20"
            >
              🎉
            </motion.div>
            <h3 className="text-3xl font-semibold text-white mb-4">
              {t('process.cta.title')}
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block ml-2"
              >
                🚀
              </motion.span>
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {t('process.cta.desc')}
            </p>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-emerald-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-300 transition-colors shadow-lg hover:shadow-xl"
            >
              {t('process.cta.button')} 💬
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;