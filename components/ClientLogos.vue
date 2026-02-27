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

/* Fade edges (transparent, no background color) */
.client-logos-container::before,
.client-logos-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 10;
  pointer-events: none;
}

.client-logos-container::before {
  left: 0;
  background: linear-gradient(to right, rgba(15, 15, 18, 1), rgba(15, 15, 18, 0));
}

.client-logos-container::after {
  right: 0;
  background: linear-gradient(to left, rgba(15, 15, 18, 1), rgba(15, 15, 18, 0));
}

@media (max-width: 768px) {
  .client-logos-container::before,
  .client-logos-container::after {
    width: 40px;
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
  gap: 2.5rem;
  padding: 0.75rem 0;
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
  height: 50px;
  width: 160px;
  padding: 0.5rem 1rem;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.client-logo-image {
  height: 100%;
  width: 100%;
  max-height: 40px;
  max-width: 140px;
  object-fit: contain;
  object-position: center;
  opacity: 0.4;
  filter: grayscale(100%) brightness(2);
  transition: all 0.4s ease;
  pointer-events: none;
}

/* Responsive */
@media (min-width: 768px) {
  .client-logos-track {
    gap: 3rem;
  }
  
  .client-logo-item {
    height: 60px;
    width: 180px;
  }
  
  .client-logo-image {
    max-height: 50px;
    max-width: 160px;
  }
}

@media (min-width: 1024px) {
  .client-logos-track {
    gap: 3.5rem;
  }
  
  .client-logo-item {
    height: 65px;
    width: 200px;
  }
  
  .client-logo-image {
    max-height: 55px;
    max-width: 180px;
  }
}

/* Pause on hover */
.client-logos-container:hover .client-logos-track {
  animation-play-state: paused;
}

.client-logos-container:hover .client-logo-image {
  opacity: 0.8;
  filter: grayscale(0%) brightness(1);
  pointer-events: auto;
}
</style>
