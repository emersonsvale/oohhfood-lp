<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          O que nossos clientes dizem
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Histórias reais de restaurantes que transformaram seus negócios
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <TestimonialCard
          name="Maria Silva"
          role="Proprietária da Pizzaria Bella"
          content="O OohhFood revolucionou nosso atendimento. Os clientes adoram fazer pedidos pelo QR code e nossa equipe consegue focar no que realmente importa."
          rating={5}
        />
        <TestimonialCard
          name="João Santos"
          role="Gerente do Restaurante Sabor & Arte"
          content="O dashboard nos dá insights valiosos sobre nossos produtos mais vendidos. Conseguimos aumentar nosso ticket médio em 40%!"
          rating={5}
        />
        <TestimonialCard
          name="Ana Costa"
          role="Dona da Lanchonete Express"
          content="A loja online foi um divisor de águas. Agora recebemos pedidos de delivery 24/7 e nossa receita aumentou significativamente."
          rating={5}
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
