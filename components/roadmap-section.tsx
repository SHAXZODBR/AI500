"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Circle, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function RoadmapSection() {
  const { t, language } = useLanguage()

  const roadmapItems = [
    {
      date: { en: "November 2025", uz: "Noyabr 2025", ru: "Ноябрь 2025" },
      title: {
        en: "Learning Global Index Patterns",
        uz: "Global Indeks Naqshlarini O'rganish",
        ru: "Изучение паттернов мировых индексов",
      },
      status: "current",
      items: {
        en: ["Study S&P500, NASDAQ, FTSE patterns", "Build transfer learning model", "Create initial dataset"],
        uz: [
          "S&P500, NASDAQ, FTSE naqshlarini o'rganish",
          "Transfer o'rganish modelini yaratish",
          "Dastlabki ma'lumotlar to'plamini yaratish",
        ],
        ru: [
          "Изучение паттернов S&P500, NASDAQ, FTSE",
          "Создание модели трансферного обучения",
          "Создание начального датасета",
        ],
      },
    },
    {
      date: { en: "Dec 2025", uz: "Dek 2025", ru: "Дек 2025" },
      title: { en: "MVP Development", uz: "MVP Rivojlantirish", ru: "Разработка MVP" },
      status: "upcoming",
      items: {
        en: [
          "Core AI architecture",
          "Data pipeline prototype",
          "UZ-10 Index engine",
          "Landing page + educational layer",
          "Early beta UI",
          "Partnership outreach",
        ],
        uz: [
          "Asosiy AI arxitekturasi",
          "Ma'lumotlar quvuri prototipi",
          "UZ-10 Indeks mexanizmi",
          "Landing sahifa + ta'lim qatlami",
          "Erta beta UI",
          "Hamkorlik muzokaralari",
        ],
        ru: [
          "Базовая архитектура ИИ",
          "Прототип пайплайна данных",
          "Движок индекса UZ-10",
          "Лендинг + образовательный слой",
          "Ранний бета UI",
          "Поиск партнёров",
        ],
      },
    },
    {
      date: { en: "January 2026", uz: "Yanvar 2026", ru: "Январь 2026" },
      title: { en: "Closed Beta", uz: "Yopiq Beta", ru: "Закрытая бета" },
      status: "upcoming",
      items: {
        en: [
          "Closed Beta testing",
          "UZ-50 Index",
          "AI forecasting module",
          "Technical indicator AI learning",
          "Company scoring alpha",
        ],
        uz: [
          "Yopiq Beta test",
          "UZ-50 Indeksi",
          "AI bashorat moduli",
          "Texnik indikator AI o'rganishi",
          "Kompaniya baholash alfa",
        ],
        ru: [
          "Тестирование закрытой беты",
          "Индекс UZ-50",
          "Модуль ИИ-прогнозирования",
          "Обучение ИИ техническим индикаторам",
          "Альфа скоринга компаний",
        ],
      },
    },
    {
      date: { en: "February 2026", uz: "Fevral 2026", ru: "Февраль 2026" },
      title: { en: "Public Beta Launch", uz: "Ommaviy Beta", ru: "Публичная бета" },
      status: "upcoming",
      items: {
        en: ["AI sentiment engine", "Sector heatmaps", "User portfolios", "Full dashboard release"],
        uz: [
          "AI sentiment mexanizmi",
          "Sektor issiqlik xaritalari",
          "Foydalanuvchi portfellari",
          "To'liq panel chiqarilishi",
        ],
        ru: ["ИИ движок настроений", "Секторные хитмапы", "Пользовательские портфели", "Полный релиз дашборда"],
      },
    },
    {
      date: { en: "Mar-Jun 2026", uz: "Mar-Iyn 2026", ru: "Мар-Июн 2026" },
      title: { en: "Full Launch + Mobile", uz: "To'liq Ishga Tushirish + Mobil", ru: "Полный запуск + Мобильный" },
      status: "upcoming",
      items: {
        en: [
          "Mobile app launch",
          "API for banks",
          "Broker referral integration",
          "Regional indexes (SAM-20, FER-15)",
          "News impact prediction",
        ],
        uz: [
          "Mobil ilova ishga tushirilishi",
          "Banklar uchun API",
          "Broker referal integratsiyasi",
          "Mintaqaviy indekslar (SAM-20, FER-15)",
          "Yangiliklar ta'siri bashorati",
        ],
        ru: [
          "Запуск мобильного приложения",
          "API для банков",
          "Интеграция с брокерами",
          "Региональные индексы (SAM-20, FER-15)",
          "Прогнозирование влияния новостей",
        ],
      },
    },
    {
      date: { en: "Jul-Dec 2026", uz: "Iyl-Dek 2026", ru: "Июл-Дек 2026" },
      title: { en: "Regional Expansion", uz: "Mintaqaviy Kengayish", ru: "Региональное расширение" },
      status: "upcoming",
      items: {
        en: [
          "SME scoring marketplace",
          "White-label AI for banks",
          "Kazakhstan expansion (KZ-30)",
          "Kyrgyzstan & Tajikistan",
        ],
        uz: [
          "KO'B baholash bozori",
          "Banklar uchun White-label AI",
          "Qozog'istonga kengayish (KZ-30)",
          "Qirg'iziston va Tojikiston",
        ],
        ru: [
          "Маркетплейс скоринга МСБ",
          "White-label ИИ для банков",
          "Расширение в Казахстан (KZ-30)",
          "Кыргызстан и Таджикистан",
        ],
      },
    },
  ]

  return (
    <section id="roadmap" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="secondary" className="mb-4">
            {t("roadmap.badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{t("roadmap.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">{t("roadmap.subtitle")}</p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-6 md:space-y-8">
            {roadmapItems.map((item, i) => (
              <div key={i} className="relative flex md:items-center">
                {/* Mobile: All cards on right side. Desktop: Alternating */}
                <div
                  className={`w-full md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
                >
                  <Card className={`bg-card border-border ${item.status === "current" ? "ring-2 ring-primary" : ""}`}>
                    <CardContent className="p-4 sm:p-6">
                      <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        {item.status === "completed" && (
                          <Badge className="bg-chart-2 text-white">{t("roadmap.completed")}</Badge>
                        )}
                        {item.status === "current" && (
                          <Badge className="bg-primary text-primary-foreground">{t("roadmap.inProgress")}</Badge>
                        )}
                        {item.status === "upcoming" && <Badge variant="outline">{t("roadmap.upcoming")}</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.date[language]}</p>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3">
                        {item.title[language]}
                      </h3>
                      <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        {item.items[language].map((task, j) => (
                          <li
                            key={j}
                            className={`flex items-center gap-2 text-xs sm:text-sm text-muted-foreground ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                          >
                            {item.status === "completed" || item.status === "current" ? (
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                            )}
                            {task}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-4 border-background" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
