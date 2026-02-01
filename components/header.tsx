"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()
   const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!headerRef.current) return
    gsap.from(headerRef.current, {
      y: -32,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/swordlog.png"
              alt="Sword bv"
              width={240}
              height={72}
              className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto max-w-[200px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-none object-contain object-left"
              priority
              sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-12">
            <Link
              href="#products"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.products}
            </Link>
            <Link
              href="#wholesale"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.wholesale}
            </Link>
            <Link
              href="#about"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* CTA & Language & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" className="hidden lg:flex" aria-label={t.nav.cart}>
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="hidden lg:flex" asChild>
              <Link href="#contact">{t.nav.getStarted}</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-6 space-y-4">
            <Link
              href="#products"
              className="block text-base text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.products}
            </Link>
            <Link
              href="#wholesale"
              className="block text-base text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.wholesale}
            </Link>
            <Link
              href="#about"
              className="block text-base text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="#contact"
              className="block text-base text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full bg-transparent">
                <ShoppingCart className="h-4 w-4 mr-2" />
                {t.nav.cart}
              </Button>
              <Button className="w-full" asChild>
                <Link href="#contact">{t.nav.getStarted}</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
