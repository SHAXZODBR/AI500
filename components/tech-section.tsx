"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, Code, Cloud } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function TechSection() {
  const { t, language } = useLanguage()

  const howItWorks = {
    en: [
      "SIGN uses 4 layers of AI models to analyze companies",
      "We combine financial data, news sentiment, and machine learning",
      "Transfer learning from global markets fills local data gaps",
      "The system creates risk scores and investment indexes",
    ],
    uz: [
      "SIGN kompaniyalarni tahlil qilish uchun 4 qatlam AI modellaridan foydalanadi",
      "Biz moliyaviy ma'lumotlar, yangiliklar sentimenti va mashinali o'rganishni birlashtiramiz",
      "Jahon bozorlaridan transfer o'rganish mahalliy ma'lumotlar bo'shliqlarini to'ldiradi",
      "Tizim risk baholari va investitsiya indekslarini yaratadi",
    ],
    ru: [
      "SIGN использует 4 слоя ИИ-моделей для анализа компаний",
      "Мы объединяем финансовые данные, настроения новостей и машинное обучение",
      "Трансферное обучение от глобальных рынков заполняет пробелы в локальных данных",
      "Система создаёт оценки риска и инвестиционные индексы",
    ],
  }

  const techCategories = [
    {
      icon: Brain,
      title: { en: "AI & Machine Learning", uz: "AI va Mashinali O'rganish", ru: "ИИ и машинное обучение" },
      items: ["Python", "PyTorch", "LSTM", "Transformers"],
      color: "bg-chart-1",
    },
    {
      icon: Database,
      title: { en: "Data & Backend", uz: "Ma'lumotlar va Backend", ru: "Данные и Backend" },
      items: ["PostgreSQL", "FastAPI", "Redis"],
      color: "bg-chart-2",
    },
    {
      icon: Code,
      title: { en: "Frontend", uz: "Frontend", ru: "Frontend" },
      items: ["Next.js", "React", "TypeScript"],
      color: "bg-chart-3",
    },
    {
      icon: Cloud,
      title: { en: "Infrastructure", uz: "Infratuzilma", ru: "Инфраструктура" },
      items: ["Docker", "Cloud", "CI/CD"],
      color: "bg-chart-4",
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="secondary" className="mb-4">
            {t("tech.badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language === "en"
              ? "How SIGN Works (Simple Explanation)"
              : language === "uz"
                ? "SIGN Qanday Ishlaydi (Oddiy Tushuntirish)"
                : "Как работает SIGN (простое объяснение)"}
          </h2>
        </div>

        {/* Simple explanation */}
        <Card className="bg-card border-border mb-8">
          <CardContent className="p-5 sm:p-6">
            <ul className="space-y-3">
              {howItWorks[language].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Tech Stack Grid - simplified */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techCategories.map((category, i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="p-4 sm:p-5">
                <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center mb-3`}>
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-3 text-sm">{category.title[language]}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {language === "en"
            ? "Full technical documentation available separately for detailed review."
            : language === "uz"
              ? "To'liq texnik hujjatlar batafsil ko'rib chiqish uchun alohida mavjud."
              : "Полная техническая документация доступна отдельно для детального изучения."}
        </p>
      </div>
    </section>
  )
}
