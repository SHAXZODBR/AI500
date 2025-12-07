"use client"

import { LanguageProvider, useLanguage } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink, Database, Rocket, Code, Play, Cpu, TrendingUp, Lightbulb, Maximize2, Minimize2 } from "lucide-react"
import { useRef, useState } from "react"

function VideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = async () => {
    if (!containerRef.current) return

    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen()
        setIsFullscreen(true)
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err)
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 bg-black ${isFullscreen ? 'h-screen border-none rounded-none' : ''}`}
    >
      <div className={`aspect-video relative ${isFullscreen ? 'h-full w-full' : ''}`}>
        {/* Visual Masking for Top Bar (Title/Channel) - Using Blur instead of Black Gradient */}
        <div className="absolute top-0 left-0 w-full h-24 z-20 backdrop-blur-xl bg-white/5 pointer-events-none fade-bottom" />
        
        {/* Interaction Blockers */}
        <div className="absolute top-0 left-0 w-full h-20 z-20 bg-transparent" />
        <div className="absolute top-0 right-0 w-24 h-full z-20 bg-transparent" />

        {/* Custom Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-6 right-6 z-30 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-sm transition-all border border-white/10 hover:scale-110"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
        </button>
        
        <iframe
          src="https://www.youtube-nocookie.com/embed/6cW9bfaGpCE?modestbranding=1&rel=0&showinfo=0&controls=1&disablekb=1&fs=0&iv_load_policy=3&loop=1&playlist=6cW9bfaGpCE"
          title="SIGN AI Platform Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full relative z-10"
          style={{ border: 0 }}
        />
      </div>
    </div>
  )
}

function DemoContent() {
  const { t } = useLanguage()
  
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background" />
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI500 Project Demo</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              SIGN AI UZ
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              AI-Powered Investment Intelligence Platform
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("demoPage.videoTitle")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("demoPage.projectSubtitle")}
            </h2>
          </div>
          
          {/* YouTube Video Embed - Privacy Enhanced Mode */}
          <VideoPlayer />

        </div>
      </section>

      {/* Demo Links Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6 md:gap-8">
            
            {/* Database & API Guide Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/20 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Database className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {t("demoPage.githubTitle")}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {t("demoPage.githubDesc")}
                    </p>
                    <a 
                      href="https://drive.google.com/drive/folders/1jGxRdNW1wmzdj6XM46oOY8fxxtmIyL_3?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                    >
                      <span>Access Drive Folder</span>
                      <ExternalLink className="w-5 h-5 group-hover/link:rotate-45 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MVP Link Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/20 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      MVP Demo
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Experience the live minimum viable product and explore key features
                    </p>
                    <a 
                      href="https://signaiuz.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                    >
                      <span>Launch MVP</span>
                      <ExternalLink className="w-5 h-5 group-hover/link:rotate-45 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* API Demo Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/20 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary via-accent to-chart-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      API Demo
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Test our AI-powered API endpoints and see the technology in action
                    </p>
                    <a 
                      href="https://signaiuz.vercel.app/api-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                    >
                      <span>Try API Demo</span>
                      <ExternalLink className="w-5 h-5 group-hover/link:rotate-45 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("demoPage.projectTitle")}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t("demoPage.projectSubtitle")}
            </p>
          </div>

          {/* What is Being Shown */}
          <div className="space-y-12">
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <Play className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {t("demoPage.whatIsShown")}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("demoPage.whatIsShownDesc")}
              </p>
              
              {/* Live Features */}
              <div className="space-y-6 mt-8">
                <h4 className="text-xl font-bold text-primary mb-4">{t("demoPage.liveFeaturesTitle")}</h4>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Feature 1: Scoring */}
                  <div className="p-6 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <Cpu className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <h5 className="font-semibold text-foreground">{t("demoPage.feature1Title")}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("demoPage.feature1Desc")}</p>
                  </div>
                  
                  {/* Feature 2: Chat */}
                  <div className="p-6 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <Code className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <h5 className="font-semibold text-foreground">{t("demoPage.feature2Title")}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("demoPage.feature2Desc")}</p>
                  </div>

                  {/* Feature 3: Indexes */}
                  <div className="p-6 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <h5 className="font-semibold text-foreground">{t("demoPage.feature3Title")}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("demoPage.feature3Desc")}</p>
                  </div>

                  {/* Feature 4: API */}
                  <div className="p-6 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <Database className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <h5 className="font-semibold text-foreground">{t("demoPage.feature4Title")}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("demoPage.feature4Desc")}</p>
                  </div>

                  {/* Feature 5: Education */}
                  <div className="p-6 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-3 mb-3">
                      <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <h5 className="font-semibold text-foreground">{t("demoPage.feature5Title")}</h5>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("demoPage.feature5Desc")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {t("demoPage.problemTitle")}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("demoPage.problemDesc")}
              </p>
            </div>

            {/* Technology Stack */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <Cpu className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {t("demoPage.techStackTitle")}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("demoPage.techStackDesc")}
              </p>
            </div>

            {/* Roadmap */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {t("demoPage.roadmapTitle")}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("demoPage.roadmapDesc")}
              </p>
            </div>

            {/* Innovation Highlights */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <Rocket className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {t("demoPage.innovationTitle")}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("demoPage.innovationDesc")}
              </p>
            </div>
          </div>

         
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function DemoPage() {
  return (
    <LanguageProvider>
      <DemoContent />
    </LanguageProvider>
  )
}
