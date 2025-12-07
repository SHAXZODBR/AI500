"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Language = "en" | "uz" | "ru"

type Translations = {
  [key: string]: {
    en: string
    uz: string
    ru: string
  }
}

export const translations: Translations = {
  // Navbar
  "nav.problem": { en: "Problem", uz: "Muammo", ru: "Проблема" },
  "nav.solution": { en: "Solution", uz: "Yechim", ru: "Решение" },
  "nav.demo": { en: "Demo", uz: "Demo", ru: "Демо" },
  "nav.features": { en: "Features", uz: "Xususiyatlar", ru: "Возможности" },
  "nav.team": { en: "Team", uz: "Jamoa", ru: "Команда" },
  "nav.business": { en: "Business", uz: "Biznes", ru: "Бизнес" },
  "nav.roadmap": { en: "Roadmap", uz: "Yo'l xaritasi", ru: "Дорожная карта" },
  "nav.viewDemo": { en: "View Demo", uz: "Demoni ko'rish", ru: "Смотреть демо" },
  "nav.learnMore": { en: "Learn More", uz: "Batafsil", ru: "Подробнее" },

  // Hero - SIGN branding
  "hero.badge": { en: "AI500 Uzbekistan Hackathon", uz: "AI500 O'zbekiston Xakatoni", ru: "Хакатон AI500 Узбекистан" },
  "hero.title1": {
    en: "AI-Powered Investment Intelligence",
    uz: "AI Asosidagi Investitsiya Intellekti",
    ru: "Инвестиционный интеллект на базе ИИ",
  },
  "hero.title2": { en: "for Uzbekistan", uz: "O'zbekiston uchun", ru: "для Узбекистана" },
  "hero.subtitle": {
    en: "SIGN creates AI-driven indexes for Uzbek companies (SIGN-10, SIGN-20, SIGN-50, and sector indexes), learns from global market patterns, and makes investing accessible to everyone.",
    uz: "SIGN O'zbek kompaniyalari uchun AI indekslarini yaratadi (SIGN-10, SIGN-20, SIGN-50 va sektor indekslari), global bozor naqshlaridan o'rganadi va investitsiyani hamma uchun ochiq qiladi.",
    ru: "SIGN создаёт ИИ-индексы для узбекских компаний (SIGN-10, SIGN-20, SIGN-50 и секторные индексы), учится на паттернах мировых рынков и делает инвестиции доступными для всех.",
  },
  "hero.feature1": { en: "AI-Powered Analytics", uz: "AI Tahlil", ru: "ИИ-аналитика" },
  "hero.feature2": { en: "Transparent Scoring", uz: "Shaffof Baholash", ru: "Прозрачный скоринг" },
  "hero.feature3": { en: "Smart Indexes", uz: "Aqlli Indekslar", ru: "Умные индексы" },
  "hero.stat1": { en: "Less than 1%", uz: "1% dan kam", ru: "Менее 1%" },
  "hero.stat1Label": { en: "of Uzbeks invest", uz: "o'zbeklar investitsiya qiladi", ru: "узбеков инвестируют" },
  "hero.stat2": { en: "Zero", uz: "Nol", ru: "Ноль" },
  "hero.stat2Label": { en: "AI indexes exist", uz: "AI indekslar mavjud", ru: "ИИ-индексов существует" },
  "hero.stat3": { en: "SIGN", uz: "SIGN", ru: "SIGN" },
  "hero.stat3Label": { en: "fills this gap", uz: "bu bo'shliqni to'ldiradi", ru: "заполняет этот пробел" },

  // Problem Section
  "problem.badge": { en: "The Real Problem", uz: "Haqiqiy Muammo", ru: "Реальная проблема" },
  "problem.title": {
    en: "Why Uzbekistan's Investment Market Struggles",
    uz: "Nima uchun O'zbekiston investitsiya bozori qiynalmoqda",
    ru: "Почему инвестиционный рынок Узбекистана страдает",
  },
  "problem.subtitle": {
    en: "Investment is the heart of economic growth. But in Uzbekistan, critical barriers prevent progress.",
    uz: "Investitsiya iqtisodiy o'sishning yuragi. Ammo O'zbekistonda muhim to'siqlar rivojlanishga xalaqit beradi.",
    ru: "Инвестиции — сердце экономического роста. Но в Узбекистане критические барьеры препятствуют прогрессу.",
  },
  "problem.mainStat": { en: "Less than 1%", uz: "1% dan kam", ru: "Менее 1%" },
  "problem.mainStatLabel": {
    en: "of people in Uzbekistan invest",
    uz: "O'zbekistonda investitsiya qiladi",
    ru: "людей в Узбекистане инвестируют",
  },
  "problem.result": { en: "The Result:", uz: "Natija:", ru: "Результат:" },
  "problem.resultText": {
    en: "Lack of trust = Lack of investment = Lack of growth. SIGN addresses this problem.",
    uz: "Ishonch yo'qligi = Investitsiya yo'qligi = O'sish yo'qligi. SIGN bu muammoni hal qiladi.",
    ru: "Отсутствие доверия = Отсутствие инвестиций = Отсутствие роста. SIGN решает эту проблему.",
  },
  "problem.card1.title": {
    en: "People Don't Trust the Market",
    uz: "Odamlar Bozorga Ishonmaydi",
    ru: "Люди не доверяют рынку",
  },
  "problem.card2.title": { en: "Zero Transparency", uz: "Shaffoflik Yo'q", ru: "Нулевая прозрачность" },
  "problem.card3.title": { en: "No Tools Exist", uz: "Vositalar Yo'q", ru: "Инструментов нет" },
  "problem.card4.title": { en: "Global AI Doesn't Work", uz: "Global AI Ishlamaydi", ru: "Глобальный ИИ не работает" },

  // Solution Section
  "solution.badge": { en: "Our Solution", uz: "Bizning Yechim", ru: "Наше решение" },
  "solution.title": { en: "SIGN Platform", uz: "SIGN Platformasi", ru: "Платформа SIGN" },
  "solution.subtitle": {
    en: "An AI-powered investment intelligence platform designed to solve all layers of the problem: Users, Banks, Companies, Government, and the entire financial ecosystem.",
    uz: "Muammoning barcha qatlamlarini hal qilish uchun mo'ljallangan AI investitsiya intellekt platformasi: Foydalanuvchilar, Banklar, Kompaniyalar, Hukumat va butun moliya ekotizimi.",
    ru: "Платформа инвестиционного интеллекта на ИИ, созданная для решения всех уровней проблемы: Пользователи, Банки, Компании, Государство и вся финансовая экосистема.",
  },

  // Demo Section
  "demo.badge": {
    en: "Static Prototype — Demo Data",
    uz: "Statik Prototip — Demo Ma'lumotlar",
    ru: "Статический прототип — демо данные",
  },
  "demo.title": { en: "Platform Demo", uz: "Platforma Demosi", ru: "Демо платформы" },
  "demo.subtitle": {
    en: "Explore how SIGN analyzes companies and creates smart indexes (SIGN-10, SIGN-20, SIGN-50) plus sector indexes.",
    uz: "SIGN kompaniyalarni qanday tahlil qilishi va aqlli indekslar yaratishini ko'ring (SIGN-10, SIGN-20, SIGN-50) va sektor indekslari.",
    ru: "Изучите, как SIGN анализирует компании и создаёт умные индексы (SIGN-10, SIGN-20, SIGN-50) плюс секторные индексы.",
  },
  "demo.indexComparison": { en: "SIGN Indexes", uz: "SIGN Indekslari", ru: "Индексы SIGN" },
  "demo.riskLevel": { en: "Risk Level", uz: "Risk Darajasi", ru: "Уровень риска" },
  "demo.estReturn": { en: "Est. Return", uz: "Taxminiy Daromad", ru: "Ожид. доход" },
  "demo.volatility": { en: "Volatility", uz: "O'zgaruvchanlik", ru: "Волатильность" },
  "demo.aiSelected": { en: "Why AI Selected These:", uz: "AI Nima Uchun Ularni Tanladi:", ru: "Почему ИИ выбрал их:" },
  "demo.strengths": { en: "Strengths", uz: "Kuchli Tomonlar", ru: "Сильные стороны" },
  "demo.weaknesses": { en: "Weaknesses", uz: "Zaif Tomonlar", ru: "Слабые стороны" },
  "demo.aiScore": { en: "AI Score", uz: "AI Bahosi", ru: "ИИ Оценка" },
  "demo.investorMode": { en: "AI Investor Mode", uz: "AI Investor Rejimi", ru: "Режим ИИ-инвестора" },
  "demo.askAnything": {
    en: "Ask any investment question",
    uz: "Har qanday investitsiya savolini bering",
    ru: "Задайте любой инвестиционный вопрос",
  },

  // Demo Page
  "demoPage.videoTitle": { en: "Platform Overview", uz: "Platforma Sharhi", ru: "Обзор платформы" },
  "demoPage.githubTitle": { en: "Initial Database & API Guide", uz: "Boshlang'ich Ma'lumotlar bazasi va API Qo'llanma", ru: "Начальная база данных и руководство по API" },
  "demoPage.githubDesc": { en: "Access the initial database setup, API documentation, and integration guide", uz: "Boshlang'ich ma'lumotlar bazasi sozlamasi, API hujjatlari va integratsiya qo'llanmasiga kirish", ru: "Доступ к начальной настройке базы данных, документации API и руководству по интеграции" },
  "demoPage.projectTitle": { en: "Project Description", uz: "Loyiha Tavsifi", ru: "Описание проекта" },
  "demoPage.projectSubtitle": { en: "SIGN AI Platform - Stock Intelligence & Growth Navigator", uz: "SIGN AI Platformasi - Aktsiyalar Intellekti va O'sish Navigatori", ru: "Платформа SIGN AI - Интеллект акций и навигатор роста" },
  
  "demoPage.whatIsShown": { en: "What is Being Shown", uz: "Nima Ko'rsatilmoqda", ru: "Что демонстрируется" },
  "demoPage.whatIsShownDesc": { en: "SIGN (Stock Intelligence & Growth Navigator) is Uzbekistan's first AI-powered investment intelligence platform that democratizes access to equity market insights.", uz: "SIGN (Stock Intelligence & Growth Navigator) O'zbekistonning aktsiya bozoriga kirish imkoniyatini demokratlashtiruvchi birinchi AI-asosli investitsiya intellekt platformasi.", ru: "SIGN (Stock Intelligence & Growth Navigator) - первая в Узбекистане платформа инвестиционной аналитики на базе ИИ, которая демократизирует доступ к анализу фондового рынка." },
  
  "demoPage.liveFeaturesTitle": { en: "Live Features Demonstrated", uz: "Jonli Funksiyalar Namoyishi", ru: "Демонстрируемые функции" },
  "demoPage.feature1Title": { en: "AI-Powered Company Scoring System", uz: "AI-Asosli Kompaniya Baholash Tizimi", ru: "Система оценки компаний на базе ИИ" },
  "demoPage.feature1Desc": { en: "Real-time analysis of 50+ financial metrics with 0-100 investment readiness scores and multi-factor evaluation.", uz: "50+ moliyaviy ko'rsatkichlarni real vaqtda tahlil qilish, 0-100 investitsiya tayyorlik ballari va ko'p omilli baholash.", ru: "Анализ более 50 финансовых показателей в реальном времени с оценками готовности к инвестициям 0-100 и многофакторной оценкой." },
  
  "demoPage.feature2Title": { en: "Interactive AI Chat Assistant", uz: "Interaktiv AI Chat Yordamchisi", ru: "Интерактивный ИИ-ассистент" },
  "demoPage.feature2Desc": { en: "Natural language processing for investment questions with RAG system and multi-language support (English, Russian, Uzbek).", uz: "Investitsiya savollari uchun tabiiy til ishlov berish, RAG tizimi va ko'p tillarni qo'llab-quvvatlash (Ingliz, Rus, O'zbek).", ru: "Обработка естественного языка для инвестиционных вопросов с системой RAG и поддержкой нескольких языков (английский, русский, узбекский)." },

  "demoPage.feature3Title": { en: "National Market Indexes", uz: "Milliy Bozor Indekslari", ru: "Национальные рыночные индексы" },
  "demoPage.feature3Desc": { en: "SIGN-10, SIGN-20, SIGN-50 tracking top Uzbek companies and sector-specific indexes (Agro, Textile, IT, Energy, Logistics).", uz: "O'zbekistonning yetakchi kompaniyalarini kuzatuvchi SIGN-10, SIGN-20, SIGN-50 va soha bo'yicha indekslar (Agro, Tekstil, IT, Energetika, Logistika).", ru: "Отслеживание топ-компаний Узбекистана через SIGN-10, SIGN-20, SIGN-50 и отраслевые индексы (Агро, Текстиль, IT, Энергетика, Логистика)." },

  "demoPage.feature4Title": { en: "API Access & Developer Tools", uz: "API Kirish va Dasturchi Vositalari", ru: "Доступ к API и инструменты разработчика" },
  "demoPage.feature4Desc": { en: "RESTful API endpoints (/api/ask, /api/company-chat) with interactive documentation and testing interface.", uz: "Interaktiv hujjatlar va sinov interfeysi bilan RESTful API so'rovlari (/api/ask, /api/company-chat).", ru: "RESTful API эндпоинты (/api/ask, /api/company-chat) с интерактивной документацией и интерфейсом тестирования." },

  "demoPage.feature5Title": { en: "Educational Platform", uz: "Ta'lim Platformasi", ru: "Образовательная платформа" },
  "demoPage.feature5Desc": { en: "Beginner-friendly investment tutorials, interactive tooltips, and financial literacy content tailored for Uzbekistan.", uz: "Yangi boshlanuvchilar uchun investitsiya darsliklari, interaktiv maslahatlar va O'zbekiston uchun moslashtirilgan moliyaviy savodxonlik mazmuni.", ru: "Учебные пособия для начинающих, интерактивные подсказки и контент по финансовой грамотности, адаптированный для Узбекистана." },

  
  "demoPage.problemTitle": { en: "Problem & Solution", uz: "Muammo va Yechim", ru: "Проблема и решение" },
  "demoPage.problemDesc": { en: "Uzbekistan's investment market suffers from information asymmetry, market opacity, language barriers, knowledge gaps, and trust deficit. SIGN addresses all these challenges through AI-powered transparency, democratized access, and localization.", uz: "O'zbekiston investitsiya bozori axborot assimetriyasi, bozor shaffoflik yo'qligi, til to'siqlari, bilim bo'shliqlari va ishonch tanqisligidan aziyat chekmoqda. SIGN AI shaffoflik, demokratlashtirilgan kirish va mahalliylashtirish orqali bu muammolarni hal qiladi.", ru: "Инвестиционный рынок Узбекистана страдает от информационной асимметрии, непрозрачности рынка, языковых барьеров, пробелов в знаниях и дефицита доверия. SIGN решает все эти проблемы через прозрачность на базе ИИ, демократизированный доступ и локализацию." },
  
  "demoPage.techStackTitle": { en: "Technology Stack & AI Solutions", uz: "Texnologiya Steki va AI Yechimlari", ru: "Технологический стек и ИИ-решения" },
  "demoPage.techStackDesc": { en: "Built with Next.js 14, TypeScript, React 18, and powered by Groq AI (llama-3.3-70b-versatile), RAG system with OpenAI embeddings, hybrid AI scoring algorithm, and Supabase backend.", uz: "Next.js 14, TypeScript, React 18 bilan qurilgan va Groq AI (llama-3.3-70b-versatile), OpenAI embeddinglar bilan RAG tizimi, gibrid AI baholash algoritmi va Supabase backend bilan quvvatlantirilgan.", ru: "Построено на Next.js 14, TypeScript, React 18 и работает на Groq AI (llama-3.3-70b-versatile), системе RAG с OpenAI embeddings, гибридном алгоритме оценки ИИ и бэкенде Supabase." },
  
  "demoPage.roadmapTitle": { en: "Roadmap & Next Steps", uz: "Yo'l Xaritasi va Keyingi Qadamlar", ru: "Дорожная карта и следующие шаги" },
  "demoPage.roadmapDesc": { en: "Current stage: MVP completed (December 2025). Next: Private Beta (Q1 2026), Public Launch (Q2 2026), and Regional Expansion (2026-2027).", uz: "Joriy bosqich: MVP yakunlangan (Dekabr 2026). Keyingisi: Xususiy Beta (Q1 2026), Ommaviy Ishga Tushirish (Q2 2026) va Mintaqaviy Kengayish (2026-2027).", ru: "Текущий этап: MVP завершен (декабрь 2026). Далее: Закрытая бета (Q1 2026), Публичный запуск (Q2 2026) и региональная экспансия (2026-2027)." },
  
  "demoPage.innovationTitle": { en: "Innovation Highlights", uz: "Innovatsiya Asosiy Jihatlar", ru: "Основные инновации" },
  "demoPage.innovationDesc": { en: "First mover advantage in Uzbekistan, hybrid AI approach (formulas + LLM), education-first platform, open API ecosystem, true localization, and RAG-powered accuracy.", uz: "O'zbekistonda birinchi harakatchan ustunlik, gibrid AI yondashuv (formulalar + LLM), ta'lim-birinchi platforma, ochiq API ekotizimi, haqiqiy mahalliylashtirish va RAG-asosli aniqlik.", ru: "Преимущество первопроходца в Узбекистане, гибридный подход ИИ (формулы + LLM), образовательная платформа, открытая API-экосистема, настоящая локализация и точность на базе RAG." },

  // Key Features Section
  "features.badge": { en: "Key Features", uz: "Asosiy Xususiyatlar", ru: "Ключевые возможности" },
  "features.title": {
    en: "What Makes SIGN Powerful",
    uz: "SIGN ni Kuchli Qiladigan Narsa",
    ru: "Что делает SIGN мощным",
  },
  "features.subtitle": {
    en: "A comprehensive platform designed to transform Uzbekistan's investment landscape.",
    uz: "O'zbekiston investitsiya landshaftini o'zgartirish uchun mo'ljallangan keng qamrovli platforma.",
    ru: "Комплексная платформа для трансформации инвестиционного ландшафта Узбекистана.",
  },

  // Business Model Section
  "business.badge": { en: "Business Model", uz: "Biznes Modeli", ru: "Бизнес-модель" },
  "business.title": { en: "How SIGN Makes Money", uz: "SIGN Qanday Pul Ishlaydi", ru: "Как SIGN зарабатывает" },
  "business.subtitle": {
    en: "A sustainable multi-revenue model with B2C, B2B, and partnership streams.",
    uz: "B2C, B2B va hamkorlik oqimlari bilan barqaror ko'p daromadli model.",
    ru: "Устойчивая многоканальная модель с B2C, B2B и партнёрскими потоками.",
  },

  // Team Section
  "team.badge": { en: "Team SIGN", uz: "SIGN Jamoasi", ru: "Команда SIGN" },
  "team.title": { en: "Meet Our Team", uz: "Bizning Jamoa", ru: "Наша команда" },
  "team.subtitle": {
    en: "A team with deep understanding of Uzbekistan's financial ecosystem and technical AI capability.",
    uz: "O'zbekiston moliyaviy ekotizimini chuqur tushunuvchi va texnik AI qobiliyatiga ega jamoa.",
    ru: "Команда с глубоким пониманием финансовой экосистемы Узбекистана и техническими ИИ-навыками.",
  },

  // Impact Section
  "impact.badge": { en: "Social Impact", uz: "Ijtimoiy Ta'sir", ru: "Социальное влияние" },
  "impact.title": { en: "Impact for Uzbekistan", uz: "O'zbekiston Uchun Ta'sir", ru: "Влияние на Узбекистан" },
  "impact.subtitle": {
    en: "Beyond business — SIGN creates lasting positive change for the entire economy.",
    uz: "Biznesdan tashqari — SIGN butun iqtisodiyot uchun doimiy ijobiy o'zgarishlar yaratadi.",
    ru: "Не только бизнес — SIGN создаёт устойчивые позитивные изменения для всей экономики.",
  },

  // Roadmap Section
  "roadmap.badge": { en: "Current Stage: MVP", uz: "Joriy Bosqich: MVP", ru: "Текущий этап: MVP" },
  "roadmap.title": { en: "Development Roadmap", uz: "Rivojlanish Yo'l Xaritasi", ru: "Дорожная карта разработки" },
  "roadmap.subtitle": {
    en: "Started November 2025. Moving fast from prototype to public launch.",
    uz: "Noyabr 2025 da boshlangan. Prototipdan ommaviy ishga tushirishgacha tez harakatlanmoqda.",
    ru: "Начало: ноябрь 2025. Быстрое движение от прототипа до публичного запуска.",
  },
  "roadmap.inProgress": { en: "In Progress", uz: "Jarayonda", ru: "В процессе" },
  "roadmap.upcoming": { en: "Upcoming", uz: "Kelgusi", ru: "Предстоящие" },
  "roadmap.completed": { en: "Completed", uz: "Yakunlangan", ru: "Завершено" },

  // Tech Section
  "tech.badge": { en: "Technology Stack", uz: "Texnologiya Steki", ru: "Технологический стек" },
  "tech.title": {
    en: "How We Plan to Build It",
    uz: "Biz Qanday Qurishni Rejalashtirmoqdamiz",
    ru: "Как мы планируем это построить",
  },
  "tech.subtitle": {
    en: "Modern, scalable architecture designed for AI-first intelligence.",
    uz: "AI-birinchi intellekt uchun mo'ljallangan zamonaviy, kengaytiriladigan arxitektura.",
    ru: "Современная, масштабируемая архитектура для ИИ-ориентированного интеллекта.",
  },

  // Footer
  "footer.hackathon": {
    en: "AI500 Uzbekistan Hackathon 2025",
    uz: "AI500 O'zbekiston Xakatoni 2025",
    ru: "Хакатон AI500 Узбекистан 2025",
  },
  "footer.platform": {
    en: "AI-Powered Investment Intelligence Platform",
    uz: "AI Asosidagi Investitsiya Intellekt Platformasi",
    ru: "Платформа инвестиционного интеллекта на ИИ",
  },
  "footer.disclaimer": {
    en: "This is a prototype demo with placeholder data. SIGN does NOT execute trades — just insights, scores, and indexes.",
    uz: "Bu to'ldiruvchi ma'lumotlar bilan prototip demo. SIGN savdolarni amalga oshirmaydi — faqat tahlillar, baholar va indekslar.",
    ru: "Это демо-прототип с демо-данными. SIGN НЕ выполняет сделки — только аналитика, оценки и индексы.",
  },
  "footer.safe": {
    en: "Safe: We do NOT execute trades",
    uz: "Xavfsiz: Biz savdo qilmaymiz",
    ru: "Безопасно: Мы НЕ совершаем сделки",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
