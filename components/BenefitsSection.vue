<template>
  <section id="benefits" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Por que escolher o OohhFood?
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Benefícios reais para o seu negócio
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
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
        
        <div class="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white shadow-2xl">
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <div>
                <div class="text-4xl font-bold">+35%</div>
                <div class="text-red-100">Aumento médio no ticket</div>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <div class="text-4xl font-bold">-50%</div>
                <div class="text-red-100">Redução no tempo de atendimento</div>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div>
                <div class="text-4xl font-bold">4.8/5</div>
                <div class="text-red-100">Satisfação dos clientes</div>
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
