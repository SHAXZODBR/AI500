"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  TrendingDown,
  Minus,
  BarChart3,
  PieChart,
  Activity,
  Wheat,
  Factory,
  Flame,
  MessageSquare,
  Cpu,
  Truck,
} from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const indexCompanies = [
  { name: "UzAuto Motors", score: 8.2, trend: "up" },
  { name: "UzMetKombinat", score: 7.5, trend: "up" },
  { name: "Qizilqum Cement", score: 7.8, trend: "stable" },
  { name: "Almalyk MMC", score: 8.0, trend: "up" },
  { name: "Navoiy Mining", score: 7.2, trend: "down" },
]

export function DemoSection() {
  const { t, language } = useLanguage()

  const indexes = [
    {
      name: "SIGN-10",
      title: { en: "Top 10 Companies", uz: "Top 10 Kompaniyalar", ru: "Топ 10 компаний" },
      description: {
        en: "Simple, easy to understand, high visibility",
        uz: "Oddiy, tushunarli, yuqori ko'rinuvchanlik",
        ru: "Простой, понятный, высокая видимость",
      },
      risk: { en: "Medium", uz: "O'rta", ru: "Средний" },
      return: "+18.5%",
      volatility: { en: "Medium", uz: "O'rta", ru: "Средняя" },
      icon: BarChart3,
      color: "bg-primary",
    },
    {
      name: "SIGN-20",
      title: { en: "Mid-Cap Companies", uz: "O'rta Kapitalli", ru: "Средняя капитализация" },
      description: {
        en: "Growing core of the market",
        uz: "Bozorning o'suvchi yadrosi",
        ru: "Растущее ядро рынка",
      },
      risk: { en: "Medium", uz: "O'rta", ru: "Средний" },
      return: "+14.2%",
      volatility: { en: "Medium", uz: "O'rta", ru: "Средняя" },
      icon: PieChart,
      color: "bg-chart-2",
    },
    {
      name: "SIGN-50",
      title: { en: "Broad Market Index", uz: "Keng Bozor Indeksi", ru: "Индекс всего рынка" },
      description: {
        en: "Captures the whole Uzbek ecosystem",
        uz: "Butun O'zbek ekotizimini qamrab oladi",
        ru: "Охватывает всю узбекскую экосистему",
      },
      risk: { en: "Low-Medium", uz: "Past-O'rta", ru: "Низко-средний" },
      return: "+11.8%",
      volatility: { en: "Low", uz: "Past", ru: "Низкая" },
      icon: Activity,
      color: "bg-chart-3",
    },
    {
      name: "SIGN-Agro",
      title: { en: "Agriculture Sector", uz: "Qishloq Xo'jaligi", ru: "Сельское хозяйство" },
      description: {
        en: "Top agricultural companies",
        uz: "Top qishloq xo'jaligi kompaniyalari",
        ru: "Топ сельхоз компаний",
      },
      risk: { en: "Medium", uz: "O'rta", ru: "Средний" },
      return: "+14.3%",
      volatility: { en: "Medium", uz: "O'rta", ru: "Средняя" },
      icon: Wheat,
      color: "bg-chart-4",
    },
    {
      name: "SIGN-Textile",
      title: { en: "Textile Sector", uz: "To'qimachilik", ru: "Текстиль" },
      description: {
        en: "Top textile & apparel",
        uz: "Top to'qimachilik va kiyim-kechak",
        ru: "Топ текстиль и одежда",
      },
      risk: { en: "Medium", uz: "O'rta", ru: "Средний" },
      return: "+12.7%",
      volatility: { en: "Medium", uz: "O'rta", ru: "Средняя" },
      icon: Factory,
      color: "bg-chart-5",
    },
    {
      name: "SIGN-IT",
      title: { en: "IT & Tech Sector", uz: "IT va Texnologiya", ru: "IT и технологии" },
      description: {
        en: "Technology companies",
        uz: "Texnologiya kompaniyalari",
        ru: "Технологические компании",
      },
      risk: { en: "High", uz: "Yuqori", ru: "Высокий" },
      return: "+22.5%",
      volatility: { en: "High", uz: "Yuqori", ru: "Высокая" },
      icon: Cpu,
      color: "bg-chart-1",
    },
    {
      name: "SIGN-Energy",
      title: { en: "Energy Sector", uz: "Energiya Sektori", ru: "Энергетика" },
      description: {
        en: "Energy & utilities",
        uz: "Energiya va kommunal",
        ru: "Энергетика и ЖКХ",
      },
      risk: { en: "Low", uz: "Past", ru: "Низкий" },
      return: "+9.8%",
      volatility: { en: "Low", uz: "Past", ru: "Низкая" },
      icon: Flame,
      color: "bg-orange-500",
    },
    {
      name: "SIGN-Logistics",
      title: { en: "Logistics Sector", uz: "Logistika Sektori", ru: "Логистика" },
      description: {
        en: "Transport & logistics",
        uz: "Transport va logistika",
        ru: "Транспорт и логистика",
      },
      risk: { en: "Medium", uz: "O'rta", ru: "Средний" },
      return: "+13.1%",
      volatility: { en: "Medium", uz: "O'rta", ru: "Средняя" },
      icon: Truck,
      color: "bg-cyan-500",
    },
  ]

  const aiReasons = {
    en: [
      "15% average revenue growth",
      "Low debt ratio across companies",
      "Stable competitive position",
      "Positive sentiment score",
    ],
    uz: [
      "15% o'rtacha daromad o'sishi",
      "Kompaniyalarda past qarz nisbati",
      "Barqaror raqobat pozitsiyasi",
      "Ijobiy sentiment bahosi",
    ],
    ru: [
      "15% средний рост выручки",
      "Низкий коэффициент долга",
      "Стабильная конкурентная позиция",
      "Положительный sentiment",
    ],
  }

  const companyAnalysis = {
    strengths: {
      en: "Revenue growth, export potential",
      uz: "Daromad o'sishi, eksport potensiali",
      ru: "Рост выручки, экспортный потенциал",
    },
    weaknesses: {
      en: "FX exposure, volatility",
      uz: "Valyuta ta'siri, o'zgaruvchanlik",
      ru: "Валютные риски, волатильность",
    },
  }

  return (
    <section id="demo" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="outline" className="mb-4">
            {t("demo.badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{t("demo.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">{t("demo.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-base sm:text-lg">SIGN-10 Index</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {language === "en"
                      ? "Top 10 Uzbek Companies"
                      : language === "uz"
                        ? "Top 10 O'zbek Kompaniyalari"
                        : "Топ 10 узбекских компаний"}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3 mb-6">
                {indexCompanies.map((company, i) => (
                  <div key={i} className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                        {i + 1}
                      </span>
                      <span className="font-medium text-foreground text-sm sm:text-base">{company.name}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-sm font-semibold text-foreground">{company.score}</span>
                      {company.trend === "up" && <TrendingUp className="w-4 h-4 text-chart-2" />}
                      {company.trend === "down" && <TrendingDown className="w-4 h-4 text-destructive" />}
                      {company.trend === "stable" && <Minus className="w-4 h-4 text-muted-foreground" />}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 sm:p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm font-medium text-foreground mb-2">{t("demo.aiSelected")}</p>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  {aiReasons[language].map((reason, i) => (
                    <li key={i}>• {reason}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Company Analysis + AI Investor Mode */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <Activity className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-base sm:text-lg">UzAuto Motors</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {language === "en"
                        ? "AI Company Scoring"
                        : language === "uz"
                          ? "AI Kompaniya Baholash"
                          : "ИИ-скоринг компании"}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{t("demo.aiScore")}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-primary">7.8 / 10</p>
                  </div>
                  <Badge variant="secondary" className="text-xs sm:text-sm">
                    {language === "en"
                      ? "Investment Ready"
                      : language === "uz"
                        ? "Investitsiyaga Tayyor"
                        : "Готов к инвестициям"}
                  </Badge>
                </div>
                <div className="space-y-3 mb-4">
                  {[
                    {
                      label: { en: "Financial Health", uz: "Moliyaviy Salomatlik", ru: "Финансовое здоровье" },
                      value: 85,
                    },
                    { label: { en: "Growth Potential", uz: "O'sish Potensiali", ru: "Потенциал роста" }, value: 72 },
                    { label: { en: "Risk Score", uz: "Risk Bahosi", ru: "Оценка риска" }, value: 58 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{item.label[language]}</span>
                        <span className="font-medium text-foreground">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${i === 0 ? "bg-chart-1" : i === 1 ? "bg-chart-2" : "bg-chart-3"}`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-chart-2/10 border border-chart-2/20">
                    <p className="text-xs text-muted-foreground mb-1">{t("demo.strengths")}</p>
                    <p className="text-xs sm:text-sm font-medium text-foreground">
                      {companyAnalysis.strengths[language]}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <p className="text-xs text-muted-foreground mb-1">{t("demo.weaknesses")}</p>
                    <p className="text-xs sm:text-sm font-medium text-foreground">
                      {companyAnalysis.weaknesses[language]}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border border-primary/30">
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t("demo.investorMode")}</p>
                    <p className="text-xs text-muted-foreground">{t("demo.askAnything")}</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 text-sm text-muted-foreground italic">
                  {language === "en" && '"Which companies in SIGN-10 have the lowest risk?"'}
                  {language === "uz" && '"SIGN-10 dagi qaysi kompaniyalar eng past riskga ega?"'}
                  {language === "ru" && '"Какие компании в SIGN-10 имеют наименьший риск?"'}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Index Comparison */}
        <div className="mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 text-center">
            {t("demo.indexComparison")}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {indexes.map((index, i) => (
              <Card key={i} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${index.color} flex items-center justify-center`}>
                      <index.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{index.name}</p>
                      <p className="text-xs text-muted-foreground">{index.title[language]}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{index.description[language]}</p>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("demo.riskLevel")}</span>
                      <span className="font-medium text-foreground">{index.risk[language]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("demo.estReturn")}</span>
                      <span className="font-medium text-chart-2">{index.return}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("demo.volatility")}</span>
                      <span className="font-medium text-foreground">{index.volatility[language]}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
