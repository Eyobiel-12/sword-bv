"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const images = [
  "/premium-consumer-electronics-minimal-product-photo.jpg",
  "/modern-minimalist-home-furniture-interior-design-w.jpg",
  "/luxury-fashion-accessories-minimal-photography-whi.jpg",
  "/industrial-equipment-warehouse-minimal-photography.jpg",
]

export function ProductCategories() {
  const { t } = useLanguage()

  return (
    <motion.section
      id="products"
      className="py-24 px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-sm tracking-widest uppercase mb-4 text-muted-foreground">{t.products.label}</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
            {t.products.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.products.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.products.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-140px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + index * 0.08 }}
            >
              <Card
                className={`group overflow-hidden border-border hover:border-foreground transition-all duration-300 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`grid ${index === 0 ? "lg:grid-cols-2" : "grid-cols-1"}`}>
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${index === 0 ? "aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"}`}
                  >
                    <img
                      src={images[index] || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent lg:hidden" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center p-8 lg:p-12 ${index === 0 ? "" : "absolute bottom-0 left-0 right-0 lg:relative lg:bg-card"}`}
                  >
                    <div
                      className={`${index === 0 ? "text-foreground" : "text-primary-foreground lg:text-foreground"}`}
                    >
                      <h3 className="font-serif text-3xl lg:text-4xl mb-4">{category.title}</h3>
                      <p
                        className={`mb-6 leading-relaxed ${index === 0 ? "text-muted-foreground" : "text-primary-foreground/80 lg:text-muted-foreground"}`}
                      >
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {category.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className={`text-xs tracking-wide px-3 py-1 border ${
                              index === 0
                                ? "border-border text-muted-foreground"
                                : "border-primary-foreground/30 text-primary-foreground/80 lg:border-border lg:text-muted-foreground"
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Button
                        variant={index === 0 ? "default" : "outline"}
                        className={
                          index === 0
                            ? ""
                            : "bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground lg:border-foreground lg:text-foreground lg:hover:bg-foreground lg:hover:text-background"
                        }
                        asChild
                      >
                        <Link href="#contact">
                          {t.products.exploreCategory}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
