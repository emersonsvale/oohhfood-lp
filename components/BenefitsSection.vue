<template>
  <section id="benefits" class="py-20 md:py-28 bg-white relative overflow-hidden" aria-label="Benefícios do OohhFood para seu restaurante">
    <div class="absolute inset-0 bg-warm-gradient"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
      <div class="text-center mb-14 md:mb-20">
        <span class="section-label mb-4 inline-flex">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Benefícios
        </span>
        <h2 class="section-title mb-5">
          Por que escolher o<br class="hidden md:block" />
          <span class="text-gradient">OohhFood?</span>
        </h2>
        <p class="section-subtitle">
          Resultados reais que fazem a diferença no seu dia a dia
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div class="space-y-3">
          <BenefitItem
            number="01"
            title="Aumente suas Vendas"
            description="Cardápio digital e QR code nas mesas permitem que clientes façam pedidos a qualquer momento, aumentando o ticket médio."
          />
          <BenefitItem
            number="02"
            title="Reduza Erros"
            description="Pedidos diretos do cliente reduzem erros de comunicação e aumentam a satisfação."
          />
          <BenefitItem
            number="03"
            title="Economize Tempo"
            description="Automatize processos e foque no que realmente importa: atender bem seus clientes."
          />
          <BenefitItem
            number="04"
            title="Dados em Tempo Real"
            description="Dashboard completo com métricas importantes para tomar decisões baseadas em dados."
          />
        </div>
        
        <!-- Stats Card -->
        <div class="relative">
          <div class="absolute -inset-4 bg-brand-500/10 rounded-[2rem] blur-2xl"></div>
          <div class="relative bg-dark-900 rounded-3xl p-8 md:p-10 text-white overflow-hidden grain-overlay">
            <div class="absolute inset-0 mesh-gradient opacity-40"></div>
            <div class="relative z-10 space-y-8">
              <div class="flex items-center gap-5 group">
                <div class="w-14 h-14 rounded-2xl bg-green-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div class="text-4xl md:text-5xl font-display font-bold">+35%</div>
                  <div class="text-white/40 text-sm mt-0.5">Aumento médio no ticket</div>
                </div>
              </div>
              
              <div class="h-px bg-white/10"></div>

              <div class="flex items-center gap-5 group">
                <div class="w-14 h-14 rounded-2xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-4xl md:text-5xl font-display font-bold">-50%</div>
                  <div class="text-white/40 text-sm mt-0.5">Redução no tempo de atendimento</div>
                </div>
              </div>

              <div class="h-px bg-white/10"></div>
              
              <div class="flex items-center gap-5 group">
                <div class="w-14 h-14 rounded-2xl bg-yellow-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div class="text-4xl md:text-5xl font-display font-bold">4.8/5</div>
                  <div class="text-white/40 text-sm mt-0.5">Satisfação dos clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
