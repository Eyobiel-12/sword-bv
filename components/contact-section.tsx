"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, ArrowRight, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "retail",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <motion.section
      id="contact"
      className="py-24 px-6 lg:px-8 bg-secondary/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-sm tracking-widest uppercase mb-4 text-muted-foreground">{t.contact.label}</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-140px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            >
              <Card className="p-6 border-border hover:border-foreground transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-foreground text-background">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.contact.email}</div>
                  <a
                    href="mailto:info@swordbv.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    info@swordbv.com
                  </a>
                </div>
              </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-140px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <Card className="p-6 border-border hover:border-foreground transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-foreground text-background">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.contact.phone}</div>
                  <a href="tel:+31201234567" className="text-muted-foreground hover:text-foreground transition-colors">
                    +31 20 123 4567
                  </a>
                </div>
              </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-140px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            >
              <Card className="p-6 border-border hover:border-foreground transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-foreground text-background">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.contact.visit}</div>
                  <address className="text-muted-foreground not-italic">Amsterdam, Netherlands</address>
                </div>
              </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-140px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="p-6 border-border hover:border-foreground transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-foreground text-background">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold mb-1">{t.contact.hours}</div>
                  <p className="text-muted-foreground text-sm">{t.contact.hoursValue}</p>
                </div>
              </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-140px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <Card className="p-8 lg:p-10 border-border">
            <div className="mb-8">
              <h3 className="font-serif text-2xl mb-2">{t.contact.formTitle}</h3>
              <p className="text-muted-foreground text-sm">{t.contact.formSubtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    {t.contact.fullName} <span className="text-muted-foreground">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    {t.contact.emailAddress} <span className="text-muted-foreground">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    {t.contact.companyName}
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your Company Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-sm font-medium">
                    {t.contact.inquiryType}
                  </Label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="flex h-12 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="retail">{t.contact.inquiryTypes.retail}</option>
                    <option value="wholesale">{t.contact.inquiryTypes.wholesale}</option>
                    <option value="partnership">{t.contact.inquiryTypes.partnership}</option>
                    <option value="other">{t.contact.inquiryTypes.other}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  {t.contact.yourMessage} <span className="text-muted-foreground">*</span>
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-base">
                {t.contact.sendMessage}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
