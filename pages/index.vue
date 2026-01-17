<template>
  <div>
    <!-- Structured Data for SEO -->
    <StructuredData />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Features Section -->
    <FeaturesSection />
    
    <!-- Benefits Section -->
    <BenefitsSection />
    
    <!-- How It Works Section -->
    <HowItWorksSection />
    
    <!-- Pricing Section -->
    <PricingSection />
    
    <!-- Testimonials Section -->
    <TestimonialsSection />
    
    <!-- CTA Section -->
    <CTASection />
    
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'OohhFood - Sistema Completo para Restaurantes',
  meta: [
    { 
      name: 'description', 
      content: 'Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas e muito mais. Teste grátis!' 
    },
    {
      property: 'og:url',
      content: 'https://oohhfood.com.br'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://oohhfood.com.br' }
  ]
})
</script>
