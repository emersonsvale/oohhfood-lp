<template>
  <div class="glass-card p-7 md:p-8 h-full flex flex-col group">
    <!-- Stars -->
    <div class="flex items-center gap-0.5 mb-5">
      <svg 
        v-for="i in rating" 
        :key="i"
        class="w-4 h-4 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
    <!-- Quote -->
    <p class="text-dark-600 mb-6 leading-relaxed flex-1 text-[0.95rem]">
      &ldquo;{{ content }}&rdquo;
    </p>
    <!-- Author -->
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-warm flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0">
        {{ initials }}
      </div>
      <div>
        <div class="font-display font-bold text-dark-800 text-sm">{{ name }}</div>
        <div class="text-xs text-dark-400">{{ role }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string
  role: string
  content: string
  rating: number
}

const props = defineProps<Props>()

const initials = computed(() => {
  return props.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
})
</script>
