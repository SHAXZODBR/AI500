"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Building2, Handshake, FileText, Database } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function BusinessModelSection() {
  const { t, language } = useLanguage()

  const models = [
    {
      icon: Users,
      title: { en: "B2C — Freemium", uz: "B2C — Freemium", ru: "B2C — Freemium" },
      price: { en: "30-100k UZS/mo", uz: "30-100 ming UZS/oy", ru: "30-100 тыс. UZS/мес" },
      items: {
        en: [
          "Free: Basic analytics, indexes, education",
          "Premium: AI forecasts, Risk scoring, Custom dashboards, Portfolio optimization, Price predictions",
        ],
        uz: [
          "Bepul: Asosiy tahlil, indekslar, ta'lim",
          "Premium: AI bashoratlari, Risk baholash, Maxsus panellar, Portfelni optimallashtirish, Narx bashoratlari",
        ],
        ru: [
          "Бесплатно: Базовая аналитика, индексы, образование",
          "Премиум: ИИ-прогнозы, Скоринг рисков, Кастомные дашборды, Оптимизация портфеля, Прогнозы цен",
        ],
      },
    },
    {
      icon: Building2,
      title: { en: "B2B — SaaS Licensing", uz: "B2B — SaaS Litsenziya", ru: "B2B — SaaS Лицензирование" },
      price: { en: "Enterprise pricing", uz: "Korporativ narxlar", ru: "Корпоративные цены" },
      items: {
        en: [
          "Banks, brokers, funds pay for:",
          "AI dashboards & Sector heatmaps",
          "Algorithmic scoring & Risk engine",
          "API access & White-label integration",
        ],
        uz: [
          "Banklar, brokerlar, fondlar to'laydi:",
          "AI panellari va Sektor issiqlik xaritalari",
          "Algoritmik baholash va Risk mexanizmi",
          "API kirish va White-label integratsiya",
        ],
        ru: [
          "Банки, брокеры, фонды платят за:",
          "ИИ-дашборды и Секторные хитмапы",
          "Алгоритмический скоринг и Риск-движок",
          "API доступ и White-label интеграцию",
        ],
      },
    },
    {
      icon: Handshake,
      title: { en: "Broker Partnerships", uz: "Broker Hamkorliklari", ru: "Партнёрства с брокерами" },
      price: { en: "Revenue share", uz: "Daromad ulushi", ru: "Разделение выручки" },
      items: {
        en: [
          "Redirect users to: Jett.uz, Freedom Broker, Avesta",
          "Referral fees",
          "% of account funded",
          "Revenue share model",
        ],
        uz: [
          "Foydalanuvchilarni yo'naltirish: Jett.uz, Freedom Broker, Avesta",
          "Referal to'lovlari",
          "Hisobga tushgan foiz",
          "Daromad ulushi modeli",
        ],
        ru: [
          "Перенаправление пользователей: Jett.uz, Freedom Broker, Avesta",
          "Реферальные сборы",
          "% от пополнения счёта",
          "Модель разделения выручки",
        ],
      },
    },
    {
      icon: FileText,
      title: { en: "Company Listings", uz: "Kompaniya Ro'yxatlari", ru: "Листинг компаний" },
      price: { en: "Per company", uz: "Har bir kompaniya uchun", ru: "За компанию" },
      items: {
        en: [
          "Local companies pay for:",
          "Investment readiness scoring",
          "AI financial health certification",
          "Public listing on SIGN platform",
        ],
        uz: [
          "Mahalliy kompaniyalar to'laydi:",
          "Investitsiya tayyorligi baholash",
          "AI moliyaviy salomatlik sertifikati",
          "SIGN platformasida ommaviy ro'yxat",
        ],
        ru: [
          "Местные компании платят за:",
          "Скоринг готовности к инвестициям",
          "Сертификация финансового здоровья ИИ",
          "Публичный листинг на платформе SIGN",
        ],
      },
    },
    {
      icon: Database,
      title: { en: "Data-as-a-Service", uz: "Data-as-a-Service", ru: "Data-as-a-Service" },
      price: { en: "API pricing", uz: "API narxlari", ru: "Цены на API" },
      items: {
        en: ["AI sentiment API", "Index history data", "Market analytics datasets", "Research-grade data"],
        uz: [
          "AI sentiment API",
          "Indeks tarixi ma'lumotlari",
          "Bozor tahlili ma'lumotlar to'plamlari",
          "Tadqiqot darajasidagi ma'lumotlar",
        ],
        ru: [
          "API настроений ИИ",
          "Данные истории индексов",
          "Датасеты рыночной аналитики",
          "Данные исследовательского уровня",
        ],
      },
    },
  ]

  return (
    <section id="business" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="secondary" className="mb-4">
            {t("business.badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("business.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">{t("business.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {models.slice(0, 3).map((model, i) => (
            <Card key={i} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <model.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="outline">{model.price[language]}</Badge>
                </div>
                <CardTitle className="text-lg">{model.title[language]}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {model.items[language].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6 max-w-2xl mx-auto">
          {models.slice(3).map((model, i) => (
            <Card key={i} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <model.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="outline">{model.price[language]}</Badge>
                </div>
                <CardTitle className="text-lg">{model.title[language]}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {model.items[language].map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
