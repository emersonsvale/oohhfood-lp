<template>
  <div 
    :class="[
      'bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2',
      popular ? 'border-red-600 scale-105' : 'border-gray-200'
    ]"
  >
    <div v-if="popular" class="bg-red-600 text-white text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-6 font-semibold">
      Mais Popular
    </div>
    
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ name }}</h3>
      <p class="text-gray-600 text-sm mb-4">{{ description }}</p>
      <div class="flex items-baseline justify-center">
        <span class="text-5xl font-bold text-gray-900">{{ price }}</span>
        <span v-if="period" class="text-gray-600 ml-2">{{ period }}</span>
      </div>
    </div>

    <ul v-if="!isEnterprise && featuresList.length > 0" class="space-y-4 mb-8">
      <li 
        v-for="feature in featuresList" 
        :key="feature"
        class="flex items-start"
      >
        <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span class="text-gray-700">{{ feature }}</span>
      </li>
    </ul>
    
    <div v-if="isEnterprise" class="mb-8 text-center">
      <p class="text-gray-600 leading-relaxed">
        Plano totalmente personalizado. Entre em contato e conte-nos o que você precisa. Vamos criar a solução ideal para o seu negócio.
      </p>
    </div>

    <a 
      :href="buttonLink" 
      :class="[
        'block text-center py-3 px-6 rounded-lg font-semibold transition',
        popular 
          ? 'bg-red-600 text-white hover:bg-red-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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
  features: string
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
  return props.features.split(', ').map(f => f.trim())
})
</script>
