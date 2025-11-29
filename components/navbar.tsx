"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { name: t("nav.problem"), href: "#problem" },
    { name: t("nav.solution"), href: "#solution" },
    { name: t("nav.demo"), href: "#demo" },
    { name: t("nav.features"), href: "#features" },
    { name: t("nav.business"), href: "#business" },
    { name: t("nav.team"), href: "#team" },
    { name: t("nav.roadmap"), href: "#roadmap" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center">
              <Image 
                src="/SIGN.png" 
                alt="SIGN Logo" 
                width={52} 
                height={52}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg text-foreground">SIGN</span>
          </div>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" asChild>
              <a href="#demo">{t("nav.viewDemo")}</a>
            </Button>
            <Button size="sm" asChild>
              <a href="#solution">{t("nav.learnMore")}</a>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button className="p-2 rounded-md hover:bg-muted" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                <a href="#demo">{t("nav.viewDemo")}</a>
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <a href="#solution">{t("nav.learnMore")}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
