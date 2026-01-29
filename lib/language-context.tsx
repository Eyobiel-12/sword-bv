"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Language = "en" | "nl" | "zh" | "es"

type Translations = {
  [key in Language]: {
    // Header
    nav: {
      products: string
      wholesale: string
      about: string
      contact: string
      getStarted: string
      cart: string
    }
    // Hero
    hero: {
      title1: string
      title2: string
      subtitle: string
      exploreProducts: string
      wholesaleInquiries: string
      scroll: string
    }
    // Value Propositions
    values: {
      title: string
      subtitle: string
      items: {
        title: string
        description: string
      }[]
    }
    // Products
    products: {
      label: string
      title: string
      subtitle: string
      exploreCategory: string
      categories: {
        title: string
        description: string
        features: string[]
      }[]
    }
    // Wholesale
    wholesale: {
      label: string
      title: string
      subtitle: string
      cta: string
      benefits: string[]
    }
    // About
    about: {
      label: string
      title: string
      paragraphs: string[]
      capabilities: {
        title: string
        description: string
      }[]
    }
    // Contact
    contact: {
      label: string
      title: string
      subtitle: string
      email: string
      phone: string
      visit: string
      hours: string
      hoursValue: string
      formTitle: string
      formSubtitle: string
      fullName: string
      emailAddress: string
      companyName: string
      inquiryType: string
      inquiryTypes: {
        retail: string
        wholesale: string
        partnership: string
        other: string
      }
      yourMessage: string
      messagePlaceholder: string
      sendMessage: string
    }
    // Footer
    footer: {
      tagline: string
      quickLinks: string
      services: string
      servicesItems: string[]
      contactTitle: string
      rights: string
      privacy: string
      terms: string
    }
  }
}

