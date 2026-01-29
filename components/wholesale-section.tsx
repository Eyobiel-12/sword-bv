"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function WholesaleSection() {
  const { t } = useLanguage()

  return (
    <motion.section
      id="wholesale"
      className="py-24 px-6 lg:px-8 bg-foreground text-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="text-sm tracking-widest uppercase mb-4 text-background/60">{t.wholesale.label}</div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
                {t.wholesale.title}
              </h2>
              <p className="text-lg text-background/70 leading-relaxed">{t.wholesale.subtitle}</p>
            </div>

            <div className="space-y-4">
              {t.wholesale.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-140px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + index * 0.06 }}
                >
                  <CheckCircle2 className="h-6 w-6 text-background/80 flex-shrink-0 mt-0.5" />
                  <span className="text-background/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-background text-foreground hover:bg-background/90"
              asChild
            >
              <Link href="#contact">
                {t.wholesale.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-140px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Card className="overflow-hidden border-background/20">
              <img
                src="/business-handshake-professional-minimal-black-and-.jpg"
                alt="Wholesale partnership"
                className="w-full h-full object-cover"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
