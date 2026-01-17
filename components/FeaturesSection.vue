<template>
  <section id="features" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Funcionalidades Completas
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Tudo que você precisa para gerenciar seu restaurante de forma eficiente e moderna
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
