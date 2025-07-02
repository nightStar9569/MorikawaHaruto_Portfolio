import { Code2, Heart, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <Code2 className="text-slate-900" size={20} />
            </div>
            <span className="text-white font-bold text-xl">{t('brand.name')}</span>
          </div>

          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            {t('footer.tagline')}
          </p>

          <div className="flex items-center justify-center space-x-2 text-slate-400 text-sm">
            <span>{t('footer.madeWith')}</span>
            <Heart className="text-red-400" size={16} />
            <span>{t('footer.and')}</span>
            <Coffee className="text-amber-400" size={16} />
            <span>{t('footer.in')}</span>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm">
              <div>
                {t('footer.copyright')}
              </div>
              <div className="mt-4 md:mt-0">
                {t('footer.available')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;