"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, User } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function TeamSection() {
  const { t, language } = useLanguage()

  const teamMembers = [
    {
      name: { en: "Shaxzod Batirjonov", uz: "Shaxzod Batirjonov", ru: "Шахзод Батиржонов" },
      role: { en: "AI Tech Lead", uz: "AI Texnik Yetakchi", ru: "AI Технический Лид" },
      whyEssential: {
        en: "Software Engineer at neuesleben.uz, experience in AI modeling, data analytics, and web engineering.",
        uz: "neuesleben.uz kompaniyasida dasturiy ta’minot muhandisi. AI modellashtirish, ma’lumotlar tahlili va zamonaviy veb-dasturlash tajribasiga ega.",
        ru: "Инженер-программист в компании neuesleben.uz с опытом в AI-моделировании, анализе данных и современной веб-разработке.",
      },
      skills: ["ML/AI", "Software Engineering", "Product Development"],
      linkedin: "https://www.linkedin.com/in/shaxzodbr/",
      github: "https://github.com/SHAXZODBR",
    },
    {
      name: { en: "Tursinbek Aytbaev", uz: "Tursinbek Aytbaev", ru: "Турсинбек Айтбаев" },
      role: { en: "Backend / ML Engineer", uz: "Backend / ML Muhandisi", ru: "Backend / ML Инженер" },
      whyEssential: {
        en: "Builds backend systems and ensures reliable real-time data processing, supported by strong SQL expertise and solid machine-learning fundamentals",
        uz: "Backend tizimlarini yaratadi va ishonchli, real vaqtda ma'lumotlarni qayta ishlashni ta'minlaydi. Strong SQL tajribasi va solid machine-learning asoslarida qo'llaniladi.",
        ru: "Создаёт backend-системы и обеспечивает надёжную обработку данных в реальном времени, поддерживая сильные навыки SQL и прочие основы машинного обучения.",
      },
      skills: ["Backend", "AI/ML", "SQL"],
      linkedin: "https://www.linkedin.com/in/tursinbek-aytbaev-573646275/",
      github: "https://github.com/TursinbekGo",
    },
    {
      name: { en: "Suxrob Ergashev", uz: "Suxrob Ergashev", ru: "Сухроб Эргашев" },
      role: { en: "Data Scientist", uz: "Data Scientist", ru: "Data Scientist" },
      whyEssential: {
        en: "Builds ML and deep-learning models for scoring and forecasting. Skilled in data cleaning, visualization, and model development. Created a credit-scoring model for a bank hackathon.",
        uz: "ML va deep-learning model-larini yaratadi va taqiq va tahsilatni ta'minlaydi. Ma'lumotlarni tashish va vizualizatsiya, va model tashkil etishni biladi. Bank hackathon uchun kredit taqiq modelini yaratishni ta'minlaydi.",
        ru: "Создаёт ML и deep-learning модели для оценки и прогнозирования. Способен в чистке данных, визуализации и разработке моделей. Создал модель оценки кредита для хакатона банка.",
      },
      skills: ["ML/AI", "CNN", "Python", "Data Analysis"],
      linkedin: "https://www.linkedin.com/in/suxrob-ergashev3004/",
      github: "https://github.com/steve0987-pixel",
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