const translations: Translations = {
  en: {
    nav: {
      products: "Products",
      wholesale: "Wholesale",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
      cart: "Cart",
    },
    hero: {
      title1: "Premium Sourcing,",
      title2: "Delivered Globally",
      subtitle:
        "Sword bv connects businesses and consumers with high-quality products from leading global manufacturers. Trusted for reliability, exceptional service, and unwavering commitment to quality.",
      exploreProducts: "Explore Products",
      wholesaleInquiries: "Wholesale Inquiries",
      scroll: "Scroll",
    },
    values: {
      title: "Why Choose Sword",
      subtitle: "We combine global sourcing expertise with unwavering commitment to quality and service excellence.",
      items: [
        {
          title: "Curated Selection",
          description:
            "Handpicked products from verified manufacturers, ensuring quality meets your standards every time.",
        },
        {
          title: "Quality Assurance",
          description: "Rigorous quality control processes and inspections guarantee reliability across all shipments.",
        },
        {
          title: "Competitive Pricing",
          description:
            "Direct sourcing partnerships enable us to offer exceptional value for both bulk and individual orders.",
        },
        {
          title: "Dedicated Support",
          description: "Expert guidance from sourcing to delivery, with personalized support for every client.",
        },
      ],
    },
    products: {
      label: "Our Catalog",
      title: "Product Categories",
      subtitle: "Explore our comprehensive catalog of quality-assured products spanning multiple industries.",
      exploreCategory: "Explore Category",
      categories: [
        {
          title: "Electronics",
          description: "Consumer electronics, smart devices, and accessories sourced from certified manufacturers",
          features: ["Quality Certified", "Latest Technology", "Global Brands"],
        },
        {
          title: "Home & Living",
          description: "Furniture, décor, and household essentials with premium craftsmanship",
          features: ["Sustainable Materials", "Modern Design", "Durable Quality"],
        },
        {
          title: "Fashion",
          description: "Apparel, accessories, and textiles meeting international quality standards",
          features: ["Premium Fabrics", "Trend-Forward", "Ethical Sourcing"],
        },
        {
          title: "Industrial",
          description: "Equipment, components, and B2B supplies for professional applications",
          features: ["ISO Certified", "Bulk Available", "Custom Orders"],
        },
      ],
    },
    wholesale: {
      label: "For Businesses",
      title: "Wholesale Solutions Tailored to Your Needs",
      subtitle:
        "Partner with Sword bv for comprehensive wholesale sourcing that scales with your business. From small batches to container loads, we deliver exceptional value and service.",
      cta: "Request Wholesale Pricing",
      benefits: [
        "Volume discounts on bulk orders",
        "Dedicated account management",
        "Custom sourcing solutions",
        "Flexible payment terms",
        "Priority shipping and logistics",
        "Quality inspection services",
      ],
    },
    about: {
      label: "About Sword bv",
      title: "Building Bridges Between Markets",
      paragraphs: [
        "Sword bv is your trusted partner for premium global sourcing, connecting businesses and consumers with quality products from carefully selected manufacturers worldwide.",
        "Our expertise spans electronics, fashion, home goods, and industrial equipment. We combine deep market knowledge with rigorous quality standards to deliver exceptional value on every order.",
        "With a commitment to transparency, reliability, and your success, we handle the complexities of international sourcing so you can focus on growing your business.",
      ],
      capabilities: [
        { title: "Global Network", description: "Direct partnerships with verified manufacturers across key production hubs" },
        { title: "Quality Assured", description: "Rigorous inspection protocols for every shipment" },
        { title: "Reliable Logistics", description: "Streamlined shipping to destinations worldwide" },
      ],
    },
    contact: {
      label: "Contact Us",
      title: "Let's Start a Conversation",
      subtitle: "Ready to source quality products? Reach out and our team will respond promptly.",
      email: "Email Us",
      phone: "Call Us",
      visit: "Visit Us",
      hours: "Business Hours",
      hoursValue: "Mon - Fri: 9:00 - 18:00 CET",
      formTitle: "Send Us a Message",
      formSubtitle: "Fill out the form below and we'll get back to you within 24 hours.",
      fullName: "Full Name",
      emailAddress: "Email Address",
      companyName: "Company Name",
      inquiryType: "Inquiry Type",
      inquiryTypes: {
        retail: "Retail Inquiry",
        wholesale: "Wholesale Inquiry",
        partnership: "Partnership Opportunity",
        other: "General Question",
      },
      yourMessage: "Your Message",
      messagePlaceholder: "Tell us about your sourcing needs...",
      sendMessage: "Send Message",
    },
    footer: {
      tagline: "Premium sourcing solutions connecting businesses and consumers with quality products from trusted global manufacturers.",
      quickLinks: "Quick Links",
      services: "Services",
      servicesItems: ["Product Sourcing", "Quality Inspection", "Logistics & Shipping", "Custom Solutions"],
      contactTitle: "Contact",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  nl: {
    nav: {
      products: "Producten",
      wholesale: "Groothandel",
      about: "Over Ons",
      contact: "Contact",
      getStarted: "Aan de Slag",
      cart: "Winkelwagen",
    },
    hero: {
      title1: "Premium Sourcing,",
      title2: "Wereldwijd Geleverd",
      subtitle:
        "Sword bv verbindt bedrijven en consumenten met hoogwaardige producten van toonaangevende fabrikanten wereldwijd. Vertrouwd voor betrouwbaarheid, uitstekende service en toewijding aan kwaliteit.",
      exploreProducts: "Bekijk Producten",
      wholesaleInquiries: "Groothandel Aanvragen",
      scroll: "Scroll",
    },
    values: {
      title: "Waarom Sword Kiezen",
      subtitle:
        "Wij combineren wereldwijde sourcing expertise met onwankelbare toewijding aan kwaliteit en service excellence.",
      items: [
        {
          title: "Gecureerde Selectie",
          description:
            "Handgepickte producten van geverifieerde fabrikanten, zodat kwaliteit elke keer aan uw normen voldoet.",
        },
        {
          title: "Kwaliteitsgarantie",
          description: "Strenge kwaliteitscontroles en inspecties garanderen betrouwbaarheid bij alle zendingen.",
        },
        {
          title: "Concurrerende Prijzen",
          description: "Directe sourcing partnerschappen stellen ons in staat om uitzonderlijke waarde te bieden.",
        },
        {
          title: "Toegewijde Ondersteuning",
          description: "Deskundige begeleiding van sourcing tot levering, met persoonlijke ondersteuning.",
        },
      ],
    },
    products: {
      label: "Onze Catalogus",
      title: "Productcategorieën",
      subtitle: "Ontdek onze uitgebreide catalogus van kwaliteitsproducten uit verschillende industrieën.",
      exploreCategory: "Bekijk Categorie",
      categories: [
        {
          title: "Elektronica",
          description: "Consumentenelektronica, slimme apparaten en accessoires van gecertificeerde fabrikanten",
          features: ["Gecertificeerd", "Nieuwste Technologie", "Wereldmerken"],
        },
        {
          title: "Huis & Wonen",
          description: "Meubels, decoratie en huishoudelijke benodigdheden met premium vakmanschap",
          features: ["Duurzame Materialen", "Modern Design", "Duurzame Kwaliteit"],
        },
        {
          title: "Mode",
          description: "Kleding, accessoires en textiel die voldoen aan internationale kwaliteitsnormen",
          features: ["Premium Stoffen", "Trendy", "Ethische Sourcing"],
        },
        {
          title: "Industrieel",
          description: "Apparatuur, componenten en B2B-benodigdheden voor professionele toepassingen",
          features: ["ISO Gecertificeerd", "Bulk Beschikbaar", "Maatwerk"],
        },
      ],
    },
    wholesale: {
      label: "Voor Bedrijven",
      title: "Groothandelsoplossingen Op Maat",
      subtitle:
        "Partner met Sword bv voor uitgebreide groothandel sourcing die meegroeit met uw bedrijf. Van kleine batches tot containervrachten.",
      cta: "Vraag Groothandelsprijs Aan",
      benefits: [
        "Volumekortingen op bulkorders",
        "Toegewijde accountmanager",
        "Aangepaste sourcing oplossingen",
        "Flexibele betalingsvoorwaarden",
        "Prioriteit verzending",
        "Kwaliteitsinspectie services",
      ],
    },
    about: {
      label: "Over Sword bv",
      title: "Bruggen Bouwen Tussen Markten",
      paragraphs: [
        "Sword bv is uw vertrouwde partner voor premium wereldwijde sourcing, die bedrijven en consumenten verbindt met kwaliteitsproducten van zorgvuldig geselecteerde fabrikanten wereldwijd.",
        "Onze expertise omvat elektronica, mode, huishoudelijke artikelen en industriële apparatuur. We combineren diepgaande marktkennis met strenge kwaliteitsnormen.",
        "Met toewijding aan transparantie, betrouwbaarheid en uw succes, nemen wij de complexiteit van internationale sourcing voor onze rekening.",
      ],
      capabilities: [
        { title: "Wereldwijd Netwerk", description: "Directe partnerschappen met geverifieerde fabrikanten in toonaangevende productieregio's" },
        { title: "Kwaliteit Gegarandeerd", description: "Strenge inspectieprotocollen voor elke zending" },
        { title: "Betrouwbare Logistiek", description: "Gestroomlijnde verzending naar bestemmingen wereldwijd" },
      ],
    },
    contact: {
      label: "Neem Contact Op",
      title: "Laten We een Gesprek Starten",
      subtitle: "Klaar om kwaliteitsproducten te sourcen? Neem contact op en ons team reageert snel.",
      email: "E-mail Ons",
      phone: "Bel Ons",
      visit: "Bezoek Ons",
      hours: "Openingstijden",
      hoursValue: "Ma - Vr: 9:00 - 18:00 CET",
      formTitle: "Stuur Ons een Bericht",
      formSubtitle: "Vul het formulier in en wij reageren binnen 24 uur.",
      fullName: "Volledige Naam",
      emailAddress: "E-mailadres",
      companyName: "Bedrijfsnaam",
      inquiryType: "Type Aanvraag",
      inquiryTypes: {
        retail: "Particuliere Aanvraag",
        wholesale: "Groothandel Aanvraag",
        partnership: "Partnerschapsmogelijkheid",
        other: "Algemene Vraag",
      },
      yourMessage: "Uw Bericht",
      messagePlaceholder: "Vertel ons over uw sourcing behoeften...",
      sendMessage: "Verstuur Bericht",
    },
    footer: {
      tagline: "Premium sourcing oplossingen die bedrijven en consumenten verbinden met kwaliteitsproducten van vertrouwde wereldwijde fabrikanten.",
      quickLinks: "Snelle Links",
      services: "Diensten",
      servicesItems: ["Product Sourcing", "Kwaliteitsinspectie", "Logistiek & Verzending", "Aangepaste Oplossingen"],
      contactTitle: "Contact",
      rights: "Alle rechten voorbehouden.",
      privacy: "Privacybeleid",
      terms: "Algemene Voorwaarden",
    },
  },
  zh: {
    nav: {
      products: "产品",
      wholesale: "批发",
      about: "关于我们",
      contact: "联系",
      getStarted: "开始合作",
      cart: "购物车",
    },
    hero: {
      title1: "优质采购",
      title2: "全球配送",
      subtitle: "Sword bv 将企业和消费者与全球优质制造商的高品质产品连接起来。以可靠性、卓越服务和对质量的坚定承诺而闻名。",
      exploreProducts: "浏览产品",
      wholesaleInquiries: "批发咨询",
      scroll: "滚动",
    },
    values: {
      title: "为什么选择 Sword",
      subtitle: "我们将全球采购专业知识与对质量和服务卓越的坚定承诺相结合。",
      items: [
        { title: "精选产品", description: "从经过验证的制造商手工挑选的产品，确保每次都符合您的质量标准。" },
        { title: "质量保证", description: "严格的质量控制流程和检验确保所有货物的可靠性。" },
        { title: "价格竞争力", description: "直接采购合作伙伴关系使我们能够为批量和个人订单提供卓越价值。" },
        { title: "专业支持", description: "从采购到交付的专家指导，为每位客户提供个性化支持。" },
      ],
    },
    products: {
      label: "产品目录",
      title: "产品类别",
      subtitle: "探索我们涵盖多个行业的全面质量保证产品目录。",
      exploreCategory: "探索类别",
      categories: [
        {
          title: "电子产品",
          description: "来自认证制造商的消费电子产品、智能设备和配件",
          features: ["质量认证", "最新技术", "全球品牌"],
        },
        {
          title: "家居生活",
          description: "具有优质工艺的家具、装饰和家居必需品",
          features: ["可持续材料", "现代设计", "耐用品质"],
        },
        {
          title: "时尚",
          description: "符合国际质量标准的服装、配件和纺织品",
          features: ["优质面料", "引领潮流", "道德采购"],
        },
        {
          title: "工业",
          description: "专业应用的设备、组件和B2B供应品",
          features: ["ISO认证", "批量供应", "定制订单"],
        },
      ],
    },
    wholesale: {
      label: "企业服务",
      title: "量身定制的批发解决方案",
      subtitle: "与 Sword bv 合作，获得随您业务扩展的全面批发采购。从小批量到集装箱货物，我们提供卓越的价值和服务。",
      cta: "请求批发报价",
      benefits: ["批量订单折扣", "专属客户经理", "定制采购解决方案", "灵活付款条件", "优先物流配送", "质量检验服务"],
    },
    about: {
      label: "关于 Sword bv",
      title: "连接市场的桥梁",
      paragraphs: [
        "Sword bv 是您值得信赖的优质全球采购合作伙伴，将企业和消费者与全球领先制造商的优质产品连接起来。",
        "我们的专业知识涵盖电子产品、时尚、家居用品和工业设备。我们将深厚的市场知识与严格的质量标准相结合。",
        "凭借对透明度、可靠性和您成功的承诺，我们处理国际采购的复杂性，让您专注于发展业务。",
      ],
      capabilities: [
        { title: "全球网络", description: "与经过验证的领先制造商直接合作" },
        { title: "质量保证", description: "每批货物的严格检验协议" },
        { title: "可靠物流", description: "流畅的全球配送服务" },
      ],
    },
    contact: {
      label: "联系我们",
      title: "开始对话",
      subtitle: "准备好采购优质产品了吗？联系我们，我们的团队将迅速回复。",
      email: "电子邮件",
      phone: "电话咨询",
      visit: "访问我们",
      hours: "营业时间",
      hoursValue: "周一至周五: 9:00 - 18:00 CET",
      formTitle: "发送消息",
      formSubtitle: "填写下面的表格，我们将在24小时内回复您。",
      fullName: "姓名",
      emailAddress: "电子邮件地址",
      companyName: "公司名称",
      inquiryType: "咨询类型",
      inquiryTypes: { retail: "零售咨询", wholesale: "批发咨询", partnership: "合作机会", other: "一般问题" },
      yourMessage: "您的留言",
      messagePlaceholder: "告诉我们您的采购需求...",
      sendMessage: "发送消息",
    },
    footer: {
      tagline: "优质采购解决方案，将企业和消费者与全球优质产品连接起来。",
      quickLinks: "快速链接",
      services: "服务",
      servicesItems: ["产品采购", "质量检验", "物流配送", "定制解决方案"],
      contactTitle: "联系方式",
      rights: "版权所有。",
      privacy: "隐私政策",
      terms: "服务条款",
    },
  },
  es: {
    nav: {
      products: "Productos",
      wholesale: "Mayorista",
      about: "Nosotros",
      contact: "Contacto",
      getStarted: "Comenzar",
      cart: "Carrito",
    },
    hero: {
      title1: "Sourcing Premium,",
      title2: "Entrega Global",
      subtitle:
        "Sword bv conecta empresas y consumidores con productos de alta calidad de fabricantes líderes a nivel mundial. Confianza en fiabilidad, servicio excepcional y compromiso inquebrantable con la calidad.",
      exploreProducts: "Explorar Productos",
      wholesaleInquiries: "Consultas Mayoristas",
      scroll: "Desplazar",
    },
    values: {
      title: "Por Qué Elegir Sword",
      subtitle:
        "Combinamos experiencia en sourcing global con compromiso inquebrantable con la calidad y excelencia en el servicio.",
      items: [
        {
          title: "Selección Curada",
          description:
            "Productos seleccionados de fabricantes verificados, asegurando que la calidad cumpla sus estándares.",
        },
        {
          title: "Garantía de Calidad",
          description:
            "Rigurosos procesos de control de calidad e inspecciones garantizan fiabilidad en todos los envíos.",
        },
        {
          title: "Precios Competitivos",
          description:
            "Las asociaciones directas nos permiten ofrecer valor excepcional para pedidos al por mayor e individuales.",
        },
        {
          title: "Soporte Dedicado",
          description: "Orientación experta desde el sourcing hasta la entrega, con soporte personalizado.",
        },
      ],
    },
    products: {
      label: "Nuestro Catálogo",
      title: "Categorías de Productos",
      subtitle: "Explore nuestro catálogo completo de productos con garantía de calidad en múltiples industrias.",
      exploreCategory: "Explorar Categoría",
      categories: [
        {
          title: "Electrónica",
          description: "Electrónica de consumo, dispositivos inteligentes y accesorios de fabricantes certificados",
          features: ["Certificado", "Última Tecnología", "Marcas Globales"],
        },
        {
          title: "Hogar y Vida",
          description: "Muebles, decoración y artículos del hogar con artesanía premium",
          features: ["Materiales Sostenibles", "Diseño Moderno", "Calidad Duradera"],
        },
        {
          title: "Moda",
          description: "Ropa, accesorios y textiles que cumplen estándares internacionales",
          features: ["Telas Premium", "Tendencia", "Sourcing Ético"],
        },
        {
          title: "Industrial",
          description: "Equipos, componentes y suministros B2B para aplicaciones profesionales",
          features: ["Certificado ISO", "Disponible al Por Mayor", "Pedidos Personalizados"],
        },
      ],
    },
    wholesale: {
      label: "Para Empresas",
      title: "Soluciones Mayoristas a Tu Medida",
      subtitle:
        "Asóciese con Sword bv para sourcing mayorista integral que escala con su negocio. Desde pequeños lotes hasta contenedores completos.",
      cta: "Solicitar Precio Mayorista",
      benefits: [
        "Descuentos por volumen",
        "Gestión de cuenta dedicada",
        "Soluciones de sourcing personalizadas",
        "Términos de pago flexibles",
        "Envío prioritario",
        "Servicios de inspección",
      ],
    },
    about: {
      label: "Sobre Sword bv",
      title: "Construyendo Puentes Entre Mercados",
      paragraphs: [
        "Sword bv es su socio confiable para sourcing global premium, conectando empresas y consumidores con productos de calidad de fabricantes líderes en todo el mundo.",
        "Nuestra experiencia abarca electrónica, moda, artículos del hogar y equipos industriales. Combinamos profundo conocimiento del mercado con rigurosos estándares de calidad.",
        "Con compromiso de transparencia, fiabilidad y su éxito, manejamos las complejidades del sourcing internacional para que pueda enfocarse en hacer crecer su negocio.",
      ],
      capabilities: [
        { title: "Red Global", description: "Asociaciones directas con fabricantes verificados en los principales centros de producción" },
        { title: "Calidad Asegurada", description: "Protocolos de inspección rigurosos para cada envío" },
        { title: "Logística Confiable", description: "Envío optimizado a destinos en todo el mundo" },
      ],
    },
    contact: {
      label: "Contáctenos",
      title: "Iniciemos una Conversación",
      subtitle: "¿Listo para obtener productos de calidad? Contáctenos y nuestro equipo responderá rápidamente.",
      email: "Correo",
      phone: "Llámenos",
      visit: "Visítenos",
      hours: "Horario",
      hoursValue: "Lun - Vie: 9:00 - 18:00 CET",
      formTitle: "Envíenos un Mensaje",
      formSubtitle: "Complete el formulario y le responderemos en 24 horas.",
      fullName: "Nombre Completo",
      emailAddress: "Correo Electrónico",
      companyName: "Empresa",
      inquiryType: "Tipo de Consulta",
      inquiryTypes: {
        retail: "Consulta Minorista",
        wholesale: "Consulta Mayorista",
        partnership: "Oportunidad de Asociación",
        other: "Pregunta General",
      },
      yourMessage: "Su Mensaje",
      messagePlaceholder: "Cuéntenos sobre sus necesidades de sourcing...",
      sendMessage: "Enviar Mensaje",
    },
    footer: {
      tagline: "Soluciones de sourcing premium que conectan empresas y consumidores con productos de calidad de fabricantes globales de confianza.",
      quickLinks: "Enlaces Rápidos",
      services: "Servicios",
      servicesItems: [
        "Sourcing de Productos",
        "Inspección de Calidad",
        "Logística y Envío",
        "Soluciones Personalizadas",
      ],
      contactTitle: "Contacto",
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations[Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
