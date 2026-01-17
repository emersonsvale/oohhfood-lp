<template>
  <div class="text-center relative">
    <div class="mx-auto mb-6 text-4xl">
      {{ icon }}
    </div>
    <div class="absolute top-0 right-0 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
      {{ step }}
    </div>
    <h3 class="text-2xl font-bold text-gray-900 mb-3">
      {{ title }}
    </h3>
    <p class="text-gray-600 leading-relaxed">
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
