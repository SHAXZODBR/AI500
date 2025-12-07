"use client"

import { LanguageProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExternalLink, Github, Rocket, Code } from "lucide-react"

export default function DemoPage() {
  return (
    <LanguageProvider>
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
                AI-Powered Sign Language Translation Platform
              </p>
            </div>
          </div>
        </section>

        {/* Demo Links Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid gap-6 md:gap-8">
              
              {/* GitHub Repository Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted/20 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Github className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        GitHub Repository
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Explore the source code, documentation, and contribute to the project
                      </p>
                      <a 
                        href="https://github.com/SHAXZODBR/AI500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
                      >
                        <span>View on GitHub</span>
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

        {/* Additional Info Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About the Project
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                SIGN AI UZ is an innovative AI-powered platform designed to bridge communication 
                gaps through advanced sign language translation technology. Built with cutting-edge 
                machine learning models and modern web technologies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">AI</div>
                  <div className="text-sm text-muted-foreground">Powered Technology</div>
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">Real-time</div>
                  <div className="text-sm text-muted-foreground">Translation</div>
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="text-4xl font-bold text-primary mb-2">Open</div>
                  <div className="text-sm text-muted-foreground">Source Project</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </LanguageProvider>
  )
}
