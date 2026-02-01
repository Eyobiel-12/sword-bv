"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/swordlog.png"
              alt="Sword bv"
              width={240}
              height={72}
              className="h-12 sm:h-14 md:h-16 lg:h-[4.5rem] w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-none object-contain brightness-0 invert"
              sizes="(max-width: 640px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 280px, 320px"
            />
            <p className="text-background/70 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 tracking-wide">{t.footer.quickLinks}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#products" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="#wholesale" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.wholesale}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">{t.footer.services}</h3>
            <ul className="space-y-3 text-sm">
              {t.footer.servicesItems.map((item, index) => (
                <li key={index} className="text-background/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 tracking-wide">{t.footer.contactTitle}</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-background/70">Amsterdam, Netherlands</li>
              <li>
                <a
                  href="mailto:info@swordbv.com"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  info@swordbv.com
                </a>
              </li>
              <li>
                <a href="tel:+31201234567" className="text-background/70 hover:text-background transition-colors">
                  +31 20 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Sword bv. {t.footer.rights}
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
