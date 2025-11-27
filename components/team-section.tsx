"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, User } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function TeamSection() {
  const { t, language } = useLanguage()

  const teamMembers = [
    {
      name: "Shaxzod Batirjonov",
      role: { en: "CEO / AI Architect", uz: "CEO / AI Arxitektori", ru: "CEO / ИИ Архитектор" },
      whyEssential: {
        en: "5+ years of AI modeling, financial analysis, product strategy. Leads AI direction and overall vision.",
        uz: "5+ yillik AI modellashtirish, moliyaviy tahlil, mahsulot strategiyasi. AI yo'nalishi va umumiy vizyonni boshqaradi.",
        ru: "5+ лет в ИИ-моделировании, финансовом анализе, продуктовой стратегии. Руководит направлением ИИ и общим видением.",
      },
      skills: ["ML/AI", "Financial Analysis", "Product Strategy"],
      linkedin: "#",
      github: "#",
    },
    {
      name: { en: "Team Member 2", uz: "Jamoa a'zosi 2", ru: "Член команды 2" },
      role: { en: "Backend / Data Engineer", uz: "Backend / Data Muhandisi", ru: "Backend / Data Инженер" },
      whyEssential: {
        en: "Builds the data pipelines and scoring engine. Ensures reliable, real-time data processing.",
        uz: "Ma'lumotlar quvurlari va baholash tizimini quradi. Ishonchli, real vaqtda ma'lumotlarni qayta ishlashni ta'minlaydi.",
        ru: "Создаёт пайплайны данных и скоринговый движок. Обеспечивает надёжную обработку данных в реальном времени.",
      },
      skills: ["Python", "PostgreSQL", "FastAPI"],
      linkedin: "#",
      github: "#",
    },
    {
      name: { en: "Team Member 3", uz: "Jamoa a'zosi 3", ru: "Член команды 3" },
      role: { en: "Frontend / UX", uz: "Frontend / UX", ru: "Frontend / UX" },
      whyEssential: {
        en: "Creates the user-friendly interface. Makes complex data accessible to beginners.",
        uz: "Foydalanuvchilarga qulay interfeys yaratadi. Murakkab ma'lumotlarni yangi boshlovchilar uchun ochiq qiladi.",
        ru: "Создаёт удобный интерфейс. Делает сложные данные доступными для начинающих.",
      },
      skills: ["React", "TypeScript", "Tailwind"],
      linkedin: "#",
      github: "#",
    },
  ]

  return (
    <section id="team" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <Badge variant="secondary" className="mb-4">
            {t("team.badge")}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">{t("team.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">{t("team.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {teamMembers.map((member, i) => (
            <Card key={i} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-5 sm:p-6">
                {/* Photo placeholder */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {typeof member.name === "string" ? member.name : member.name[language]}
                    </h3>
                    <p className="text-sm text-primary font-medium">{member.role[language]}</p>
                  </div>
                </div>

                {/* Why essential */}
                <div className="p-3 rounded-lg bg-muted/50 mb-4">
                  <p className="text-sm text-foreground italic">"{member.whyEssential[language]}"</p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {member.skills.map((skill, j) => (
                    <span key={j} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex gap-2">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-muted-foreground" />
                  </a>
                  <a
                    href={member.github}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
