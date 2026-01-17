<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div class="container mx-auto px-4 py-3 md:py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 md:gap-3">
          <img 
            src="/logo.png" 
            alt="OohhFood - Sistema de Gestão para Restaurantes" 
            class="h-8 md:h-14 w-auto object-contain rounded-lg"
            loading="eager"
            width="120"
            height="120"
          />
            <span class="text-xl md:text-3xl font-bold text-red-600">OohhFood</span>
          </div>
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-6">
          <a href="#" class="text-gray-700 hover:text-red-600 transition" aria-label="Ir para o início da página">Início</a>
          <a href="#features" class="text-gray-700 hover:text-red-600 transition" aria-label="Ver funcionalidades do OohhFood">Funcionalidades</a>
          <a href="#benefits" class="text-gray-700 hover:text-red-600 transition" aria-label="Ver benefícios do OohhFood">Benefícios</a>
          <a href="#pricing" class="text-gray-700 hover:text-red-600 transition" aria-label="Ver planos e preços">Preços</a>
          <a href="https://app.oohhfood.com.br/lojas" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-red-600 transition" aria-label="Ver lojas cadastradas no OohhFood (abre em nova aba)">Lojas</a>
          <a href="https://app.oohhfood.com.br/login" target="_blank" rel="noopener noreferrer" class="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition" aria-label="Fazer login no OohhFood (abre em nova aba)">
            Começar Agora
          </a>
          </div>
          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-gray-700 hover:text-red-600 transition"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
          <a href="#" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ir para o início da página">Início</a>
          <a href="#features" @click="mobileMenuOpen = false" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ver funcionalidades do OohhFood">Funcionalidades</a>
          <a href="#benefits" @click="mobileMenuOpen = false" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ver benefícios do OohhFood">Benefícios</a>
          <a href="#pricing" @click="mobileMenuOpen = false" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ver planos e preços">Preços</a>
          <a href="https://app.oohhfood.com.br/lojas" target="_blank" rel="noopener noreferrer" class="block text-gray-700 hover:text-red-600 transition py-2" aria-label="Ver lojas cadastradas no OohhFood (abre em nova aba)">Lojas</a>
          <a href="https://app.oohhfood.com.br/login" target="_blank" rel="noopener noreferrer" class="block bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition text-center" aria-label="Fazer login no OohhFood (abre em nova aba)">
            Começar Agora
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Content - Two Columns -->
    <div class="relative z-10 container mx-auto px-4 pt-20 pb-8 md:pt-32 md:py-20">
      <div class="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <!-- Left Column - Text Content -->
        <div class="space-y-4 md:space-y-6 order-2 md:order-1">
          <!-- Trust Badge -->
          <p class="text-xs md:text-sm text-gray-600 font-medium">
            Confiado por milhares de profissionais de restaurantes
          </p>
          
          <!-- Main Heading -->
          <h1 class="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
            A maneira mais inteligente de gerenciar as
            <span class="text-red-600">operações do seu restaurante</span>
          </h1>
          
          <!-- Description -->
          <p class="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
            O OohhFood conecta sua equipe - da cozinha ao atendimento - para que você possa otimizar operações, reduzir desperdícios e tomar decisões baseadas em dados.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
            <a 
              href="https://app.oohhfood.com.br/signup" 
              target="_blank"
              rel="noopener noreferrer"
              class="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              aria-label="Começar teste grátis do OohhFood (abre em nova aba)"
            >
              Começar Teste Grátis
            </a>
            <a 
              href="#features" 
              class="bg-white text-red-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-50 transition border-2 border-red-600 text-center"
              aria-label="Explorar recursos e funcionalidades do OohhFood"
            >
              Explorar Recursos
            </a>
          </div>
        </div>

        <!-- Right Column - Image with Floating Elements -->
        <div class="relative hero-image-container order-1 md:order-2">
          <!-- Background Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-red-100 via-red-200 to-red-300 hero-gradient-mask"></div>
          
          <!-- Main Image Container with Cut Shape -->
          <div class="relative z-10 hero-image-wrapper">
            <img 
              src="/Gemini_Generated_Image_w1gxe3w1gxe3w1gx.png" 
              alt="Sistema OohhFood - Interface de gestão de restaurante com pedidos, produtos e dashboard" 
              class="hero-image-cut"
              loading="eager"
              width="800"
              height="600"
            />
            
            <!-- Floating Elements -->
            <!-- Today's Tasks Card -->
            <div class="hidden sm:block absolute top-2 right-2 md:top-4 md:right-4 bg-white rounded-lg shadow-xl p-2 md:p-4 floating-animation-1 max-w-[140px] md:max-w-[200px]">
              <h3 class="text-xs md:text-sm font-semibold text-gray-900 mb-1 md:mb-2">Pedidos de Hoje</h3>
              <ul class="space-y-1 md:space-y-2 text-[10px] md:text-xs">
                <li class="flex items-center justify-between">
                  <span class="text-gray-600 truncate pr-1">15 Hambúrgueres</span>
                  <span class="bg-green-100 text-green-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold flex-shrink-0">Enviado</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-gray-600 truncate pr-1">6 Pastéis</span>
                  <span class="bg-yellow-100 text-yellow-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold flex-shrink-0">FEITO</span>
                </li>
                <li class="flex items-center justify-between">
                  <span class="text-gray-600 truncate pr-1">8 Milk Shakes</span>
                  <span class="bg-gray-100 text-gray-600 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold flex-shrink-0">PENDENTE</span>
                </li>
              </ul>
            </div>

            <!-- Product Card -->
            <div class="hidden sm:block absolute bottom-12 left-2 md:bottom-20 md:left-4 bg-white rounded-lg shadow-xl p-2 md:p-4 floating-animation-2 max-w-[150px] md:max-w-[220px]">
              <div class="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <svg class="w-4 h-4 md:w-6 md:h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div class="min-w-0">
                  <h3 class="font-bold text-gray-900 text-xs md:text-sm truncate">Hambúrguer Artesanal</h3>
                  <p class="text-[10px] md:text-xs text-gray-500">Mais vendido</p>
                </div>
              </div>
              <div class="space-y-0.5 md:space-y-1 text-[10px] md:text-xs mb-2 md:mb-3">
                <div class="flex justify-between text-gray-600">
                  <span class="truncate pr-1">Pão artesanal</span>
                  <span class="font-semibold flex-shrink-0">R$ 6,39</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span class="truncate pr-1">Carne premium</span>
                  <span class="font-semibold flex-shrink-0">R$ 12,87</span>
                </div>
                <div class="flex justify-between text-gray-600">
                  <span class="truncate pr-1">Queijo especial</span>
                  <span class="font-semibold flex-shrink-0">R$ 4,50</span>
                </div>
              </div>
              <div class="flex flex-wrap gap-0.5 md:gap-1 mb-1 md:mb-2">
                <span class="bg-red-100 text-red-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold">Lactose</span>
                <span class="bg-yellow-100 text-yellow-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold">Glúten</span>
                <span class="bg-orange-100 text-orange-700 px-1 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-semibold">Ovo</span>
              </div>
              <div class="pt-1 md:pt-2 border-t border-gray-200">
                <div class="flex justify-between items-center">
                  <span class="text-[10px] md:text-xs text-gray-600">Custo total:</span>
                  <span class="text-xs md:text-sm font-bold text-red-600">R$ 23,76</span>
                </div>
              </div>
            </div>

            <!-- Notification Card -->
            <div class="hidden md:block absolute top-1/2 right-8 bg-white rounded-lg shadow-xl p-3 floating-animation-3 max-w-[180px]">
              <div class="flex items-start gap-2">
                <div class="bg-red-100 rounded-full p-2 flex-shrink-0">
                  <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-xs font-semibold text-gray-900 mb-1">OohhFood</p>
                  <p class="text-xs text-gray-600 leading-tight">
                    O preço dos <span class="font-semibold">ovos aumentou 10%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trusted By Section -->
    <div class="relative z-10 border-t border-gray-200 py-6 md:py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <p class="text-center text-xs md:text-base text-gray-600 mb-4 md:mb-8 font-medium">
          Confiado por equipes de restaurantes de destaque
        </p>
        <ClientLogos :clients="clients" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Client {
  name: string
  logo?: string
}

