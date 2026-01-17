<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <img 
              src="/logo.png" 
              alt="OohhFood - Sistema de Gestão para Restaurantes" 
              class="h-10 w-auto object-contain rounded-lg"
              loading="lazy"
              width="120"
              height="120"
            />
            <span class="text-2xl font-bold text-white">OohhFood</span>
          </div>
          <p class="text-gray-400">
            Sistema completo de gestão para restaurantes, lanchonetes e delivery.
          </p>
        </div>
        
        <div>
          <h4 class="text-white font-semibold mb-4">Produto</h4>
          <ul class="space-y-2">
            <li><a href="#features" class="hover:text-white transition">Funcionalidades</a></li>
            <li><a href="#benefits" class="hover:text-white transition">Benefícios</a></li>
            <li><a href="#pricing" class="hover:text-white transition">Preços</a></li>
            <li><a href="#contact" class="hover:text-white transition">Contato</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white font-semibold mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition">Termos de Uso</a></li>
            <li><a href="#" class="hover:text-white transition">Política de Privacidade</a></li>
            <li><a href="#" class="hover:text-white transition">Cookies</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 text-center text-gray-400 space-y-2">
        <p>Um produto Vale Apps © 2025</p>
        <p>© 2025 Vale Soluções Digitais LTDA - 61.712.285/0001-88</p>
        <p>Feito com ❤️ e muito ☕</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
