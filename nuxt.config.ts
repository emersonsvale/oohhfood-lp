// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Variáveis privadas (apenas servidor)
    supabaseServiceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    // Variáveis públicas (disponíveis no cliente e servidor)
    public: {
      supabaseUrl: process.env.SUPABASE_URL || 'https://baexcsepiwkdlkitfcaf.supabase.co',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'OohhFood',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas e muito mais. Teste grátis!'
        },
        {
          name: 'keywords',
          content: 'sistema restaurante, PDV restaurante, cardápio digital, gestão restaurante, sistema delivery, QR code mesa, CRM restaurante, software restaurante, gestão lanchonete, sistema food service'
        },
        { name: 'author', content: 'Vale Soluções Digitais LTDA' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'theme-color', content: '#dc2626' },
        { name: 'format-detection', content: 'telephone=no' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'OohhFood' },
        { property: 'og:title', content: 'OohhFood - Sistema Completo para Restaurantes' },
        { property: 'og:description', content: 'Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM e muito mais.' },
        { property: 'og:image', content: 'https://oohhfood.com.br/og-image.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'OohhFood - Sistema Completo de Gestão para Restaurantes, Lanchonetes e Delivery' },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:url', content: 'https://oohhfood.com.br' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'OohhFood - Sistema Completo para Restaurantes' },
        { name: 'twitter:description', content: 'Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM e muito mais.' },
        { name: 'twitter:image', content: 'https://oohhfood.com.br/og-image.png' },
        { name: 'twitter:image:alt', content: 'OohhFood - Sistema Completo de Gestão para Restaurantes' },

        // Geo targeting
        { name: 'geo.region', content: 'BR' },
        { name: 'geo.placename', content: 'Brasil' },
        { name: 'content-language', content: 'pt-BR' },
        { name: 'distribution', content: 'global' },
        { name: 'rating', content: 'general' },
        { name: 'revisit-after', content: '7 days' },

        // Additional SEO
        { name: 'application-name', content: 'OohhFood' },
        { name: 'apple-mobile-web-app-title', content: 'OohhFood' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'mobile-web-app-capable', content: 'yes' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://oohhfood.com.br' },
        { rel: 'alternate', hreflang: 'pt-BR', href: 'https://oohhfood.com.br' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://baexcsepiwkdlkitfcaf.supabase.co' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Figtree:wght@300;400;500;600;700&display=swap' },
        { rel: 'author', href: 'https://oohhfood.com.br' }
      ]
    }
  }
})
