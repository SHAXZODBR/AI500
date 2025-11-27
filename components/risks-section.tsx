"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Database, Handshake, Scale, Globe, Building } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function RisksSection() {
  const { language } = useLanguage()

  const risks = [
    {
      icon: Database,
      title: {
        en: "Limited Public Financial Data",
        uz: "Cheklangan Ommaviy Moliyaviy Ma'lumotlar",
        ru: "Ограниченные публичные финансовые данные",
      },
      description: {
        en: "Uzbekistan's financial reporting is still developing. Some company data may be incomplete.",
        uz: "O'zbekiston moliyaviy hisobotlari hali rivojlanmoqda. Ba'zi kompaniya ma'lumotlari to'liq bo'lmasligi mumkin.",
        ru: "Финансовая отчётность Узбекистана ещё развивается. Данные некоторых компаний могут быть неполными.",
      },
      mitigation: {
        en: "We use transfer learning to supplement gaps with global patterns.",
        uz: "Biz global naqshlar bilan bo'shliqlarni to'ldirish uchun transfer o'rganishdan foydalanamiz.",
        ru: "Мы используем трансферное обучение для заполнения пробелов глобальными паттернами.",
      },
    },
    {
      icon: Handshake,
      title: { en: "Partnership Dependencies", uz: "Hamkorlik Bog'liqliklari", ru: "Зависимость от партнёрств" },
      description: {
        en: "Early-stage datasets require partnerships with brokers and exchanges for real-time data feeds.",
        uz: "Dastlabki bosqich ma'lumotlar to'plamlari real vaqt ma'lumotlari uchun brokerlar va birjalar bilan hamkorlikni talab qiladi.",
        ru: "Датасеты на ранней стадии требуют партнёрств с брокерами и биржами для потоков данных.",
      },
      mitigation: {
        en: "We're actively pursuing broker partnerships and exchange API access.",
        uz: "Biz broker hamkorliklari va birja API kirishini faol izlamoqdamiz.",
        ru: "Мы активно работаем над партнёрствами с брокерами и доступом к API бирж.",
      },
    },
    {
      icon: Scale,
      title: { en: "Not Financial Advice", uz: "Moliyaviy Maslahat Emas", ru: "Не финансовый совет" },
      description: {
        en: "AI predictions and scores are analytical tools, not investment recommendations.",
        uz: "AI bashoratlari va baholari tahliliy vositalar, investitsiya tavsiyalari emas.",
        ru: "ИИ-прогнозы и оценки — аналитические инструменты, не инвестиционные рекомендации.",
      },
      mitigation: {
        en: "Clear disclaimers and educational content to set proper expectations.",
        uz: "To'g'ri kutishlarni o'rnatish uchun aniq ogohlantirishlar va ta'lim kontenti.",
        ru: "Чёткие оговорки и образовательный контент для правильных ожиданий.",
      },
    },
    {
      icon: Globe,
      title: {
        en: "Transfer Learning Limitations",
        uz: "Transfer O'rganish Cheklovlari",
        ru: "Ограничения трансферного обучения",
      },
      description: {
        en: "Some models depend on global market patterns that may not perfectly translate to local context.",
        uz: "Ba'zi modellar mahalliy kontekstga to'liq mos kelmasligi mumkin bo'lgan global bozor naqshlariga bog'liq.",
        ru: "Некоторые модели зависят от глобальных паттернов, которые могут не идеально подходить к местному контексту.",
      },
      mitigation: {
        en: "Continuous local data collection and model fine-tuning over time.",
        uz: "Vaqt davomida uzluksiz mahalliy ma'lumotlar to'plash va modelni sozlash.",
        ru: "Непрерывный сбор локальных данных и дообучение моделей со временем.",
      },
    },
    {
      icon: Building,
      title: { en: "Regulatory Environment", uz: "Regulyativ Muhit", ru: "Регуляторная среда" },
      description: {
        en: "Financial technology regulations in Uzbekistan are evolving.",
        uz: "O'zbekistonda moliyaviy texnologiya qoidalari rivojlanmoqda.",
        ru: "Регулирование финтеха в Узбекистане развивается.",
      },
      mitigation: {
        en: "We focus on analytics only — no trade execution, no custody of funds.",
        uz: "Biz faqat tahlilga e'tibor qaratamiz — savdo yo'q, mablag'larni saqlash yo'q.",
        ru: "Мы фокусируемся только на аналитике — без торговли, без хранения средств.",
      },
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="outline" className="mb-4 border-amber-500 text-amber-600">
            {language === "en" ? "Transparency" : language === "uz" ? "Shaffoflik" : "Прозрачность"}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {language === "en"
              ? "Risks & Limitations"
              : language === "uz"
                ? "Risklar va Cheklovlar"
                : "Риски и ограничения"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            {language === "en"
              ? "We believe in transparency. Here are the challenges we're aware of and how we address them."
              : language === "uz"
                ? "Biz shaffoflikka ishonamiz. Bu bizga ma'lum bo'lgan qiyinchiliklar va biz ularni qanday hal qilishimiz."
                : "Мы верим в прозрачность. Вот вызовы, о которых мы знаем, и как мы их решаем."}
          </p>
        </div>

        <div className="space-y-4">
          {risks.map((risk, i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex items-center gap-3 sm:w-1/3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <risk.icon className="w-4 h-4 text-muted-foreground mb-1" />
                      <h3 className="font-semibold text-foreground text-sm">{risk.title[language]}</h3>
                    </div>
                  </div>
                  <div className="sm:w-1/3">
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "en" ? "Challenge:" : language === "uz" ? "Qiyinchilik:" : "Вызов:"}
                    </p>
                    <p className="text-sm text-foreground">{risk.description[language]}</p>
                  </div>
                  <div className="sm:w-1/3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-xs text-primary font-medium mb-1">
                      {language === "en"
                        ? "Our approach:"
                        : language === "uz"
                          ? "Bizning yondashuvimiz:"
                          : "Наш подход:"}
                    </p>
                    <p className="text-sm text-foreground">{risk.mitigation[language]}</p>
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
