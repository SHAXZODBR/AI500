"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Brain, BarChart3, GraduationCap, Building2, Users, Landmark } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function SolutionSection() {
  const { t, language } = useLanguage()

  const solutions = [
    {
      icon: BarChart3,
      title: { en: "First AI-Driven Indexes", uz: "Birinchi AI Indekslari", ru: "Первые ИИ-индексы" },
      description: {
        en: "National & sector-based smart indexes",
        uz: "Milliy va sektor asosidagi aqlli indekslar",
        ru: "Национальные и секторные умные индексы",
      },
      features: {
        en: ["SIGN-10 (Top 10)", "SIGN-20 (Mid-cap)", "SIGN-50 (Broad)", "SIGN-Agro, SIGN-IT, SIGN-Energy"],
        uz: ["SIGN-10 (Top 10)", "SIGN-20 (O'rta-kap)", "SIGN-50 (Keng)", "SIGN-Agro, SIGN-IT, SIGN-Energy"],
        ru: ["SIGN-10 (Топ 10)", "SIGN-20 (Средняя кап.)", "SIGN-50 (Широкий)", "SIGN-Agro, SIGN-IT, SIGN-Energy"],
      },
    },
    {
      icon: Brain,
      title: { en: "Learns from Global Markets", uz: "Global Bozorlardan O'rganadi", ru: "Учится у мировых рынков" },
      description: {
        en: "Transfer learning from S&P500, NASDAQ, etc.",
        uz: "S&P500, NASDAQ va boshqalardan transfer o'rganish",
        ru: "Трансферное обучение от S&P500, NASDAQ и др.",
      },
      features: {
        en: ["Price movement patterns", "Volume/activity patterns", "Economic cycles", "News-to-price reactions"],
        uz: [
          "Narx harakati naqshlari",
          "Hajm/faollik naqshlari",
          "Iqtisodiy sikllar",
          "Yangilikdan nargacha reaktsiyalar",
        ],
        ru: ["Паттерны движения цен", "Паттерны объёма/активности", "Экономические циклы", "Реакции новости-цена"],
      },
    },
    {
      icon: Building2,
      title: { en: "AI Company Scoring", uz: "AI Kompaniya Baholash", ru: "ИИ-скоринг компаний" },
      description: {
        en: "Clear investment readiness index",
        uz: "Aniq investitsiya tayyorligi indeksi",
        ru: "Чёткий индекс готовности к инвестициям",
      },
      features: {
        en: ["Financial health score", "Risk evaluation", "Growth potential", "Valuation band"],
        uz: ["Moliyaviy salomatlik bahosi", "Risk baholash", "O'sish potentsiali", "Baholash diapazoni"],
        ru: ["Оценка финансового здоровья", "Оценка рисков", "Потенциал роста", "Диапазон оценки"],
      },
    },
    {
      icon: GraduationCap,
      title: { en: "Education Layer", uz: "Ta'lim Qatlami", ru: "Образовательный слой" },
      description: {
        en: "Built-in courses for beginners",
        uz: "Yangi boshlovchilar uchun ichki kurslar",
        ru: "Встроенные курсы для начинающих",
      },
      features: {
        en: ["Investing basics", "Risk management", "How indexes work", "AI-certified modules"],
        uz: ["Investitsiya asoslari", "Risk boshqaruvi", "Indekslar qanday ishlaydi", "AI-sertifikatlangan modullar"],
        ru: ["Основы инвестирования", "Управление рисками", "Как работают индексы", "Модули с ИИ-сертификацией"],
      },
    },
    {
      icon: Users,
      title: { en: "AI Investor Mode", uz: "AI Investor Rejimi", ru: "Режим ИИ-инвестора" },
      description: {
        en: "Ask any question, get recommendations",
        uz: "Har qanday savol bering, tavsiyalar oling",
        ru: "Задайте любой вопрос, получите рекомендации",
      },
      features: {
        en: ["Natural language queries", "Predicted scenarios", "Risk explanations", "Personalized insights"],
        uz: [
          "Tabiiy til so'rovlari",
          "Bashorat qilingan stsenariylar",
          "Risk tushuntirishlari",
          "Shaxsiylashtirilgan tushunchalar",
        ],
        ru: [
          "Запросы на естественном языке",
          "Прогнозируемые сценарии",
          "Объяснения рисков",
          "Персонализированные инсайты",
        ],
      },
    },
    {
      icon: Landmark,
      title: { en: "Partnership Ready", uz: "Hamkorlikka Tayyor", ru: "Готов к партнёрству" },
      description: {
        en: "B2B for banks, brokers, government",
        uz: "Banklar, brokerlar, hukumat uchun B2B",
        ru: "B2B для банков, брокеров, государства",
      },
      features: {
        en: [
          "Agrobank, Ipak Yuli, Hamkorbank",
          "Jett.uz, Freedom, Avesta",
          "Government institutions",
          "Business associations",
        ],
        uz: [
          "Agrobank, Ipak Yo'li, Hamkorbank",
          "Jett.uz, Freedom, Avesta",
          "Davlat institutlari",
          "Biznes assotsiatsiyalari",
        ],
        ru: [
          "Агробанк, Ипак Йули, Хамкорбанк",
          "Jett.uz, Freedom, Avesta",
          "Государственные учреждения",
          "Бизнес-ассоциации",
        ],
      },
    },
  ]

  return (
    <section id="solution" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            {t("solution.badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("solution.title")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto px-4">{t("solution.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {solutions.map((solution, i) => (
            <Card key={i} className="bg-card border-border hover:shadow-lg transition-shadow overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{solution.title[language]}</h3>
                <p className="text-sm text-muted-foreground mb-4">{solution.description[language]}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.features[language].map((feature, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
