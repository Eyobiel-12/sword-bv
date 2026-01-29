"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValuePropositions } from "@/components/value-propositions"
import { ProductCategories } from "@/components/product-categories"
import { WholesaleSection } from "@/components/wholesale-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <ValuePropositions />
        <ProductCategories />
        <WholesaleSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
