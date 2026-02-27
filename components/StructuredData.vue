<template>
  <div class="hidden" aria-hidden="true"></div>
</template>

<script setup lang="ts">
const siteUrl = 'https://oohhfood.com.br'

const faqItems = [
  {
    question: 'O que é o OohhFood e como ele funciona?',
    answer: 'O OohhFood é um sistema completo de gestão para restaurantes, lanchonetes e delivery. Ele reúne PDV (ponto de venda), cardápio digital online, QR Code nas mesas, gestão de mesas, CRM, fidelização de clientes, cupons de desconto, fluxo da cozinha (KDS), dashboard com métricas e muito mais — tudo em uma única plataforma acessível pelo navegador, sem necessidade de instalação.'
  },
  {
    question: 'Quanto custa o OohhFood? Existe teste grátis?',
    answer: 'O OohhFood oferece planos a partir de R$ 97,90/mês, com todas as funcionalidades essenciais incluídas. Todos os planos incluem 30 dias de teste grátis, sem necessidade de cartão de crédito.'
  },
  {
    question: 'Preciso instalar algum aplicativo ou programa?',
    answer: 'Não! O OohhFood funciona 100% na nuvem, direto pelo navegador do seu computador, tablet ou celular. Não é necessário instalar nenhum software.'
  },
  {
    question: 'Como funciona o cardápio digital e o QR Code nas mesas?',
    answer: 'Com o OohhFood, você cria seu cardápio digital completo com fotos, descrições e preços. Seus clientes acessam o cardápio online de qualquer lugar. Além disso, você gera QR Codes exclusivos para cada mesa — o cliente escaneia, visualiza o cardápio e faz o pedido direto da mesa.'
  },
  {
    question: 'O OohhFood serve para quais tipos de estabelecimentos?',
    answer: 'O OohhFood atende restaurantes, lanchonetes, hamburguerias, pizzarias, cafeterias, padarias, bares, food trucks, docerias, açaiterias e qualquer estabelecimento de food service.'
  },
  {
    question: 'Como o OohhFood ajuda a aumentar minhas vendas?',
    answer: 'Cardápio digital permite pedidos 24h; QR Code nas mesas aumenta o ticket médio em até 35%; CRM e fidelização mantêm clientes voltando; cupons e campanhas atraem novos clientes; dashboard com métricas permite decisões baseadas em dados.'
  },
  {
    question: 'Meus dados estão seguros no OohhFood?',
    answer: 'Sim. O OohhFood utiliza infraestrutura de nuvem com criptografia de ponta a ponta, backups automáticos diários e conformidade com a LGPD (Lei Geral de Proteção de Dados).'
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer: 'Sim, você pode cancelar sua assinatura a qualquer momento, sem multa ou fidelidade contratual. Durante o teste grátis de 30 dias, não há nenhuma cobrança.'
  }
]

