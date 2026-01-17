<template>
  <section id="pricing" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Planos que Cabem no seu Orçamento
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Escolha o plano ideal para o tamanho do seu negócio
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard
          name="Oohh Food Básico"
          price="R$ 97,90"
          period="mês"
          description="Ideal para pequenos estabelecimentos"
          features="Cardápio Digital, Pedidos em Balcão (PDV),  Cupons e Cashback, Frente de Caixa"
          :popular="false"
        />
        <PricingCard
          name="Oohh Food Profissional"
          price="R$ 297,90"
          period="mês"
          description="Para restaurantes em crescimento"
          features="Cardápio Digital, Pedidos em Balcão (PDV), QR Code para mesas, Aplicativo para Garçom com Comanda Digital, Cupons, Cashback e Fidelização automatizada, Recuperador de Vendas, Cadastro de Entregadores, Frente de Caixa, Display para pedidos de cozinha (KDS), Gestor de Estoque,"
          :popular="true"
        />
        <PricingCard
          name="Oohh Food Enterprise"
          price="Sob Consulta"
          period=""
          description="Solução personalizada para grandes redes"
          features=""
          :popular="false"
          :button-text="'Entre em Contato'"
          button-link="#contact"
          :is-enterprise="true"
        />
      </div>

      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">
          Todos os planos incluem teste gratuito de 30 dias
        </p>
        <a 
          href="#contact" 
          class="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg"
          aria-label="Começar teste grátis de 30 dias do OohhFood"
        >
          Começar Teste Grátis
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
