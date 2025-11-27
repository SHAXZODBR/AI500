"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, GraduationCap, Building2, Users, TrendingUp, Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ImpactSection() {
  const { t, language } = useLanguage()

  const impacts = [
    {
      icon: GraduationCap,
      title: {
        en: "Financial Literacy for Youth",
        uz: "Yoshlar Uchun Moliyaviy Savodxonlik",
        ru: "Финансовая грамотность для молодёжи",
      },
      description: {
        en: "Educate the next generation on investing basics, market dynamics, and wealth building.",
        uz: "Keyingi avlodni investitsiya asoslari, bozor dinamikasi va boylik yaratish haqida o'qitish.",
        ru: "Обучение нового поколения основам инвестирования, динамике рынка и созданию богатства.",
      },
    },
    {
      icon: Building2,
      title: { en: "SME Transparency", uz: "KO'B Shaffofligi", ru: "Прозрачность МСБ" },
      description: {
        en: "Help small and medium enterprises become investment-ready with clear scoring and reporting.",
        uz: "Kichik va o'rta korxonalarga aniq baholash va hisobot bilan investitsiyaga tayyorlanishda yordam berish.",
        ru: "Помощь малым и средним предприятиям стать готовыми к инвестициям с чётким скорингом и отчётностью.",
      },
    },
    {
      icon: Users,
      title: { en: "Investment Culture", uz: "Investitsiya Madaniyati", ru: "Инвестиционная культура" },
      description: {
        en: "Transform Uzbekistan from less than 1% investing to a nation of confident investors.",
        uz: "O'zbekistonni 1% dan kam investitsiya qiluvchilardan ishonchli investorlar mamlakatiga aylantirish.",
        ru: "Превращение Узбекистана из страны с менее чем 1% инвестирующих в нацию уверенных инвесторов.",
      },
    },
    {
      icon: TrendingUp,
      title: { en: "Economic Growth", uz: "Iqtisodiy O'sish", ru: "Экономический рост" },
      description: {
        en: "More investment = more capital for companies = more jobs = stronger economy.",
        uz: "Ko'proq investitsiya = kompaniyalar uchun ko'proq kapital = ko'proq ish o'rinlari = kuchliroq iqtisodiyot.",
        ru: "Больше инвестиций = больше капитала для компаний = больше рабочих мест = сильнее экономика.",
      },
    },
    {
      icon: Globe,
      title: { en: "Regional Expansion", uz: "Mintaqaviy Kengayish", ru: "Региональное расширение" },
      description: {
        en: "Scale to entire Central Asia: Kazakhstan, Kyrgyzstan, Tajikistan — building regional trust.",
        uz: "Butun Markaziy Osiyoga kengayish: Qozog'iston, Qirg'iziston, Tojikiston — mintaqaviy ishonchni shakllantirish.",
        ru: "Масштабирование на всю Центральную Азию: Казахстан, Кыргызстан, Таджикистан — создание регионального доверия.",
      },
    },
    {
      icon: Heart,
      title: { en: "Uzbekistan 2030 Goals", uz: "O'zbekiston 2030 Maqsadlari", ru: "Цели Узбекистан 2030" },
      description: {
        en: "Fits perfectly with the national digital transformation and economic development agenda.",
        uz: "Milliy raqamli transformatsiya va iqtisodiy rivojlanish dasturiga mukammal mos keladi.",
        ru: "Идеально вписывается в национальную цифровую трансформацию и экономическое развитие.",
      },
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="secondary" className="mb-4">
            {t("impact.badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("impact.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">{t("impact.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {impacts.map((impact, i) => (
            <Card key={i} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <impact.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{impact.title[language]}</h3>
                <p className="text-sm text-muted-foreground">{impact.description[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