// Mobile menu state
const mobileMenuOpen = ref(false)

// Lista de clientes - adicione os logos na pasta /public/logos/
const clients: Client[] = [
  {
    name: 'Cliente 1',
    logo: '/logos/logo (3).png'
  },
  {
    name: 'Cliente 2',
    logo: '/logos/logo.jpeg'
  }
]
</script>

<style scoped>
.hero-image-container {
  min-height: 300px;
}

@media (min-width: 768px) {
  .hero-image-container {
    min-height: 500px;
  }
}

.hero-gradient-mask {
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
  border-radius: 0 2rem 2rem 0;
}

.hero-image-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.hero-image-cut {
  width: 100%;
  height: auto;
  object-fit: cover;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
  border-radius: 0 2rem 2rem 0;
  box-shadow: -10px 10px 40px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-gradient-mask,
  .hero-image-cut {
    clip-path: none;
    border-radius: 1rem;
  }
  
  .hero-image-container {
    margin: 0 -1rem;
    width: calc(100% + 2rem);
  }
  
  .hero-image-wrapper {
    padding: 0 1rem;
  }
}

.floating-animation-1 {
  animation: float1 6s ease-in-out infinite;
}

.floating-animation-2 {
  animation: float2 8s ease-in-out infinite;
}

.floating-animation-3 {
  animation: float3 7s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-15px) translateX(5px);
  }
}

@keyframes float2 {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(10px) translateX(-8px);
  }
}

@keyframes float3 {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-12px) translateX(6px);
  }
}
</style>
