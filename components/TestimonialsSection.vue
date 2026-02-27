<template>
  <section class="py-20 md:py-28 bg-cream relative overflow-hidden">
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
      <div class="text-center mb-14 md:mb-20">
        <span class="section-label mb-4 inline-flex">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
          Depoimentos
        </span>
        <h2 class="section-title mb-5">
          O que nossos clientes<br class="hidden md:block" />
          <span class="text-gradient">dizem sobre nós</span>
        </h2>
        <p class="section-subtitle">
          Histórias reais de restaurantes que transformaram seus negócios
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
        <TestimonialCard
          name="Maria Silva"
          role="Proprietária da Pizzaria Bella"
          content="O OohhFood revolucionou nosso atendimento. Os clientes adoram fazer pedidos pelo QR code e nossa equipe consegue focar no que realmente importa."
          :rating="5"
        />
        <TestimonialCard
          name="João Santos"
          role="Gerente do Restaurante Sabor & Arte"
          content="O dashboard nos dá insights valiosos sobre nossos produtos mais vendidos. Conseguimos aumentar nosso ticket médio em 40%!"
          :rating="5"
        />
        <TestimonialCard
          name="Ana Costa"
          role="Dona da Lanchonete Express"
          content="A loja online foi um divisor de águas. Agora recebemos pedidos de delivery 24/7 e nossa receita aumentou significativamente."
          :rating="5"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
