<template>
  <section class="relative overflow-hidden bg-dark-900 grain-overlay" aria-label="O OohhFood é o sistema mais completo para gestão de restaurantes, lanchonetes e delivery no Brasil">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" :class="scrolled ? 'bg-white/90 backdrop-blur-xl shadow-glass border-b border-dark-100' : 'bg-transparent'" aria-label="Navegação principal do OohhFood">
      <div class="max-w-7xl mx-auto px-5 md:px-8 py-3 md:py-4">
        <div class="flex items-center justify-between">
          <a href="#" class="flex items-center gap-2 md:gap-3 group">
            <img 
              src="/logo.png" 
              alt="OohhFood - Sistema de Gestão para Restaurantes" 
              class="h-8 md:h-12 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
              loading="eager"
              width="120"
              height="120"
            />
            <span class="text-xl md:text-2xl font-display font-bold transition-colors duration-300" :class="scrolled ? 'text-dark-900' : 'text-white'">
              Oohh<span class="text-brand-500">Food</span>
            </span>
          </a>
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-1">
            <a v-for="link in navLinks" :key="link.href" :href="link.href" :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener noreferrer' : undefined"
              class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              :class="scrolled ? 'text-dark-500 hover:text-dark-900 hover:bg-dark-50' : 'text-white/70 hover:text-white hover:bg-white/10'"
              :aria-label="link.label"
            >
              {{ link.text }}
            </a>
            <a href="https://app.oohhfood.com.br/login" target="_blank" rel="noopener noreferrer" 
              class="ml-3 btn-primary !py-2.5 !px-5 !text-sm !rounded-xl"
              aria-label="Fazer login no OohhFood (abre em nova aba)"
            >
              Começar Agora
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </div>
          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-xl transition-colors duration-300"
            :class="scrolled ? 'text-dark-700 hover:bg-dark-50' : 'text-white/80 hover:bg-white/10'"
            aria-label="Toggle menu"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
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
        <Transition name="menu-slide">
          <div v-if="mobileMenuOpen" id="mobile-menu" class="md:hidden mt-3 pb-4 space-y-1 border-t pt-4" :class="scrolled ? 'border-dark-100' : 'border-white/10'">
            <a v-for="link in navLinks" :key="link.href" :href="link.href" :target="link.external ? '_blank' : undefined" :rel="link.external ? 'noopener noreferrer' : undefined"
              @click="mobileMenuOpen = false"
              class="block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
              :class="scrolled ? 'text-dark-600 hover:bg-dark-50' : 'text-white/70 hover:bg-white/10'"
              :aria-label="link.label"
            >
              {{ link.text }}
            </a>
            <a href="https://app.oohhfood.com.br/login" target="_blank" rel="noopener noreferrer" @click="mobileMenuOpen = false"
              class="block btn-primary !text-center !text-sm mt-2"
              aria-label="Fazer login no OohhFood (abre em nova aba)"
            >
              Começar Agora
            </a>
          </div>
        </Transition>
      </div>
    </nav>

    <!-- Background Layers -->
    <div class="absolute inset-0 mesh-gradient opacity-60"></div>
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>

    <!-- Hero Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-12 md:pt-40 md:pb-20">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <!-- Left Column -->
        <div class="space-y-6 md:space-y-8 order-2 lg:order-1">
          <!-- Trust Badge -->
          <div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span class="text-xs md:text-sm text-white/60 font-medium">
              +1.000 restaurantes já utilizam
            </span>
          </div>
          
          <!-- Main Heading -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.08] tracking-tight">
            A forma mais inteligente de gerenciar seu
            <span class="text-gradient">restaurante</span>
          </h1>
          
          <!-- Description -->
          <p class="text-base md:text-lg text-white/50 leading-relaxed max-w-xl font-light">
            Da cozinha ao atendimento — otimize operações, reduza desperdícios e tome decisões baseadas em dados reais. Tudo em uma plataforma.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
            <a 
              href="https://app.oohhfood.com.br/signup" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary !px-8 !py-4 !text-base !rounded-2xl"
              aria-label="Começar teste grátis do OohhFood (abre em nova aba)"
            >
              Começar Teste Grátis
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a 
              href="#features" 
              class="inline-flex items-center justify-center gap-2 font-semibold text-white/70 hover:text-white px-8 py-4 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/5 text-base transition-all duration-300 text-center backdrop-blur-sm"
              aria-label="Explorar recursos e funcionalidades do OohhFood"
            >
              Explorar Recursos
            </a>
          </div>

          <!-- Social Proof Mini -->
          <div class="flex items-center gap-4 pt-2">
            <div class="flex -space-x-2">
              <div v-for="(color, i) in avatarColors" :key="i" class="w-8 h-8 rounded-full border-2 border-dark-900 flex items-center justify-center text-[10px] font-bold text-white" :class="color">
                {{ avatarInitials[i] }}
              </div>
            </div>
            <div class="text-sm">
              <div class="flex items-center gap-1">
                <svg v-for="i in 5" :key="i" class="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="text-white/40 text-xs">4.8/5 de 150+ avaliações</span>
            </div>
          </div>
        </div>

        <!-- Right Column - Image -->
        <div class="relative order-1 lg:order-2">
          <!-- Glow behind image -->
          <div class="absolute -inset-4 bg-brand-500/10 blur-3xl rounded-full"></div>
          
          <div class="relative">
            <!-- Main Image -->
            <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/sistema-gestao-restaurante-oohhfood.png" 
                alt="Sistema OohhFood - Interface de gestão de restaurante mostrando dashboard de pedidos, produtos, mesas e métricas em tempo real" 
                class="w-full h-auto"
                loading="eager"
                width="800"
                height="600"
                fetchpriority="high"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent"></div>
            </div>
            
            <!-- Floating Card: Orders -->
            <div class="hidden sm:block absolute -top-3 -right-3 md:top-4 md:-right-6 bg-white rounded-2xl shadow-glass-lg p-3 md:p-4 floating-1 max-w-[160px] md:max-w-[200px] border border-dark-100">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center">
                  <svg class="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                </div>
                <span class="text-xs font-bold text-dark-800">Pedidos Hoje</span>
              </div>
              <ul class="space-y-1.5 text-[10px] md:text-xs">
                <li class="flex items-center justify-between gap-2">
                  <span class="text-dark-400 truncate">15 Hambúrgueres</span>
                  <span class="bg-green-50 text-green-600 px-1.5 py-0.5 rounded-md text-[9px] font-bold flex-shrink-0">Enviado</span>
                </li>
                <li class="flex items-center justify-between gap-2">
                  <span class="text-dark-400 truncate">6 Pastéis</span>
                  <span class="bg-yellow-50 text-yellow-600 px-1.5 py-0.5 rounded-md text-[9px] font-bold flex-shrink-0">Pronto</span>
                </li>
                <li class="flex items-center justify-between gap-2">
                  <span class="text-dark-400 truncate">8 Milk Shakes</span>
                  <span class="bg-dark-50 text-dark-400 px-1.5 py-0.5 rounded-md text-[9px] font-bold flex-shrink-0">Pendente</span>
                </li>
              </ul>
            </div>

            <!-- Floating Card: Revenue -->
            <div class="hidden sm:block absolute -bottom-3 -left-3 md:bottom-8 md:-left-6 bg-white rounded-2xl shadow-glass-lg p-3 md:p-4 floating-2 max-w-[150px] md:max-w-[180px] border border-dark-100">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-7 h-7 rounded-lg bg-green-50 flex items-center justify-center">
                  <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <span class="text-xs font-bold text-dark-800">Receita</span>
              </div>
              <div class="text-xl md:text-2xl font-display font-bold text-dark-900">R$ 4.280</div>
              <div class="flex items-center gap-1 mt-1">
                <span class="text-[10px] font-bold text-green-500">+23%</span>
                <span class="text-[10px] text-dark-300">vs. ontem</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Trusted By -->
    <div class="relative z-10 border-t border-white/5 py-8 md:py-12">
      <div class="max-w-7xl mx-auto px-5 md:px-8">
        <p class="text-center text-xs md:text-sm text-white/30 mb-6 md:mb-8 font-medium uppercase tracking-wider">
          Confiado por equipes de restaurantes de destaque
        </p>
        <ClientLogos :clients="clients" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

