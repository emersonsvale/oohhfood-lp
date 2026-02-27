<template>
  <div class="min-h-screen bg-dark-900 grain-overlay flex items-center justify-center relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 mesh-gradient opacity-40"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px]"></div>

    <div class="relative z-10 text-center px-5 max-w-xl mx-auto">
      <!-- 404 Number -->
      <div class="text-8xl md:text-9xl font-display font-bold text-white/10 mb-4 select-none">
        404
      </div>

      <h1 class="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
        Página não encontrada
      </h1>

      <p class="text-white/40 text-lg mb-10 font-light max-w-md mx-auto">
        A página que você está procurando não existe ou foi movida. Que tal voltar ao início e conhecer o OohhFood?
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center gap-2 bg-white text-dark-900 px-8 py-4 rounded-2xl font-display font-bold text-base hover:bg-cream hover:scale-105 shadow-2xl transition-all duration-300"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Voltar ao Início
        </NuxtLink>
        <a
          href="https://app.oohhfood.com.br/signup"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary !px-8 !py-4 !text-base !rounded-2xl"
          aria-label="Começar teste grátis do OohhFood"
        >
          Teste Grátis
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
      </div>

      <!-- SEO helpful links -->
      <div class="mt-16 pt-8 border-t border-white/5">
        <p class="text-white/20 text-sm mb-4 font-medium uppercase tracking-wider">Páginas úteis</p>
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          <NuxtLink to="/#features" class="text-white/40 hover:text-white transition-colors">Funcionalidades</NuxtLink>
          <NuxtLink to="/#pricing" class="text-white/40 hover:text-white transition-colors">Preços</NuxtLink>
          <NuxtLink to="/#faq" class="text-white/40 hover:text-white transition-colors">Dúvidas</NuxtLink>
          <a href="https://app.oohhfood.com.br/login" target="_blank" rel="noopener noreferrer" class="text-white/40 hover:text-white transition-colors">Login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Página Não Encontrada - OohhFood',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'description', content: 'A página que você procura não foi encontrada. Conheça o OohhFood, sistema completo de gestão para restaurantes.' }
  ]
})

definePageMeta({
  layout: false
})
</script>
