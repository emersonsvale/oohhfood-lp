<template>
  <footer class="bg-dark-900 text-dark-300 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-5 md:px-8">
      <div class="grid md:grid-cols-3 gap-10 mb-12">
        <!-- Brand -->
        <div>
          <a href="#" class="flex items-center gap-2.5 mb-5 group">
            <img 
              src="/logo.png" 
              alt="OohhFood - Sistema de Gestão para Restaurantes" 
              class="h-10 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width="120"
              height="120"
            />
            <span class="text-xl font-display font-bold text-white">
              Oohh<span class="text-brand-500">Food</span>
            </span>
          </a>
          <p class="text-dark-400 text-sm leading-relaxed max-w-xs">
            Sistema completo de gestão para restaurantes, lanchonetes e delivery. Da cozinha ao atendimento.
          </p>
        </div>
        
        <!-- Product Links -->
        <div>
          <h4 class="text-white font-display font-bold mb-4 text-sm uppercase tracking-wider">Produto</h4>
          <ul class="space-y-2.5">
            <li><a href="#features" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Funcionalidades</a></li>
            <li><a href="#benefits" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Benefícios</a></li>
            <li><a href="#pricing" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Preços</a></li>
            <li><a href="#faq" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Dúvidas Frequentes</a></li>
            <li><a href="#contact" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Contato</a></li>
          </ul>
        </div>
        
        <!-- Legal -->
        <div>
          <h4 class="text-white font-display font-bold mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Termos de Uso</a></li>
            <li><a href="#" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Política de Privacidade</a></li>
            <li><a href="#" class="text-dark-400 hover:text-white text-sm transition-colors duration-300">Cookies</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom bar -->
      <div class="border-t border-white/5 pt-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dark-500">
          <div class="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span>Um produto Vale Apps</span>
            <span class="hidden md:inline">&middot;</span>
            <span>© {{ currentYear }} Vale Soluções Digitais LTDA</span>
            <span class="hidden md:inline">&middot;</span>
            <span>61.712.285/0001-88</span>
          </div>
          <span class="text-dark-600">Feito com ❤️ e muito ☕</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
