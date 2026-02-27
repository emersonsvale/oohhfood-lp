<template>
  <section id="contact" class="py-20 md:py-28 relative overflow-hidden bg-dark-900 grain-overlay" aria-label="Comece a usar o OohhFood gratuitamente">
    <!-- Animated gradient background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-warm/10 to-brand-600/20 animate-gradient" style="background-size: 200% 200%; animation: gradient-shift 8s ease infinite;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[100px]"></div>
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Pronto para transformar<br />
          <span class="text-gradient">seu restaurante?</span>
        </h2>
        <p class="text-lg md:text-xl text-white/40 mb-10 font-light max-w-xl mx-auto">
          Comece seu teste gratuito de 30 dias hoje mesmo. Sem cartão de crédito, sem compromisso.
        </p>
        
        <a
          href="https://app.oohhfood.com.br/signup"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-white text-dark-900 px-10 py-4 rounded-2xl font-display font-bold text-lg hover:bg-cream hover:scale-105 shadow-2xl transition-all duration-300"
          aria-label="Começar teste grátis de 30 dias do OohhFood (abre em nova aba)"
        >
          Começar Teste Grátis
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
