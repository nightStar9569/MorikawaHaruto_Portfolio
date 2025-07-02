import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const timeline = [
    {
      year: '1995',
      title: t('about.timeline.1995.title'),
      description: t('about.timeline.1995.desc'),
      icon: Heart
    },
    {
      year: '2014-2018',
      title: t('about.timeline.2014.title'),
      description: t('about.timeline.2014.desc'),
      icon: GraduationCap
    },
    {
      year: '2018-2022',
      title: t('about.timeline.2018.title'),
      description: t('about.timeline.2018.desc'),
      icon: Briefcase
    },
    {
      year: '2022-Present',
      title: t('about.timeline.2022.title'),
      description: t('about.timeline.2022.desc'),
      icon: Coffee
    }
  ];

  return (
    <section id="about" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            {t('about.title').split(' ').map((word, i, arr) =>
              word === 'journey' || word === '歩み' ? (
                <span key={i} className="text-emerald-400 font-medium">{word}{i < arr.length - 1 ? ' ' : ''}</span>
              ) : (
                word + (i < arr.length - 1 ? ' ' : '')
              )
            )}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="text-emerald-400 font-bold text-lg mb-2">
                  {item.year}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-emerald-400/10 border-2 border-emerald-400 rounded-full flex items-center justify-center"
                >
                  <item.icon className="text-emerald-400" size={24} />
                </motion.div>
                {index < timeline.length - 1 && (
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-slate-700" />
                )}
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('about.philosophy.title')}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('about.philosophy.desc')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;