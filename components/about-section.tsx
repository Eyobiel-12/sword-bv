"use client"

import { Globe, Shield, Truck } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

const icons = [Globe, Shield, Truck]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <motion.section
      id="about"
      className="py-24 px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="space-y-8">
            <div>
              <div className="text-sm tracking-widest uppercase mb-4 text-muted-foreground">{t.about.label}</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
                {t.about.title}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {t.about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {t.about.capabilities.map((capability, index) => {
                const Icon = icons[index]
                return (
                  <motion.div
                    key={index}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-140px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + index * 0.08 }}
                  >
                    <Icon className="h-8 w-8 text-foreground" />
                    <h3 className="font-semibold tracking-tight">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
