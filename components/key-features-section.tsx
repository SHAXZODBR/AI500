"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, BarChart3, Target, MessageSquare, GraduationCap, Handshake } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function KeyFeaturesSection() {
  const { t, language } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: { en: "AI-Trained Analytics", uz: "AI-O'qitilgan Tahlil", ru: "ИИ-обученная аналитика" },
      description: {
        en: "We train on global index histories, price movements, volume patterns, economic cycles, trading behaviors, technical indicators, and investor sentiment.",
        uz: "Biz global indeks tarixlari, narx harakatlari, hajm naqshlari, iqtisodiy sikllar, savdo xatti-harakatlari, texnik ko'rsatkichlar va investor kayfiyatidan o'rganamiz.",
        ru: "Мы обучаемся на истории мировых индексов, движениях цен, паттернах объёма, экономических циклах, торговом поведении, технических индикаторах и настроениях инвесторов.",
      },
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: { en: "SIGN Indexes", uz: "SIGN Indekslari", ru: "Индексы SIGN" },
      description: {
        en: "The first national indexes: SIGN-10 (Top 10), SIGN-20 (Mid-size), SIGN-50 (Full market), plus sector indexes for Agro, Textile, IT, Energy, and Logistics.",
        uz: "Birinchi milliy indekslar: SIGN-10 (Top 10), SIGN-20 (O'rta), SIGN-50 (To'liq bozor), shuningdek Agro, To'qimachilik, IT, Energiya va Logistika uchun sektor indekslari.",
        ru: "Первые национальные индексы: SIGN-10 (Топ 10), SIGN-20 (Средние), SIGN-50 (Весь рынок), плюс отраслевые индексы для Агро, Текстиля, IT, Энергетики и Логистики.",
      },
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Target,
      title: { en: "AI Company Scoring", uz: "AI Kompaniya Baholash", ru: "ИИ-скоринг компаний" },
      description: {
        en: "Each company receives: Financial health score, Risk evaluation, Growth potential, Market sentiment, Valuation band, and AI-based Investment Readiness Index.",
        uz: "Har bir kompaniya oladi: Moliyaviy salomatlik bahosi, Risk baholash, O'sish potentsiali, Bozor kayfiyati, Baholash diapazoni va AI asosidagi Investitsiya Tayyorligi Indeksi.",
        ru: "Каждая компания получает: Оценку финансового здоровья, Оценку рисков, Потенциал роста, Рыночные настроения, Диапазон оценки и ИИ-индекс готовности к инвестициям.",
      },
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: { en: "AI Investor Mode", uz: "AI Investor Rejimi", ru: "Режим ИИ-инвестора" },
      description: {
        en: "Ask any question, get recommendations, learn how indicators work, view predicted scenarios, and understand risks instantly.",
        uz: "Har qanday savol bering, tavsiyalar oling, ko'rsatkichlar qanday ishlashini o'rganing, bashorat qilingan stsenariylarni ko'ring va risklarni darhol tushuning.",
        ru: "Задайте любой вопрос, получите рекомендации, узнайте как работают индикаторы, просмотрите прогнозируемые сценарии и мгновенно поймите риски.",
      },
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: GraduationCap,
      title: { en: "Education Layer", uz: "Ta'lim Qatlami", ru: "Образовательный слой" },
      description: {
        en: "Built-in courses: Investing basics, Risk management, How indexes work, How to read company reports, AI-certified learning modules.",
        uz: "Ichki kurslar: Investitsiya asoslari, Risk boshqaruvi, Indekslar qanday ishlaydi, Kompaniya hisobotlarini o'qish, AI-sertifikatlangan o'quv modullari.",
        ru: "Встроенные курсы: Основы инвестирования, Управление рисками, Как работают индексы, Как читать отчёты компаний, Модули с ИИ-сертификацией.",
      },
      gradient: "from-teal-500 to-green-500",
    },
    {
      icon: Handshake,
      title: { en: "Partnership Ready", uz: "Hamkorlikka Tayyor", ru: "Готов к партнёрству" },
      description: {
        en: "Ready for banks (Agrobank, Ipak Yuli, Hamkorbank), brokers (Jett.uz, Freedom, Avesta), government institutions, and business associations.",
        uz: "Banklar (Agrobank, Ipak Yo'li, Hamkorbank), brokerlar (Jett.uz, Freedom, Avesta), davlat institutlari va biznes assotsiatsiyalari uchun tayyor.",
        ru: "Готов для банков (Агробанк, Ипак Йули, Хамкорбанк), брокеров (Jett.uz, Freedom, Avesta), государственных учреждений и бизнес-ассоциаций.",
      },
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="features" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="secondary" className="mb-4">
            {t("features.badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">{t("features.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="bg-card border-border hover:shadow-lg transition-all group overflow-hidden">
              <CardContent className="p-5 sm:p-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title[language]}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
