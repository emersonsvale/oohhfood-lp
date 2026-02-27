<template>
  <div class="relative text-center glass-card p-8 md:p-10 h-full group">
    <!-- Step Number (top-right badge) -->
    <div class="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-warm flex items-center justify-center font-display font-bold text-sm text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
      {{ step }}
    </div>
    <!-- Icon -->
    <div class="mx-auto mb-5 text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-400">
      {{ icon }}
    </div>
    <h3 class="text-xl md:text-2xl font-display font-bold text-dark-800 mb-3 group-hover:text-brand-600 transition-colors duration-300">
      {{ title }}
    </h3>
    <p class="text-dark-400 leading-relaxed text-sm md:text-base">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  step: string
  title: string
  description: string
  icon: string
}

defineProps<Props>()
</script>
