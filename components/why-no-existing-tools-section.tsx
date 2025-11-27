"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { XCircle, Database, Globe, Brain, Building, BarChart3 } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function WhyNoExistingToolsSection() {
  const { language } = useLanguage()

  const reasons = [
    {
      icon: Database,
      title: { en: "No Public Datasets", uz: "Ommaviy Ma'lumotlar Yo'q", ru: "Нет публичных датасетов" },
      description: {
        en: "Uzbekistan lacks organized, accessible financial data for AI training.",
        uz: "O'zbekistonda AI o'qitish uchun tartibli, ochiq moliyaviy ma'lumotlar yo'q.",
        ru: "В Узбекистане нет организованных, доступных финансовых данных для обучения ИИ.",
      },
    },
    {
      icon: Globe,
      title: {
        en: "Global AI Doesn't Support UZ",
        uz: "Global AI UZ ni Qo'llab-quvvatlamaydi",
        ru: "Глобальный ИИ не поддерживает УЗ",
      },
      description: {
        en: "Bloomberg, Yahoo Finance, TradingView have zero coverage of Uzbek companies.",
        uz: "Bloomberg, Yahoo Finance, TradingView O'zbek kompaniyalarini qamrab olmaydi.",
        ru: "Bloomberg, Yahoo Finance, TradingView не покрывают узбекские компании.",
      },
    },
    {
      icon: Brain,
      title: { en: "No Local AI Scoring", uz: "Mahalliy AI Baholash Yo'q", ru: "Нет локального ИИ-скоринга" },
      description: {
        en: "No existing platform offers AI-powered company scoring for Uzbekistan.",
        uz: "Hech qanday mavjud platforma O'zbekiston uchun AI kompaniya baholashini taklif qilmaydi.",
        ru: "Ни одна существующая платформа не предлагает ИИ-скоринг компаний для Узбекистана.",
      },
    },
    {
      icon: Building,
      title: {
        en: "Banks Lack Smart Tools",
        uz: "Banklarda Aqlli Vositalar Yo'q",
        ru: "У банков нет умных инструментов",
      },
      description: {
        en: "Banks have no AI tools for retail investor guidance or SME credit scoring.",
        uz: "Banklarda chakana investorlar uchun yo'l-yo'riq yoki KKB kredit baholash uchun AI vositalari yo'q.",
        ru: "У банков нет ИИ-инструментов для розничных инвесторов или кредитного скоринга МСБ.",
      },
    },
    {
      icon: BarChart3,
      title: {
        en: "No National Investment Index",
        uz: "Milliy Investitsiya Indeksi Yo'q",
        ru: "Нет национального инвестиционного индекса",
      },
      description: {
        en: "Unlike S&P500 or FTSE, Uzbekistan has no equivalent benchmark index.",
        uz: "S&P500 yoki FTSE dan farqli o'laroq, O'zbekistonda ekvivalent benchmark indeks yo'q.",
        ru: "В отличие от S&P500 или FTSE, в Узбекистане нет эквивалентного индекса.",
      },
    },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="outline" className="mb-4">
            {language === "en" ? "The Gap" : language === "uz" ? "Bo'shliq" : "Пробел"}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {language === "en"
              ? "Why Existing Tools Cannot Solve This"
              : language === "uz"
                ? "Mavjud Vositalar Nima Uchun Buni Hal Qila Olmaydi"
                : "Почему существующие инструменты не могут это решить"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            {language === "en"
              ? "This problem requires a solution built specifically for Uzbekistan."
              : language === "uz"
                ? "Bu muammo O'zbekiston uchun maxsus qurilgan yechimni talab qiladi."
                : "Эта проблема требует решения, созданного специально для Узбекистана."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((reason, i) => (
            <Card key={i} className="bg-card border-border">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <reason.icon className="w-5 h-5 text-muted-foreground mt-2.5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title[language]}</h3>
                <p className="text-sm text-muted-foreground">{reason.description[language]}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border-primary/20 mt-8">
          <CardContent className="p-5 sm:p-6 text-center">
            <p className="text-foreground font-medium">
              {language === "en"
                ? "SIGN is being built to fill this gap — the first AI-powered investment platform designed specifically for Uzbekistan's market."
                : language === "uz"
                  ? "SIGN bu bo'shliqni to'ldirish uchun qurilmoqda — O'zbekiston bozori uchun maxsus mo'ljallangan birinchi AI investitsiya platformasi."
                  : "SIGN создаётся для заполнения этого пробела — первая ИИ-платформа для инвестиций, разработанная специально для рынка Узбекистана."}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
