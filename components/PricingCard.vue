<template>
  <div 
    :class="[
      'relative rounded-3xl p-8 md:p-10 h-full transition-all duration-400',
      popular 
        ? 'bg-dark-900 text-white ring-2 ring-brand-500/50 scale-[1.02] shadow-glow-lg' 
        : 'glass-card'
    ]"
  >
    <!-- Popular badge -->
    <div v-if="popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
      <div class="bg-gradient-to-r from-brand-500 to-warm px-5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg">
        Mais Popular
      </div>
    </div>
    
    <div class="text-center mb-8">
      <h3 class="text-xl md:text-2xl font-display font-bold mb-2" :class="popular ? 'text-white' : 'text-dark-800'">{{ name }}</h3>
      <p class="text-sm mb-5" :class="popular ? 'text-white/50' : 'text-dark-400'">{{ description }}</p>
      <div class="flex items-baseline justify-center gap-1">
        <span class="text-4xl md:text-5xl font-display font-bold" :class="popular ? 'text-white' : 'text-dark-900'">{{ price }}</span>
        <span v-if="period" class="text-sm" :class="popular ? 'text-white/40' : 'text-dark-300'">{{ period }}</span>
      </div>
    </div>

    <ul v-if="!isEnterprise && featuresList.length > 0" class="space-y-3.5 mb-8">
      <li 
        v-for="feature in featuresList" 
        :key="feature"
        class="flex items-start gap-3"
      >
        <div class="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center" :class="popular ? 'bg-brand-500/20' : 'bg-green-50'">
          <svg class="w-3 h-3" :class="popular ? 'text-brand-400' : 'text-green-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <span class="text-sm" :class="popular ? 'text-white/70' : 'text-dark-500'">{{ feature }}</span>
      </li>
    </ul>
    
    <div v-if="isEnterprise" class="mb-8 text-center">
      <p class="leading-relaxed text-sm" :class="popular ? 'text-white/50' : 'text-dark-400'">
        Plano totalmente personalizado. Entre em contato e conte-nos o que você precisa. Vamos criar a solução ideal para o seu negócio.
      </p>
    </div>

    <a 
      :href="buttonLink" 
      :class="[
        'block text-center py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5',
        popular 
          ? 'bg-gradient-to-r from-brand-500 to-warm text-white shadow-lg hover:shadow-xl' 
          : 'bg-dark-900 text-white hover:bg-dark-800 shadow-md hover:shadow-lg'
      ]"
      :aria-label="`${buttonText} - ${name}`"
    >
      {{ buttonText }}
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  price: string
  period: string
  description: string
  features: string[] | string
  popular: boolean
  buttonText?: string
  buttonLink?: string
  isEnterprise?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: 'Escolher Plano',
  buttonLink: '#contact',
  isEnterprise: false
})

const featuresList = computed(() => {
  if (Array.isArray(props.features)) {
    return props.features.filter(Boolean)
  }
  return props.features
    .split(',')
    .map(f => f.trim())
    .filter(Boolean)
})
</script>
