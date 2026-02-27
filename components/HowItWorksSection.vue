<template>
  <section class="py-20 md:py-28 bg-cream relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
      <div class="text-center mb-14 md:mb-20">
        <span class="section-label mb-4 inline-flex">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          Como Funciona
        </span>
        <h2 class="section-title mb-5">
          Comece em <span class="text-gradient">3 passos simples</span>
        </h2>
        <p class="section-subtitle">
          Em poucos minutos, seu restaurante estará totalmente digitalizado
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <!-- Connection line -->
        <div class="hidden md:block absolute left-1/2 top-1/2 w-[60%] h-px bg-gradient-to-r from-brand-200 via-brand-300 to-warm/30 -translate-x-1/2" style="margin-top: 40px;"></div>
        
        <div class="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          <StepCard
            step="1"
            title="Cadastre-se"
            description="Crie sua conta gratuitamente e configure seu estabelecimento em minutos."
            icon="📝"
          />
          <StepCard
            step="2"
            title="Configure seu Cardápio"
            description="Adicione produtos, categorias, preços e fotos. É simples e intuitivo."
            icon="🍽️"
          />
          <StepCard
            step="3"
            title="Comece a Vender"
            description="Gere QR codes para suas mesas, ative sua loja online e comece a receber pedidos!"
            icon="🚀"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
