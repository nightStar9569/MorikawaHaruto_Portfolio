import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, MapPin, Send, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-white">
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
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl mb-6"
          >
            🎉
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            {t('contact.title')}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block ml-4"
            >
              ✨
            </motion.span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 relative overflow-hidden">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 text-4xl opacity-10"
              >
                💌
              </motion.div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-6">
                {t('contact.getInTouch')}
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block ml-2"
                >
                  👋
                </motion.span>
              </h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Mail className="text-emerald-500" size={20} />
                  </motion.div>
                  <div>
                    <div className="text-gray-900 font-medium">{t('contact.email')}</div>
                    <div className="text-gray-500">sunrise9569@gmail.com</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin className="text-emerald-500" size={20} />
                  </motion.div>
                  <div>
                    <div className="text-gray-900 font-medium">{t('contact.location')}</div>
                    <div className="text-gray-500">{t('hero.location')}</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Calendar className="text-emerald-500" size={20} />
                  </motion.div>
                  <div>
                    <div className="text-gray-900 font-medium">{t('contact.availability')}</div>
                    <div className="text-gray-500">{t('contact.availableText')}</div>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Coffee className="text-emerald-500" size={24} />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {t('contact.coffee.title')}
                </h4>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl"
                >
                  ☕
                </motion.span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('contact.coffee.desc')}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-3xl p-8 relative overflow-hidden">
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 text-4xl opacity-10"
              >
                📝
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('contact.form.title')}
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block ml-2"
                >
                  💡
                </motion.span>
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-900 p-4 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-900 p-4 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">
                      {t('contact.form.project')}
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-900 p-4 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">{t('contact.form.selectProject')}</option>
                      <option value="web-app">{t('contact.form.webApp')}</option>
                      <option value="mobile-app">{t('contact.form.mobileApp')}</option>
                      <option value="ui-ux">{t('contact.form.uiUx')}</option>
                      <option value="data-analysis">{t('contact.form.dataAnalysis')}</option>
                      <option value="automation">{t('contact.form.automation')}</option>
                      <option value="consulting">{t('contact.form.consulting')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-2">
                      {t('contact.form.budget')}
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white text-gray-900 p-4 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">{t('contact.form.selectBudget')}</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-white text-gray-900 p-4 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                    required
                  />
                </div>
                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, rotate: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-emerald-400 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    <span>{t('contact.form.send')}</span>
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ✨
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 text-4xl opacity-10"
            >
              ⚡
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('contact.guarantee.title')}
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block ml-2"
              >
                🚀
              </motion.span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {t('contact.guarantee.desc')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;