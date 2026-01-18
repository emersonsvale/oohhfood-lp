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
// Acessa o tenant (subdomínio) atual
const { tenant, isApp } = useTenant()

// Acessa o cliente Supabase
const { supabase } = useSupabase()

// Busca dados da loja usando o tenant
const { data: loja, error: lojaError } = await useAsyncData(`loja-${tenant.value || 'default'}`, async () => {
  if (!tenant.value) {
    // Se não há tenant, mostra a landing page padrão
    return null
  }

  // Busca a loja pelo slug (subdomínio)
  // Ajuste o nome da tabela e coluna conforme sua estrutura no Supabase
  const { data, error } = await supabase
    .from('lojas') // Ajuste o nome da tabela se necessário
    .select('*')
    .eq('slug', tenant.value) // ou 'subdomain' dependendo da coluna no seu banco
    .single()

  if (error) {
    // Se a loja não for encontrada, retorna null (não quebra a página)
    console.warn(`Loja não encontrada para o tenant: ${tenant.value}`, error)
    return null
  }

  return data
})

// Se houver uma loja, atualiza o SEO dinamicamente
if (loja.value) {
  useHead({
    title: `${loja.value.nome || loja.value.name || tenant.value} - Cardápio Online`,
    meta: [
      { 
        name: 'description', 
        content: loja.value.descricao || loja.value.description || `Cardápio online de ${loja.value.nome || loja.value.name || tenant.value}` 
      },
      {
        property: 'og:title',
        content: `${loja.value.nome || loja.value.name || tenant.value} - Cardápio Online`
      },
      {
        property: 'og:description',
        content: loja.value.descricao || loja.value.description || `Cardápio online de ${loja.value.nome || loja.value.name || tenant.value}`
      },
      {
        property: 'og:url',
        content: `https://${tenant.value}.oohhfood.com.br`
      }
    ],
    link: [
      { 
        rel: 'canonical', 
        href: `https://${tenant.value}.oohhfood.com.br`
      }
    ]
  })
}

// Se for o painel administrativo (app.oohhfood.com.br), redireciona ou mostra conteúdo diferente
if (isApp.value) {
  // Opcional: redirecionar para o painel ou mostrar conteúdo diferente
  // await navigateTo('https://app.oohhfood.com.br')
}

// Se houver tenant mas não for app, mostra a landing page personalizada da loja
// Caso contrário, mostra a landing page padrão
if (!loja.value) {
  useHead({
    title: tenant.value 
      ? `${tenant.value} - OohhFood` 
      : 'OohhFood - Sistema Completo para Restaurantes',
    meta: [
      { 
        name: 'description', 
        content: 'Sistema completo de gestão para restaurantes, lanchonetes e delivery. PDV, cardápio digital, gestão de mesas, CRM, QR Code nas mesas e muito mais. Teste grátis!' 
      },
      {
        property: 'og:url',
        content: tenant.value 
          ? `https://${tenant.value}.oohhfood.com.br`
          : 'https://oohhfood.com.br'
      }
    ],
    link: [
      { 
        rel: 'canonical', 
        href: tenant.value 
          ? `https://${tenant.value}.oohhfood.com.br`
          : 'https://oohhfood.com.br'
      }
    ]
  })
}
</script>
