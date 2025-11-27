"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Building2, Landmark, MessageSquare, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function HowSignHelpsSection() {
  const { language } = useLanguage()

  const examples = [
    {
      icon: User,
      user: { en: "Beginner Investor", uz: "Yangi Investor", ru: "Начинающий инвестор" },
      question: {
        en: '"Is this company risky? Should I invest?"',
        uz: '"Bu kompaniya xavflimi? Investitsiya qilishim kerakmi?"',
        ru: '"Эта компания рискованная? Стоит ли инвестировать?"',
      },
      signResponse: {
        en: [
          "Shows AI risk score (0-100)",
          "Explains key risks in simple language",
          "Compares with similar companies",
          "Suggests safer alternatives if needed",
        ],
        uz: [
          "AI risk bahosini ko'rsatadi (0-100)",
          "Asosiy risklarni oddiy tilda tushuntiradi",
          "O'xshash kompaniyalar bilan taqqoslaydi",
          "Kerak bo'lsa xavfsizroq alternativalarni taklif qiladi",
        ],
        ru: [
          "Показывает ИИ-оценку риска (0-100)",
          "Объясняет ключевые риски простым языком",
          "Сравнивает с похожими компаниями",
          "Предлагает более безопасные альтернативы",
        ],
      },
      color: "bg-chart-1",
    },
    {
      icon: Building2,
      user: { en: "Bank / Financial Institution", uz: "Bank / Moliya Tashkiloti", ru: "Банк / Финучреждение" },
      question: {
        en: '"We need to analyze SME credit risk quickly."',
        uz: '"KKB kredit riskini tez tahlil qilishimiz kerak."',
        ru: '"Нам нужно быстро анализировать кредитный риск МСБ."',
      },
      signResponse: {
        en: [
          "AI-powered risk scoring engine",
          "Financial health index for each company",
          "Automated credit assessment",
          "Batch processing for portfolios",
        ],
        uz: [
          "AI asosidagi risk baholash tizimi",
          "Har bir kompaniya uchun moliyaviy salomatlik indeksi",
          "Avtomatlashtirilgan kredit baholash",
          "Portfellar uchun to'plamli qayta ishlash",
        ],
        ru: [
          "ИИ-система оценки рисков",
          "Индекс финансового здоровья для каждой компании",
          "Автоматизированная оценка кредитоспособности",
          "Пакетная обработка портфелей",
        ],
      },
      color: "bg-chart-2",
    },
    {
      icon: Landmark,
      user: { en: "Government / Regulator", uz: "Hukumat / Regulyator", ru: "Государство / Регулятор" },
      question: {
        en: '"How healthy is the textile sector right now?"',
        uz: "\"Hozir to'qimachilik sektori qanchalik sog'lom?\"",
        ru: '"Насколько здоров текстильный сектор сейчас?"',
      },
      signResponse: {
        en: [
          "Sector heatmaps showing health trends",
          "Index movement tracking over time",
          "Early warning signals for problems",
          "Data-driven policy insights",
        ],
        uz: [
          "Salomatlik tendentsiyalarini ko'rsatuvchi sektor issiqlik xaritalari",
          "Vaqt davomida indeks harakatini kuzatish",
          "Muammolar uchun erta ogohlantirish signallari",
          "Ma'lumotlarga asoslangan siyosat tushunchalari",
        ],
        ru: [
          "Тепловые карты секторов с трендами здоровья",
          "Отслеживание движения индексов во времени",
          "Ранние сигналы о проблемах",
          "Аналитика для политических решений",
        ],
      },
      color: "bg-chart-3",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="secondary" className="mb-4">
            {language === "en" ? "Real-World Examples" : language === "uz" ? "Haqiqiy Misollar" : "Реальные примеры"}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {language === "en"
              ? "How SIGN Helps People"
              : language === "uz"
                ? "SIGN Odamlarga Qanday Yordam Beradi"
                : "Как SIGN помогает людям"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            {language === "en"
              ? "Simple examples showing how different users benefit from SIGN."
              : language === "uz"
                ? "Turli foydalanuvchilar SIGN dan qanday foyda olishini ko'rsatuvchi oddiy misollar."
                : "Простые примеры того, как разные пользователи получают пользу от SIGN."}
          </p>
        </div>

        <div className="space-y-6">
          {examples.map((example, i) => (
            <Card key={i} className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* User Question */}
                  <div className="p-5 sm:p-6 border-b md:border-b-0 md:border-r border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg ${example.color} flex items-center justify-center`}>
                        <example.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{example.user[language]}</p>
                        <p className="text-xs text-muted-foreground">
                          {language === "en" ? "asks:" : language === "uz" ? "so'raydi:" : "спрашивает:"}
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border">
                      <MessageSquare className="w-4 h-4 text-muted-foreground mb-2" />
                      <p className="text-foreground italic">{example.question[language]}</p>
                    </div>
                  </div>

                  {/* SIGN Response */}
                  <div className="p-5 sm:p-6 bg-primary/5">
                    <div className="flex items-center gap-2 mb-4">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <p className="font-semibold text-primary">
                        {language === "en"
                          ? "SIGN provides:"
                          : language === "uz"
                            ? "SIGN taqdim etadi:"
                            : "SIGN предоставляет:"}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {example.signResponse[language].map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
