"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function CompetitorsSection() {
  const { language } = useLanguage()

  const comparisonFeatures = [
    { key: "aiIndexes", en: "AI Indexes", uz: "AI Indekslar", ru: "ИИ-индексы" },
    { key: "aiScoring", en: "AI Scoring", uz: "AI Baholash", ru: "ИИ-скоринг" },
    { key: "uzSupport", en: "UZ Market Support", uz: "UZ Bozor Qo'llab-quvvatlashi", ru: "Поддержка рынка УЗ" },
    { key: "beginnerFriendly", en: "Beginner-friendly", uz: "Yangi boshlovchilar uchun", ru: "Для начинающих" },
    { key: "education", en: "Education Built-in", uz: "O'rnatilgan Ta'lim", ru: "Встроенное образование" },
  ]

  const competitors = [
    {
      name: "SIGN",
      highlight: true,
      features: { aiIndexes: true, aiScoring: true, uzSupport: true, beginnerFriendly: true, education: true },
    },
    {
      name: "Jett.uz",
      highlight: false,
      features: { aiIndexes: false, aiScoring: false, uzSupport: "partial", beginnerFriendly: false, education: false },
    },
    {
      name: { en: "Local Brokers", uz: "Mahalliy Brokerlar", ru: "Местные брокеры" },
      highlight: false,
      features: { aiIndexes: false, aiScoring: false, uzSupport: "partial", beginnerFriendly: false, education: false },
    },
    {
      name: "TradingView",
      highlight: false,
      features: { aiIndexes: false, aiScoring: false, uzSupport: false, beginnerFriendly: false, education: false },
    },
    {
      name: "Yahoo/Bloomberg",
      highlight: false,
      features: { aiIndexes: false, aiScoring: false, uzSupport: false, beginnerFriendly: false, education: false },
    },
  ]

  const renderFeatureCell = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />
    if (value === "partial") return <span className="text-xs text-muted-foreground">Partial</span>
    return <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="secondary" className="mb-4">
            {language === "en"
              ? "Competitive Positioning"
              : language === "uz"
                ? "Raqobat Pozitsiyasi"
                : "Конкурентная позиция"}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {language === "en"
              ? "Feature Comparison"
              : language === "uz"
                ? "Xususiyatlar Taqqoslashi"
                : "Сравнение возможностей"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            {language === "en"
              ? "How SIGN compares to existing options in the market."
              : language === "uz"
                ? "SIGN bozordagi mavjud variantlar bilan qanday taqqoslanadi."
                : "Как SIGN сравнивается с существующими вариантами на рынке."}
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="bg-card border-border overflow-hidden mb-8">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">
                      {language === "en" ? "Feature" : language === "uz" ? "Xususiyat" : "Функция"}
                    </th>
                    {competitors.map((comp, i) => (
                      <th
                        key={i}
                        className={`text-center p-4 font-semibold ${comp.highlight ? "bg-primary/10 text-primary" : "text-foreground"}`}
                      >
                        {typeof comp.name === "string" ? comp.name : comp.name[language]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="p-4 text-foreground">{feature[language]}</td>
                      {competitors.map((comp, j) => (
                        <td key={j} className={`p-4 text-center ${comp.highlight ? "bg-primary/5" : ""}`}>
                          {renderFeatureCell(comp.features[feature.key as keyof typeof comp.features])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-card border-border">
          <CardContent className="p-5 sm:p-6">
            <p className="text-center text-foreground">
              {language === "en"
                ? "No local or global competitor currently offers AI-driven indexes and scoring specifically for Uzbekistan."
                : language === "uz"
                  ? "Hozirda hech qanday mahalliy yoki global raqobatchi O'zbekiston uchun maxsus AI indekslari va baholashni taklif qilmaydi."
                  : "Ни один локальный или глобальный конкурент сейчас не предлагает ИИ-индексы и скоринг специально для Узбекистана."}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
