import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

type TranslationMap = { [key: string]: string };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: { en: TranslationMap; ja: TranslationMap } = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.achievements': 'Achievements',
    'nav.skills': 'Skills',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.workTogether': "Let's Work Together",

    // Hero
    'hero.available': 'Available for new projects',
    'hero.title': 'I create digital magic that makes people smile',
    'hero.subtitle': 'Full-stack developer & UI/UX designer from Sapporo who turns complex problems into simple, delightful solutions. Let\'s build something amazing together.',
    'hero.seeWork': 'See My Work',
    'hero.letsTalk': "Let's Talk",
    'hero.trusted': 'Trusted by startups and enterprises worldwide',
    'hero.location': 'Sapporo',
    'hero.experience': '6+ Years',
    'hero.experienceSub': 'Experience',

    // About
    'about.title': 'My journey',
    'about.subtitle': 'From a curious student in Hokkaido to a freelance developer creating digital experiences that bring joy to users worldwide.',
    'about.timeline.1995.title': 'Born in Sapporo',
    'about.timeline.1995.desc': 'Started my journey in the beautiful city of Sapporo, Hokkaido',
    'about.timeline.2014.title': 'Hokkaido University',
    'about.timeline.2014.desc': 'Computer Science & Engineering - Specialized in AI, Data Analysis & Software Development',
    'about.timeline.2018.title': 'Corporate Experience',
    'about.timeline.2018.desc': 'Full-stack development at major IT company - From requirements to deployment',
    'about.timeline.2022.title': 'Freelance Journey',
    'about.timeline.2022.desc': 'Independent developer creating solutions that make people smile worldwide',
    'about.philosophy.title': 'My Philosophy',
    'about.philosophy.desc': '"Technology is a tool, smiles are the goal." I believe in creating digital experiences that not only solve problems but bring genuine joy to the people who use them.',

    // Achievements
    'achievements.title': 'Project highlights',
    'achievements.subtitle': 'Real projects, real results, real smiles. Here\'s how I\'ve helped clients achieve their goals while making users genuinely happy.',
    'achievements.ecommerce.title': "World's Kindest E-commerce Redesign",
    'achievements.ecommerce.subtitle': 'Even my mom can shop here!',
    'achievements.ecommerce.desc': 'Complete UI/UX overhaul of major e-commerce site with \'grandmother-friendly\' design philosophy',
    'achievements.ai.title': 'AI-Powered Smile Recovery Project',
    'achievements.ai.subtitle': 'Rescued employees from monthly hell',
    'achievements.ai.desc': 'Python & AI automation system that eliminated 3-day document processing nightmare',
    'achievements.saas.title': 'Cat-Friendly SaaS Launch',
    'achievements.saas.subtitle': 'So simple, even cats could use it',
    'achievements.saas.desc': 'Full-stack SaaS development with ultimate simplicity as core principle',
    'achievements.data.title': 'Fortune-Telling Data Analytics',
    'achievements.data.subtitle': 'Predicting the future with data magic',
    'achievements.data.desc': 'Multi-dimensional retail data analysis revealing hidden customer behavior patterns',
    'achievements.health.title': 'RPG-Style Health App',
    'achievements.health.subtitle': 'Level up your fitness game',
    'achievements.health.desc': 'Gamified mobile health app with real-world penalties and team boss battles',
    'achievements.common.title': 'The Common Thread',
    'achievements.common.desc': 'Every project shares the same DNA: making users think "This is fun!", "This is easy!", and "I want to use this again!" Technology should serve humanity with a smile, not the other way around.',
    'achievements.results': 'Results',
    'achievements.ecommerce.results.1': '120% sales increase',
    'achievements.ecommerce.results.2': 'Zero confusion complaints',
    'achievements.ecommerce.results.3': 'Happy shopping accidents nationwide',
    'achievements.ai.results.1': 'Zero overtime culture',
    'achievements.ai.results.2': 'Instant error detection',
    'achievements.ai.results.3': 'Beer-at-5pm lifestyle achieved',
    'achievements.saas.results.1': '70% lower churn rate',
    'achievements.saas.results.2': 'Sky-high satisfaction',
    'achievements.saas.results.3': 'Love letters from clients',
    'achievements.data.results.1': 'Rainy day curry predictions',
    'achievements.data.results.2': 'Friday beer → Monday veggie juice insights',
    'achievements.data.results.3': 'Crystal ball reputation',
    'achievements.health.results.1': 'First-time morning runners',
    'achievements.health.results.2': 'Fried chicken abstinence records',
    'achievements.health.results.3': 'Competitive walking addiction',

    // Skills
    'skills.title': 'My toolkit',
    'skills.subtitle': 'A comprehensive arsenal of modern technologies and methodologies to bring your vision to life, from concept to deployment.',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.design': 'UI/UX Design',
    'skills.ai': 'AI & Data Science',
    'skills.mobile': 'Mobile Development',
    'skills.devops': 'DevOps & Cloud',
    'skills.learning.title': 'Always Learning, Always Growing',
    'skills.learning.desc': 'Technology evolves rapidly, and so do I. I\'m constantly exploring new tools, frameworks, and methodologies to ensure I can offer the best solutions for every project.',

    // Process
    'process.title': 'How we\'ll work together',
    'process.subtitle': 'A proven process that ensures your project not only meets expectations but exceeds them. Transparency, communication, and quality at every step.',
    'process.discovery.title': 'Discovery & Understanding',
    'process.discovery.desc': 'We start with a deep conversation about your vision, goals, and challenges. I listen carefully to understand not just what you want, but why you want it.',
    'process.strategy.title': 'Strategy & Design',
    'process.strategy.desc': 'I craft a comprehensive strategy and create intuitive designs that prioritize user experience. Every pixel serves a purpose, every interaction brings joy.',
    'process.development.title': 'Development & Testing',
    'process.development.desc': 'Clean, efficient code meets rigorous testing. I build with scalability in mind and ensure everything works flawlessly across all devices and browsers.',
    'process.launch.title': 'Launch & Optimization',
    'process.launch.desc': 'Smooth deployment with comprehensive monitoring. I stick around to ensure everything runs perfectly and make optimizations based on real user data.',
    'process.partnership.title': 'Ongoing Partnership',
    'process.partnership.desc': 'Your success is my success. I provide ongoing support, maintenance, and feature enhancements to help your project grow and evolve.',
    'process.cta.title': 'Ready to Start Your Project?',
    'process.cta.desc': 'Every great project starts with a conversation. Let\'s discuss your vision and see how we can bring it to life together.',
    'process.cta.button': 'Let\'s Talk About Your Project',

    // Contact
    'contact.title': 'Let\'s create something amazing',
    'contact.subtitle': 'Ready to turn your vision into reality? I\'d love to hear about your project and discuss how we can work together to create something extraordinary.',
    'contact.getInTouch': 'Get in Touch',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.availability': 'Availability',
    'contact.availableText': 'Available for new projects',
    'contact.coffee.title': 'Coffee Chat?',
    'contact.coffee.desc': 'Prefer a casual conversation? I\'m always up for a virtual coffee chat to discuss your ideas, challenges, or just to say hello!',
    'contact.form.title': 'Tell me about your project',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.project': 'Project Type',
    'contact.form.budget': 'Budget Range',
    'contact.form.message': 'Project Details',
    'contact.form.messagePlaceholder': 'Tell me about your project, goals, timeline, and any specific requirements...',
    'contact.form.send': 'Send Message',
    'contact.guarantee.title': 'Quick Response Guarantee',
    'contact.guarantee.desc': 'I typically respond to all inquiries within 24 hours. For urgent projects, feel free to mention it in your message and I\'ll prioritize accordingly.',
    'contact.form.selectProject': 'Select project type',
    'contact.form.webApp': 'Web Application',
    'contact.form.mobileApp': 'Mobile App',
    'contact.form.uiUx': 'UI/UX Design',
    'contact.form.dataAnalysis': 'Data Analysis',
    'contact.form.automation': 'Automation',
    'contact.form.consulting': 'Consulting',
    'contact.form.selectBudget': 'Select budget range',

    // Testimonials
    'testimonials.title': 'Client love stories',
    'testimonials.subtitle': 'Don\'t just take my word for it. Here\'s what clients around the world are saying about our collaborations.',
    'testimonials.rating': 'Based on 50+ client reviews',

    // Footer
    'footer.tagline': 'Creating digital experiences that bring joy to users worldwide. Based in Sapporo, working globally.',
    'footer.madeWith': 'Made with',
    'footer.and': 'and lots of',
    'footer.in': 'in Sapporo',
    'footer.copyright': '© 2024 Haruto Morikawa. All rights reserved.',
    'footer.available': 'Available for freelance projects worldwide',

    // Brand
    'brand.name': 'Haruto Morikawa',

    // TransactionJourney
    'journey.title': 'One card, everywhere',
    'journey.subtitle': 'Spend like a local in 175+ countries. Your FlowPay card automatically converts at the real exchange rate.',
    'journey.delhi.location': 'Delhi, India',
    'journey.delhi.action': 'Book taxi ride',
    'journey.london.location': 'London, UK',
    'journey.london.action': 'Coffee & pastry',
    'journey.ny.location': 'New York, USA',
    'journey.ny.action': 'Metro card top-up',
    'journey.tokyo.location': 'Tokyo, Japan',
    'journey.tokyo.action': 'Dinner for two',
    'journey.paidInstantly': 'Paid instantly',
    'journey.realRatesTitle': 'Real exchange rates, always',
    'journey.realRatesDesc': 'No hidden fees, no inflated exchange rates. What you see is what you get.',
    'journey.cta': 'Get your FlowPay card',
  },
  ja: {
    // Navigation
    'nav.about': '私について',
    'nav.achievements': '実績',
    'nav.skills': 'スキル',
    'nav.process': 'プロセス',
    'nav.contact': 'お問い合わせ',
    'nav.workTogether': '一緒に働きましょう',

    // Hero
    'hero.available': '新規プロジェクト受付中',
    'hero.title': '人を笑顔にするデジタル体験を創造します',
    'hero.subtitle': '札幌出身のフルスタック開発者・UI/UXデザイナー。複雑な問題をシンプルで喜ばれるソリューションに変えます。一緒に素晴らしいものを作りましょう。',
    'hero.seeWork': '実績を見る',
    'hero.letsTalk': 'お話しましょう',
    'hero.trusted': '世界中のスタートアップや企業から信頼されています',
    'hero.location': '札幌',
    'hero.experience': '6年以上',
    'hero.experienceSub': '経験',

    // About
    'about.title': '私の歩み',
    'about.subtitle': '北海道の好奇心旺盛な学生から、世界中のユーザーに喜びをもたらすデジタル体験を創造するフリーランス開発者へ。',
    'about.timeline.1995.title': '札幌で生まれる',
    'about.timeline.1995.desc': '美しい札幌市、北海道で人生の旅を始める',
    'about.timeline.2014.title': '北海道大学',
    'about.timeline.2014.desc': '工学部情報工学科 - AI、データ解析、ソフトウェア開発を専攻',
    'about.timeline.2018.title': '企業での経験',
    'about.timeline.2018.desc': '大手IT企業でフルスタック開発 - 要件定義から運用まで',
    'about.timeline.2022.title': 'フリーランスの旅',
    'about.timeline.2022.desc': '世界中の人々を笑顔にするソリューションを創造する独立開発者',
    'about.philosophy.title': '私の哲学',
    'about.philosophy.desc': '「技術は手段、笑顔がゴール」。問題を解決するだけでなく、使う人に本当の喜びをもたらすデジタル体験を創造することを信念としています。',

    // Achievements
    'achievements.title': 'プロジェクトハイライト',
    'achievements.subtitle': '実際のプロジェクト、実際の結果、実際の笑顔。ユーザーを本当に幸せにしながら、クライアントの目標達成をお手伝いした方法をご紹介します。',
    'achievements.ecommerce.title': '世界一やさしいECサイトリニューアル',
    'achievements.ecommerce.subtitle': 'うちの母でも買い物できる！',
    'achievements.ecommerce.desc': '「おばあちゃんフレンドリー」設計思想による大手ECサイトの完全UI/UX刷新',
    'achievements.ai.title': 'AIで笑顔を取り戻すプロジェクト',
    'achievements.ai.subtitle': '月末地獄から社員を救出',
    'achievements.ai.desc': '3日間の書類処理悪夢を撲滅するPython & AI自動化システム',
    'achievements.saas.title': '猫でも使えるSaaS立ち上げ',
    'achievements.saas.subtitle': '猫でも使えるほどシンプル',
    'achievements.saas.desc': '究極のシンプルさを核とするフルスタックSaaS開発',
    'achievements.data.title': '占い師級データ分析',
    'achievements.data.subtitle': 'データ魔法で未来を予測',
    'achievements.data.desc': '隠れた顧客行動パターンを明らかにする多次元小売データ分析',
    'achievements.health.title': 'RPG風健康アプリ',
    'achievements.health.subtitle': 'フィットネスゲームでレベルアップ',
    'achievements.health.desc': 'リアル世界のペナルティとチームボス戦を備えたゲーミフィケーション健康アプリ',
    'achievements.common.title': '共通の糸',
    'achievements.common.desc': 'すべてのプロジェクトは同じDNAを共有しています：ユーザーに「楽しい！」「簡単！」「また使いたい！」と思わせること。技術は笑顔と共に人類に奉仕すべきです。',
    'achievements.results': '結果',
    'achievements.ecommerce.results.1': '120%の売上増加',
    'achievements.ecommerce.results.2': '混乱の苦情ゼロ',
    'achievements.ecommerce.results.3': '全国の楽しいショッピング事故',
    'achievements.ai.results.1': 'オーバーワーク文化ゼロ',
    'achievements.ai.results.2': '即時エラー検出',
    'achievements.ai.results.3': '5時にビールの生活を実現',
    'achievements.saas.results.1': '70%のチャーンレート低下',
    'achievements.saas.results.2': '天井満足度',
    'achievements.saas.results.3': 'クライアントからの手紙',
    'achievements.data.results.1': '雨の日のカレー予測',
    'achievements.data.results.2': '金曜日のビール→月曜日のビールジュースの洞察',
    'achievements.data.results.3': '水晶玉の名声',
    'achievements.health.results.1': '初回の朝のランナー',
    'achievements.health.results.2': 'フリッカンの禁煙記録',
    'achievements.health.results.3': '競争的ウォーキング中毒',

    // Skills
    'skills.title': '私のツールキット',
    'skills.subtitle': 'コンセプトから展開まで、あなたのビジョンを実現するための最新技術と手法の包括的な武器庫。',
    'skills.frontend': 'フロントエンド開発',
    'skills.backend': 'バックエンド開発',
    'skills.design': 'UI/UXデザイン',
    'skills.ai': 'AI・データサイエンス',
    'skills.mobile': 'モバイル開発',
    'skills.devops': 'DevOps・クラウド',
    'skills.learning.title': '常に学び、常に成長',
    'skills.learning.desc': '技術は急速に進歩し、私も同様に進歩しています。すべてのプロジェクトに最適なソリューションを提供できるよう、新しいツール、フレームワーク、手法を常に探求しています。',

    // Process
    'process.title': '私たちの協働方法',
    'process.subtitle': 'プロジェクトが期待を満たすだけでなく、それを上回ることを保証する実証済みのプロセス。すべてのステップで透明性、コミュニケーション、品質を重視します。',
    'process.discovery.title': '発見と理解',
    'process.discovery.desc': 'あなたのビジョン、目標、課題について深い対話から始めます。何を望んでいるかだけでなく、なぜそれを望んでいるかを理解するために注意深く聞きます。',
    'process.strategy.title': '戦略とデザイン',
    'process.strategy.desc': '包括的な戦略を策定し、ユーザー体験を優先する直感的なデザインを作成します。すべてのピクセルに目的があり、すべてのインタラクションが喜びをもたらします。',
    'process.development.title': '開発とテスト',
    'process.development.desc': 'クリーンで効率的なコードと厳格なテストが出会います。スケーラビリティを念頭に置いて構築し、すべてのデバイスとブラウザで完璧に動作することを保証します。',
    'process.launch.title': 'ローンチと最適化',
    'process.launch.desc': '包括的な監視によるスムーズな展開。すべてが完璧に動作することを確認し、実際のユーザーデータに基づいて最適化を行います。',
    'process.partnership.title': '継続的なパートナーシップ',
    'process.partnership.desc': 'あなたの成功は私の成功です。プロジェクトの成長と進化を支援するために、継続的なサポート、メンテナンス、機能強化を提供します。',
    'process.cta.title': 'プロジェクトを始める準備はできましたか？',
    'process.cta.desc': 'すべての素晴らしいプロジェクトは会話から始まります。あなたのビジョンについて話し合い、一緒にそれを実現する方法を見つけましょう。',
    'process.cta.button': 'プロジェクトについて話しましょう',

    // Contact
    'contact.title': '素晴らしいものを一緒に創造しましょう',
    'contact.subtitle': 'あなたのビジョンを現実に変える準備はできていますか？あなたのプロジェクトについてお聞かせください。一緒に特別なものを創造する方法を話し合いましょう。',
    'contact.getInTouch': 'お問い合わせ',
    'contact.email': 'メール',
    'contact.location': '所在地',
    'contact.availability': '対応状況',
    'contact.availableText': '新規プロジェクト受付中',
    'contact.coffee.title': 'コーヒーチャット？',
    'contact.coffee.desc': 'カジュアルな会話がお好みですか？アイデアや課題について話し合ったり、ただ挨拶するためのバーチャルコーヒーチャットはいつでも歓迎です！',
    'contact.form.title': 'プロジェクトについて教えてください',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.project': 'プロジェクトタイプ',
    'contact.form.budget': '予算範囲',
    'contact.form.message': 'プロジェクト詳細',
    'contact.form.messagePlaceholder': 'プロジェクト、目標、スケジュール、特定の要件について教えてください...',
    'contact.form.send': 'メッセージを送信',
    'contact.guarantee.title': '迅速対応保証',
    'contact.guarantee.desc': '通常、すべてのお問い合わせに24時間以内に返信いたします。緊急のプロジェクトの場合は、メッセージでお知らせいただければ優先的に対応いたします。',
    'contact.form.selectProject': 'プロジェクトタイプを選択',
    'contact.form.webApp': 'ウェブアプリケーション',
    'contact.form.mobileApp': 'モバイルアプリ',
    'contact.form.uiUx': 'UI/UXデザイン',
    'contact.form.dataAnalysis': 'データ分析',
    'contact.form.automation': 'オートメーション',
    'contact.form.consulting': 'コンサルティング',
    'contact.form.selectBudget': '予算範囲を選択',

    // Testimonials
    'testimonials.title': 'クライアントの愛の物語',
    'testimonials.subtitle': '私の言葉だけを信じないでください。世界中のクライアントが私たちの協働について語っていることをご紹介します。',
    'testimonials.rating': '50以上のクライアントレビューに基づく',

    // Footer
    'footer.tagline': '世界中のユーザーに喜びをもたらすデジタル体験を創造。札幌を拠点に、世界で活動。',
    'footer.madeWith': '作成：',
    'footer.and': 'とたくさんの',
    'footer.in': 'in 札幌',
    'footer.copyright': '© 2024 森川陽大. All rights reserved.',
    'footer.available': '世界中のフリーランスプロジェクトに対応可能',

    // Brand
    'brand.name': '森川 陽大（もりかわ はると）',

    // TransactionJourney
    'journey.title': '1枚のカードで、どこでも',
    'journey.subtitle': '175以上の国で現地のように支払い。FlowPayカードは自動でリアル為替レートに変換します。',
    'journey.delhi.location': 'インド・デリー',
    'journey.delhi.action': 'タクシーを予約',
    'journey.london.location': 'イギリス・ロンドン',
    'journey.london.action': 'コーヒーとペストリー',
    'journey.ny.location': 'アメリカ・ニューヨーク',
    'journey.ny.action': 'メトロカードチャージ',
    'journey.tokyo.location': '日本・東京',
    'journey.tokyo.action': '2人分のディナー',
    'journey.paidInstantly': '即時決済',
    'journey.realRatesTitle': '常にリアルな為替レート',
    'journey.realRatesDesc': '隠れた手数料や上乗せレートなし。見たままの金額で。',
    'journey.cta': 'FlowPayカードを申し込む',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};