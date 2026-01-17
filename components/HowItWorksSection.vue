<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Como Funciona
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Em poucos passos, seu restaurante estará digitalizado
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-3 gap-8">
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
