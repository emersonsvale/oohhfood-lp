<template>
  <script type="application/ld+json" v-html="structuredData"></script>
</template>

<script setup lang="ts">
const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'OohhFood',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL',
        description: 'Teste grátis de 30 dias disponível',
        availability: 'https://schema.org/InStock'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1'
      },
      description: 'Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas e muito mais.',
      url: 'https://oohhfood.com.br',
      logo: 'https://oohhfood.com.br/logo.png',
      screenshot: 'https://oohhfood.com.br/Gemini_Generated_Image_w1gxe3w1gxe3w1gx.png',
      featureList: [
        'PDV Completo',
        'Cardápio Digital',
        'QR Code nas Mesas',
        'Gestão de Mesas',
        'CRM e Fidelização',
        'Campanhas e Cupons',
        'Fluxo da Cozinha',
        'Dashboard Completo',
        'Gestão Completa'
      ],
      provider: {
        '@id': 'https://oohhfood.com.br#organization'
      },
      sameAs: [
        'https://app.oohhfood.com.br'
      ]
    },
    {
      '@id': 'https://oohhfood.com.br#organization',
      '@type': 'Organization',
      name: 'Vale Soluções Digitais LTDA',
      legalName: 'Vale Soluções Digitais LTDA',
      taxID: '61.712.285/0001-88',
      url: 'https://oohhfood.com.br',
      logo: 'https://oohhfood.com.br/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['Portuguese', 'pt-BR']
      },
      sameAs: [
        'https://app.oohhfood.com.br'
      ]
    },
    {
      '@type': 'WebSite',
      name: 'OohhFood',
      url: 'https://oohhfood.com.br',
      publisher: {
        '@id': 'https://oohhfood.com.br#organization'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://oohhfood.com.br/?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://oohhfood.com.br'
        }
      ]
    }
  ]
}, null, 2)
</script>
