<template>
  <section id="features" class="py-20 md:py-28 bg-cream relative overflow-hidden" aria-label="Funcionalidades do sistema OohhFood para restaurantes">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-warm/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
      <div class="text-center mb-14 md:mb-20">
        <span class="section-label mb-4 inline-flex">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Funcionalidades
        </span>
        <h2 class="section-title mb-5">
          Tudo que seu restaurante<br class="hidden md:block" />
          <span class="text-gradient">precisa em um só lugar</span>
        </h2>
        <p class="section-subtitle">
          Do primeiro pedido ao fechamento do caixa — cada funcionalidade foi pensada para simplificar sua operação.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <FeatureCard
          icon="credit-card"
          title="PDV Completo"
          description="Sistema de ponto de venda intuitivo com carrinho, busca de produtos, descontos e rascunhos de pedidos."
        />
        <FeatureCard
          icon="food"
          title="Cardápio Digital"
          description="Loja pública online estilo iFood com carrinho, checkout e múltiplos métodos de pagamento."
        />
        <FeatureCard
          icon="device-mobile"
          title="QR Code nas Mesas"
          description="Clientes fazem pedidos direto da mesa através de QR code. Sem necessidade de garçom para anotar."
        />
        <FeatureCard
          icon="table"
          title="Gestão de Mesas"
          description="Controle completo de ocupação, status, atribuição de garçom e histórico de pedidos por mesa."
        />
        <FeatureCard
          icon="users"
          title="CRM e Fidelização"
          description="Cadastro de clientes, histórico de compras, análise de comportamento e integração com WhatsApp."
        />
        <FeatureCard
          icon="target"
          title="Campanhas e Cupons"
          description="Sistema promocional completo com cupons de desconto e promoções automáticas."
        />
        <FeatureCard
          icon="fire"
          title="Fluxo da Cozinha"
          description="Visualização de pedidos pendentes, mudança de status e priorização de pedidos."
        />
        <FeatureCard
          icon="chart-bar"
          title="Dashboard Completo"
          description="Receita do mês, comparações, produtos mais vendidos, mesas ativas e funcionários online."
        />
        <FeatureCard
          icon="cog"
          title="Gestão Completa"
          description="Produtos, categorias, sabores, adicionais, funcionários, horários e muito mais."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
