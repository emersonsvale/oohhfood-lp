<template>
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <div class="bg-red-600 text-white rounded-lg w-16 h-16 flex items-center justify-center font-bold text-xl">
        {{ number }}
      </div>
    </div>
    <div>
      <h3 class="text-2xl font-bold text-gray-900 mb-2">
        {{ title }}
      </h3>
      <p class="text-gray-600 leading-relaxed">
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
