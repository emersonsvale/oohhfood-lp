<template>
  <div class="flex items-start gap-5 p-5 rounded-2xl hover:bg-white/60 transition-all duration-400 group">
    <div class="flex-shrink-0">
      <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-warm flex items-center justify-center font-display font-bold text-lg text-white shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-all duration-400">
        {{ number }}
      </div>
    </div>
    <div>
      <h3 class="text-xl md:text-2xl font-display font-bold text-dark-800 mb-1.5 group-hover:text-brand-600 transition-colors duration-300">
        {{ title }}
      </h3>
      <p class="text-dark-400 leading-relaxed text-sm md:text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  number: string
  title: string
  description: string
}

defineProps<Props>()
</script>
