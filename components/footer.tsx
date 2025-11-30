"use client"

import Image from "next/image"
import { Shield } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="SIGN Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-foreground">SIGN</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">{t("footer.hackathon")}</p>
          <p className="text-sm text-muted-foreground">{t("footer.platform")}</p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-2/10 border border-chart-2/20">
            <Shield className="w-4 h-4 text-chart-2" />
            <span className="text-sm font-medium text-chart-2">{t("footer.safe")}</span>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground px-4">{t("footer.disclaimer")}</p>
        </div>
      </div>
    </footer>
  )
}
