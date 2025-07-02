import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'San Francisco, USA',
      rating: 5,
      text: 'Haruto transformed our complex SaaS platform into something our grandmothers could use. The user satisfaction scores went through the roof!',
      avatar: '👩‍💼'
    },
    {
      name: 'Kenji Tanaka',
      role: 'CTO, DataFlow Corp',
      company: 'Tokyo, Japan',
      rating: 5,
      text: 'His AI automation saved us 40 hours per week. Our team actually has work-life balance now. Haruto is a magician!',
      avatar: '👨‍💻'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Founder, HealthTech Solutions',
      company: 'Barcelona, Spain',
      rating: 5,
      text: 'The mobile app Haruto built for us has 4.9 stars on both app stores. Users say it\'s addictive in the best way possible.',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Michael Chen',
      role: 'VP Product, E-commerce Giant',
      company: 'Singapore',
      rating: 5,
      text: 'Our conversion rate increased by 120% after Haruto\'s redesign. He understands user psychology like no one else.',
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Park',
      role: 'Marketing Director, RetailPro',
      company: 'Seoul, South Korea',
      rating: 5,
      text: 'Working with Haruto feels like having a crystal ball. His data insights predicted trends we didn\'t even know existed.',
      avatar: '👩‍💻'
    }
  ];

  return (
    <section className="py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex space-x-6"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-96 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-emerald-400 fill-current" />
                  ))}
                </div>

                <Quote className="text-slate-600 mb-4" size={24} />

                <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-emerald-400 text-sm font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-emerald-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">5.0/5</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="text-slate-400">
              {t('testimonials.rating')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;