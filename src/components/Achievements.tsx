import { motion } from 'framer-motion';
import { ShoppingCart, Bot, Cat, Italic as Crystal, Gamepad2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Achievements = () => {
  const { t } = useLanguage();

  const achievements = [
    {
      icon: ShoppingCart,
      title: t('achievements.ecommerce.title'),
      subtitle: t('achievements.ecommerce.subtitle'),
      description: t('achievements.ecommerce.desc'),
      results: [t('achievements.ecommerce.results.1'), t('achievements.ecommerce.results.2'), t('achievements.ecommerce.results.3')],
      color: "from-blue-400 to-blue-600",
      image: "/images/ecommerce-project.svg",
      alt: "E-commerce website redesign showing modern shopping interface"
    },
    {
      icon: Bot,
      title: t('achievements.ai.title'),
      subtitle: t('achievements.ai.subtitle'),
      description: t('achievements.ai.desc'),
      results: [t('achievements.ai.results.1'), t('achievements.ai.results.2'), t('achievements.ai.results.3')],
      color: "from-purple-400 to-purple-600",
      image: "/images/ai-automation.svg",
      alt: "AI automation dashboard showing workflow optimization"
    },
    {
      icon: Cat,
      title: t('achievements.saas.title'),
      subtitle: t('achievements.saas.subtitle'),
      description: t('achievements.saas.desc'),
      results: [t('achievements.saas.results.1'), t('achievements.saas.results.2'), t('achievements.saas.results.3')],
      color: "from-pink-400 to-pink-600",
      image: "/images/saas-platform.svg",
      alt: "SaaS platform interface showing clean, simple design"
    },
    {
      icon: Crystal,
      title: t('achievements.data.title'),
      subtitle: t('achievements.data.subtitle'),
      description: t('achievements.data.desc'),
      results: [t('achievements.data.results.1'), t('achievements.data.results.2'), t('achievements.data.results.3')],
      color: "from-amber-400 to-amber-600",
      image: "/images/data-analytics.svg",
      alt: "Data analytics dashboard with charts and insights"
    },
    {
      icon: Gamepad2,
      title: t('achievements.health.title'),
      subtitle: t('achievements.health.subtitle'),
      description: t('achievements.health.desc'),
      results: [t('achievements.health.results.1'), t('achievements.health.results.2'), t('achievements.health.results.3')],
      color: "from-green-400 to-green-600",
      image: "/images/health-app.svg",
      alt: "Health app interface showing gamified fitness tracking"
    }
  ];

  return (
    <section id="achievements" className="py-32 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            {t('achievements.title')}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('achievements.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src={achievement.image}
                    alt={achievement.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient background with icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center">
                          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-emerald-400 font-medium mb-3">
                    {achievement.subtitle}
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <TrendingUp className="text-emerald-400" size={16} />
                  <span>{t('achievements.results')}</span>
                </h4>
                {achievement.results.map((result, resultIndex) => (
                  <motion.div
                    key={resultIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + resultIndex * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-slate-300">{result}</span>
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
          <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold text-white mb-4">
              {t('achievements.common.title')}
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('achievements.common.desc')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;