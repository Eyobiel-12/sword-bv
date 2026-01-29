"use client"

import { Package, Shield, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

const icons = [Package, Shield, TrendingUp, Users]

export function ValuePropositions() {
  const { t } = useLanguage()

  return (
    <motion.section
      className="py-24 px-6 lg:px-8 bg-secondary/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
            {t.values.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.values.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-20">
          {t.values.items.map((value, index) => {
            const Icon = icons[index]
            const number = String(index + 1).padStart(2, "0")
            return (
              <motion.div
                key={index}
                className="space-y-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-140px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + index * 0.08 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-6xl font-serif text-muted-foreground/30">{number}</div>
                  <div className="flex-1 space-y-4 pt-2">
                    <div className="flex items-center space-x-4">
                      <Icon className="h-8 w-8 text-foreground" />
                      <h3 className="text-2xl font-serif tracking-tight">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