interface Client {
  name: string
  logo?: string
}

interface ClientRow {
  name: string
  logo: string
}

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { href: '#', text: 'Início', label: 'Ir para o início da página' },
  { href: '#features', text: 'Funcionalidades', label: 'Ver funcionalidades do OohhFood' },
  { href: '#benefits', text: 'Benefícios', label: 'Ver benefícios do OohhFood' },
  { href: '#pricing', text: 'Preços', label: 'Ver planos e preços' },
  { href: '#faq', text: 'Dúvidas', label: 'Ver perguntas frequentes' },
  { href: 'https://app.oohhfood.com.br/lojas', text: 'Lojas', label: 'Ver lojas cadastradas no OohhFood (abre em nova aba)', external: true },
]

const avatarColors = ['bg-brand-500', 'bg-warm', 'bg-brand-700', 'bg-dark-600']
const avatarInitials = ['MS', 'JR', 'AC', 'PL']

const { data: clientRows } = await useAsyncData<ClientRow[]>('hero-client-logos', async () => {
  const data = await $fetch<ClientRow[]>('/api/client-logos')
  return data || []
})

const clients = computed<Client[]>(() => {
  const rows = clientRows.value || []

  return rows
    .map((row, index) => {
      const logo = row.logo?.trim() || ''
      const name = row.name?.trim() || `Cliente ${index + 1}`

      return { name, logo }
    })
    .filter(client => client.logo)
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.floating-1 {
  animation: float1 6s ease-in-out infinite;
}
.floating-2 {
  animation: float2 8s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(1deg); }
}
@keyframes float2 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(8px) rotate(-1deg); }
}

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: opacity 250ms ease, transform 250ms ease;
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
