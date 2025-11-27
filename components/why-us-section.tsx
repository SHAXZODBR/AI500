"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Target, Cpu, Users, Zap, Lightbulb, Award } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function WhyUsSection() {
  const { t, language } = useLanguage()

  const strengths = [
    {
      icon: Target,
      title: { en: "Local Market Knowledge", uz: "Mahalliy Bozor Bilimi", ru: "Знание местного рынка" },
      description: {
        en: "We understand financial markets in Uzbekistan deeply",
        uz: "Biz O'zbekiston moliyaviy bozorlarini chuqur tushunamiz",
        ru: "Мы глубоко понимаем финансовые рынки Узбекистана",
      },
    },
    {
      icon: Cpu,
      title: { en: "AI/ML Expertise", uz: "AI/ML Tajribasi", ru: "Экспертиза в ИИ/МО" },
      description: {
        en: "Strong AI/ML and data engineering skills",
        uz: "Kuchli AI/ML va ma'lumotlar muhandisligi ko'nikmalari",
        ru: "Сильные навыки в ИИ/МО и инженерии данных",
      },
    },
    {
      icon: Lightbulb,
      title: { en: "Motivated Team", uz: "Motivatsiyali Jamoa", ru: "Мотивированная команда" },
      description: {
        en: "Passionate about improving financial literacy",
        uz: "Moliyaviy savodxonlikni yaxshilashga ishtiyoqli",
        ru: "Увлечены повышением финансовой грамотности",
      },
    },
    {
      icon: Zap,
      title: { en: "Technical Skills", uz: "Texnik Ko'nikmalar", ru: "Технические навыки" },
      description: {
        en: "Experience with Python, ML models, dashboards, and fintech",
        uz: "Python, ML modellari, panellar va fintech tajribasi",
        ru: "Опыт работы с Python, ML моделями, дашбордами и fintech",
      },
    },
    {
      icon: Users,
      title: { en: "Clear Division", uz: "Aniq Taqsimot", ru: "Чёткое разделение" },
      description: {
        en: "Well-defined team roles and responsibilities",
        uz: "Aniq belgilangan jamoa rollari va mas'uliyatlari",
        ru: "Чётко определённые роли и обязанности команды",
      },
    },
    {
      icon: Award,
      title: { en: "Fast Delivery", uz: "Tez Yetkazish", ru: "Быстрая доставка" },
      description: {
        en: "Strong ability to deliver MVPs quickly",
        uz: "MVPlarni tezda yetkazib berish qobiliyati",
        ru: "Сильная способность быстро создавать MVP",
      },
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            {t("whyUs.badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("whyUs.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">{t("whyUs.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {strengths.map((strength, i) => (
            <Card key={i} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <strength.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{strength.title[language]}</h3>
                <p className="text-sm text-muted-foreground">{strength.description[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
