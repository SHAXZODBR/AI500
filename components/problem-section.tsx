"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Ban, Database, Globe, TrendingDown } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ProblemSection() {
  const { t, language } = useLanguage()

  const problems = [
    {
      icon: TrendingDown,
      title: t("problem.card1.title"),
      points: {
        en: [
          "Ordinary people do not invest",
          "Don't understand stocks or markets",
          "Cannot evaluate companies easily",
          "Never used analysis tools",
        ],
        uz: [
          "Oddiy odamlar investitsiya qilmaydi",
          "Aksiyalar va bozorlarni tushunmaydi",
          "Kompaniyalarni osonlik bilan baholay olmaydi",
          "Tahlil vositalaridan foydalanmagan",
        ],
        ru: [
          "Обычные люди не инвестируют",
          "Не понимают акции и рынки",
          "Не могут легко оценить компании",
          "Никогда не использовали аналитические инструменты",
        ],
      },
    },
    {
      icon: Ban,
      title: t("problem.card2.title"),
      points: {
        en: [
          "Companies lack transparent financials",
          "Almost zero analytics available",
          "No indexes exist",
          "No unified scoring system",
        ],
        uz: [
          "Kompaniyalarda shaffof moliyaviy ma'lumotlar yo'q",
          "Deyarli tahlil mavjud emas",
          "Indekslar mavjud emas",
          "Yagona baholash tizimi yo'q",
        ],
        ru: [
          "У компаний нет прозрачной финансовой информации",
          "Почти нулевая аналитика",
          "Индексов не существует",
          "Нет единой системы скоринга",
        ],
      },
    },
    {
      icon: Database,
      title: t("problem.card3.title"),
      points: {
        en: [
          "No AI scoring systems",
          "No predictive analytics",
          "No education tools",
          "Banks have no analytical tools for users",
        ],
        uz: [
          "AI baholash tizimlari yo'q",
          "Bashoratli tahlil yo'q",
          "Ta'lim vositalari yo'q",
          "Banklarda foydalanuvchilar uchun tahlil vositalari yo'q",
        ],
        ru: [
          "Нет систем ИИ-скоринга",
          "Нет предиктивной аналитики",
          "Нет образовательных инструментов",
          "У банков нет аналитических инструментов для пользователей",
        ],
      },
    },
    {
      icon: Globe,
      title: t("problem.card4.title"),
      points: {
        en: [
          "Global AI tools cannot be applied locally",
          "Almost no structured datasets for UZ",
          "Bloomberg, Yahoo don't cover UZ",
          "No regional AI scoring exists",
        ],
        uz: [
          "Global AI vositalari mahalliy darajada qo'llanilmaydi",
          "UZ uchun deyarli strukturaviy ma'lumotlar yo'q",
          "Bloomberg, Yahoo UZ ni qamramaydi",
          "Mintaqaviy AI baholash mavjud emas",
        ],
        ru: [
          "Глобальные ИИ-инструменты не применимы локально",
          "Почти нет структурированных данных для УЗ",
          "Bloomberg, Yahoo не охватывают УЗ",
          "Региональный ИИ-скоринг не существует",
        ],
      },
    },
  ]

  return (
    <section id="problem" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            {t("problem.badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance px-4">
            {t("problem.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4 mb-8">{t("problem.subtitle")}</p>

          <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-destructive/10 border border-destructive/20 mb-8">
            <span className="text-4xl sm:text-5xl font-bold text-destructive">{t("problem.mainStat")}</span>
            <span className="text-sm sm:text-base text-muted-foreground mt-2">{t("problem.mainStatLabel")}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {problems.map((problem, i) => (
            <Card key={i} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{problem.title}</h3>
                <ul className="space-y-2">
                  {problem.points[language].map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
          <p className="text-center text-muted-foreground text-sm sm:text-base">
            <span className="font-semibold text-foreground">{t("problem.result")}</span> {t("problem.resultText")}
          </p>
        </div>
      </div>
    </section>
  )
}
