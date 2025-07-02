import { motion } from 'framer-motion';
import { Code, Palette, Database, Brain, Smartphone, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      icon: Code,
      title: t('skills.frontend'),
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Database,
      title: t('skills.backend'),
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Palette,
      title: t('skills.design'),
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Brain,
      title: t('skills.ai'),
      skills: ['Machine Learning', 'Data Analysis', 'Python', 'TensorFlow', 'Pandas', 'Visualization'],
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: Smartphone,
      title: t('skills.mobile'),
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'App Store Optimization', 'Push Notifications'],
      color: 'from-indigo-400 to-purple-400'
    },
    {
      icon: Globe,
      title: t('skills.devops'),
      skills: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Monitoring', 'Performance Optimization'],
      color: 'from-teal-400 to-blue-400'
    }
  ];

  return (
    <section id="skills" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            {t('skills.title').split(' ').map((word, i, arr) =>
              word === 'toolkit' || word === 'ツールキット' ? (
                <span key={i} className="text-emerald-400 font-medium">{word}{i < arr.length - 1 ? ' ' : ''}</span>
              ) : (
                word + (i < arr.length - 1 ? ' ' : '')
              )
            )}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/70 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl mb-6`}
              >
                <category.icon className="text-white" size={24} />
              </motion.div>

              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="bg-slate-700/50 text-slate-300 px-3 py-2 rounded-lg text-sm text-center hover:bg-slate-700 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-white mb-6">
              {t('skills.learning.title')}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {t('skills.learning.desc')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AI/ML', 'Web3', 'AR/VR', 'IoT', 'Blockchain', 'Quantum Computing'].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;