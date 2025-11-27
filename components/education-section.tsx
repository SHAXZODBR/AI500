"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Target, Award, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function EducationSection() {
  const { t, language } = useLanguage()

  const features = [
    {
      icon: BookOpen,
      title: {
        en: "Personalized Learning Paths",
        uz: "Shaxsiy Ta'lim Yo'llari",
        ru: "Персонализированные пути обучения",
      },
      description: {
        en: "AI adapts content to your knowledge level",
        uz: "AI kontentni bilim darajangizga moslaydi",
        ru: "ИИ адаптирует контент к вашему уровню знаний",
      },
    },
    {
      icon: MessageCircle,
      title: { en: "Ask Any Question", uz: "Har Qanday Savol Bering", ru: "Задайте любой вопрос" },
      description: {
        en: "Get instant answers about investing",
        uz: "Investitsiya haqida tezkor javoblar oling",
        ru: "Получайте мгновенные ответы об инвестировании",
      },
    },
    {
      icon: Target,
      title: { en: "Practice Scenarios", uz: "Amaliy Stsenariylar", ru: "Практические сценарии" },
      description: {
        en: "Learn by simulating real investments",
        uz: "Haqiqiy investitsiyalarni simulyatsiya qilish orqali o'rganing",
        ru: "Учитесь на симуляциях реальных инвестиций",
      },
    },
    {
      icon: Award,
      title: { en: "Earn Certificates", uz: "Sertifikatlar Oling", ru: "Получайте сертификаты" },
      description: {
        en: "Track progress and earn credentials",
        uz: "Rivojlanishni kuzating va sertifikatlar oling",
        ru: "Отслеживайте прогресс и получайте сертификаты",
      },
    },
  ]

  const sampleQuestions = {
    en: ["What is a stock?", "How do indexes work?", "What is diversification?", "How to read financial statements?"],
    uz: [
      "Aksiya nima?",
      "Indekslar qanday ishlaydi?",
      "Diversifikatsiya nima?",
      "Moliyaviy hisobotlarni qanday o'qish kerak?",
    ],
    ru: ["Что такое акция?", "Как работают индексы?", "Что такое диверсификация?", "Как читать финансовую отчётность?"],
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            {t("education.badge")}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("education.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">{t("education.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-4 sm:p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{feature.title[language]}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description[language]}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sample Chat UI */}
          <Card className="bg-card border-border">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">AI Education Assistant</span>
              </div>

              <div className="space-y-3 mb-4">
                {sampleQuestions[language].map((question, i) => (
                  <div key={i} className="p-3 rounded-lg bg-muted hover:bg-muted/80 cursor-pointer transition-colors">
                    <span className="text-sm text-foreground">{question}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-xs sm:text-sm text-muted-foreground italic">
                  {language === "en" && "Click any question to get an AI-powered explanation..."}
                  {language === "uz" && "AI tahlilni olish uchun istalgan savolni bosing..."}
                  {language === "ru" && "Нажмите на любой вопрос для получения ИИ-объяснения..."}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
