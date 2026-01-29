"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Hero3DBackground } from "./hero-3d-background"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <Hero3DBackground />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance leading-[1.05]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {t.hero.title1}
          <br />
          {t.hero.title2}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
        >
          <Button size="lg" className="text-base px-8 rounded-full" asChild>
            <Link href="#products">
              {t.hero.exploreProducts}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 rounded-full bg-transparent border-border/60 hover:border-border"
            asChild
          >
            <Link href="#wholesale">{t.hero.wholesaleInquiries}</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <div className="text-xs tracking-widest uppercase">{t.hero.scroll}</div>
          <motion.div
            className="w-px h-12 bg-border"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
