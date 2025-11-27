"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, BarChart3, Shield } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useLanguage()

  const features = [
    { icon: BarChart3, text: t("hero.feature1") },
    { icon: Shield, text: t("hero.feature2") },
    { icon: Sparkles, text: t("hero.feature3") },
  ]

  const stats = [
    { value: t("hero.stat1"), label: t("hero.stat1Label") },
    { value: t("hero.stat2"), label: t("hero.stat2Label") },
    { value: t("hero.stat3"), label: t("hero.stat3Label") },
  ]

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {t("hero.badge")}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
            <span className="text-primary">SIGN</span> — {t("hero.title1")}{" "}
            <span className="text-primary">{t("hero.title2")}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 text-pretty px-4">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#demo">
                {t("nav.viewDemo")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <a href="#problem">{t("nav.learnMore")}</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-card border border-border shadow-sm"
            >
              <feature.icon className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
