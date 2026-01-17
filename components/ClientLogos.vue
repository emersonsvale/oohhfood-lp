<template>
  <div class="client-logos-container">
    <div class="client-logos-wrapper">
      <!-- Faixa única de logos que se move infinitamente -->
      <div 
        class="client-logos-track" 
        :style="{ animationDuration: `${animationSpeed}s` }"
      >
        <div
          v-for="(client, index) in duplicatedClients"
          :key="`logo-${index}`"
          class="client-logo-item"
        >
          <img
            v-if="client.logo && !imageErrors[getOriginalIndex(index)]"
            :src="client.logo"
            :alt="`${client.name} - Cliente OohhFood`"
            class="client-logo-image"
            loading="lazy"
            width="180"
            height="60"
            @error="() => handleImageError(getOriginalIndex(index))"
            @load="() => handleImageLoad(getOriginalIndex(index))"
          />
          <span
            v-else
            class="text-gray-400 font-bold text-xs md:text-sm opacity-60 text-center"
          >
            {{ client.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Client {
  name: string
  logo?: string
}

interface Props {
  clients: Client[]
  speed?: number // Velocidade da animação em segundos (padrão: 30s)
}

const props = withDefaults(defineProps<Props>(), {
  speed: 30
})

const animationSpeed = computed(() => props.speed)

// Duplicar os clientes múltiplas vezes para criar loop infinito suave
const duplicatedClients = computed(() => {
  // Duplicar várias vezes para ter conteúdo suficiente
  // Com apenas 2 logos, precisamos duplicar mais vezes
  const base = [...props.clients, ...props.clients, ...props.clients]
  return [...base, ...base, ...base] // Total de 18 logos (9 duplicados)
})

const imageErrors = ref<Record<number, boolean>>({})
const imageLoaded = ref<Record<number, boolean>>({})

const getOriginalIndex = (index: number) => {
  return index % props.clients.length
}

const handleImageError = (index: number) => {
  imageErrors.value[index] = true
}

const handleImageLoad = (index: number) => {
  imageLoaded.value[index] = true
}
</script>

<style scoped>
.client-logos-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* Efeito de fade nas bordas */
.client-logos-container::before,
.client-logos-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 10;
  pointer-events: none;
}

.client-logos-container::before {
  left: 0;
  background: linear-gradient(to right, rgba(249, 250, 251, 1), rgba(249, 250, 251, 0));
}

.client-logos-container::after {
  right: 0;
  background: linear-gradient(to left, rgba(249, 250, 251, 1), rgba(249, 250, 251, 0));
}

@media (max-width: 768px) {
  .client-logos-container::before,
  .client-logos-container::after {
    width: 50px;
  }
}

.client-logos-wrapper {
  display: flex;
  width: fit-content;
  position: relative;
}

.client-logos-track {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem 0;
  animation: scroll infinite linear;
  will-change: transform;
  flex-shrink: 0;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50%));
  }
}

.client-logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 180px;
  padding: 0.75rem 1.5rem;
  flex-shrink: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.client-logo-image {
  height: 100%;
  width: 100%;
  max-height: 50px;
  max-width: 160px;
  object-fit: contain;
  object-position: center;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.3s ease;
  pointer-events: none;
}

/* Ajustes responsivos */
@media (min-width: 768px) {
  .client-logos-track {
    gap: 3.5rem;
  }
  
  .client-logo-item {
    height: 70px;
    width: 200px;
  }
  
  .client-logo-image {
    max-height: 60px;
    max-width: 180px;
  }
}

@media (min-width: 1024px) {
  .client-logos-track {
    gap: 4rem;
  }
  
  .client-logo-item {
    height: 80px;
    width: 220px;
  }
  
  .client-logo-image {
    max-height: 70px;
    max-width: 200px;
  }
}

/* Pausar animação no hover */
.client-logos-container:hover .client-logos-track {
  animation-play-state: paused;
}

.client-logos-container:hover .client-logo-image {
  opacity: 1;
  filter: grayscale(0%);
  pointer-events: auto;
}
</style>