const structuredData = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    // === Organization ===
    {
      '@id': `${siteUrl}#organization`,
      '@type': 'Organization',
      name: 'Vale Soluções Digitais LTDA',
      legalName: 'Vale Soluções Digitais LTDA',
      taxID: '61.712.285/0001-88',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512
      },
      image: `${siteUrl}/og-image.png`,
      description: 'Empresa brasileira especializada em soluções digitais para o setor de food service. Desenvolvedora do OohhFood, sistema completo de gestão para restaurantes.',
      foundingDate: '2023',
      areaServed: {
        '@type': 'Country',
        name: 'Brasil',
        sameAs: 'https://www.wikidata.org/wiki/Q155'
      },
      knowsLanguage: ['pt-BR'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: ['Portuguese'],
          url: `${siteUrl}/#contact`
        },
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          availableLanguage: ['Portuguese'],
          url: 'https://app.oohhfood.com.br/signup'
        }
      ],
      sameAs: [
        'https://app.oohhfood.com.br'
      ]
    },

    // === WebSite ===
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      name: 'OohhFood',
      alternateName: 'Oohh Food',
      url: siteUrl,
      description: 'Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, QR Code nas mesas, CRM e muito mais.',
      inLanguage: 'pt-BR',
      publisher: {
        '@id': `${siteUrl}#organization`
      },
      copyrightHolder: {
        '@id': `${siteUrl}#organization`
      }
    },

    // === WebPage ===
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}#webpage`,
      url: siteUrl,
      name: 'OohhFood - Sistema Completo para Restaurantes | PDV, Cardápio Digital e Gestão',
      description: 'Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas e muito mais. Teste grátis!',
      isPartOf: {
        '@id': `${siteUrl}#website`
      },
      about: {
        '@id': `${siteUrl}#software`
      },
      inLanguage: 'pt-BR',
      datePublished: '2024-01-01',
      dateModified: '2026-02-26',
      breadcrumb: {
        '@id': `${siteUrl}#breadcrumb`
      }
    },

    // === SoftwareApplication ===
    {
      '@id': `${siteUrl}#software`,
      '@type': 'SoftwareApplication',
      name: 'OohhFood',
      alternateName: ['Oohh Food', 'OohhFood Sistema para Restaurantes'],
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Restaurant Management Software',
      operatingSystem: 'Web Browser',
      offers: [
        {
          '@type': 'Offer',
          name: 'Oohh Food Básico',
          price: '97.90',
          priceCurrency: 'BRL',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          url: 'https://app.oohhfood.com.br/signup',
          description: 'Plano básico com cardápio digital, PDV, cupons e fidelização'
        },
        {
          '@type': 'Offer',
          name: 'Oohh Food Profissional',
          price: '297.90',
          priceCurrency: 'BRL',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          url: 'https://app.oohhfood.com.br/signup',
          description: 'Plano profissional completo com QR Code, KDS, gestão de estoque e muito mais'
        }
      ],
      description: 'Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas, fluxo de cozinha (KDS), dashboard de métricas, campanhas, cupons e muito mais. Ideal para hamburguerias, pizzarias, cafeterias, padarias, bares e food trucks.',
      url: siteUrl,
      downloadUrl: 'https://app.oohhfood.com.br/signup',
      logo: `${siteUrl}/logo.png`,
      screenshot: `${siteUrl}/sistema-gestao-restaurante-oohhfood.png`,
      featureList: [
        'PDV Completo para Restaurantes',
        'Cardápio Digital Online',
        'QR Code para Pedidos nas Mesas',
        'Gestão de Mesas e Ocupação',
        'CRM e Fidelização de Clientes',
        'Campanhas Promocionais e Cupons',
        'Fluxo da Cozinha (KDS)',
        'Dashboard com Métricas em Tempo Real',
        'Gestão Completa de Produtos e Estoque',
        'Cashback e Programa de Fidelidade',
        'App para Garçom com Comanda Digital',
        'Frente de Caixa'
      ],
      softwareHelp: {
        '@type': 'WebPage',
        url: `${siteUrl}/#faq`
      },
      provider: {
        '@id': `${siteUrl}#organization`
      },
      creator: {
        '@id': `${siteUrl}#organization`
      },
      sameAs: [
        'https://app.oohhfood.com.br'
      ]
    },

    // === BreadcrumbList ===
    {
      '@id': `${siteUrl}#breadcrumb`,
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: siteUrl
        }
      ]
    },

    // === FAQPage ===
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}#faq`,
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      })),
      isPartOf: {
        '@id': `${siteUrl}#webpage`
      }
    }
  ]
}, null, 2)

useHead({
  __dangerouslyDisableSanitizersByTagID: {
    'ld-json-oohhfood': ['innerHTML']
  },
  script: [
    {
      id: 'ld-json-oohhfood',
      type: 'application/ld+json',
      innerHTML: structuredData
    }
  ]
})
</script>
