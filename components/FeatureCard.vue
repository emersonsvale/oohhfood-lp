<template>
  <div class="glass-card p-6 md:p-8 h-full group cursor-default">
    <!-- Icon -->
    <div class="mb-5 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
      :class="iconBgClass">
      <!-- Credit Card Icon -->
      <svg v-if="icon === 'credit-card'" class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
      <!-- Food/Book Icon -->
      <svg v-else-if="icon === 'food'" class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
      <!-- Mobile Device Icon -->
      <svg v-else-if="icon === 'device-mobile'" class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      <!-- Table Icon -->
      <svg v-else-if="icon === 'table'" class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      <!-- Users Icon -->
      <svg v-else-if="icon === 'users'" class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <!-- Target Icon -->
      <svg v-else-if="icon === 'target'" class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <!-- Fire Icon -->
      <svg v-else-if="icon === 'fire'" class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
      <!-- Chart Bar Icon -->
      <svg v-else-if="icon === 'chart-bar'" class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      <!-- Cog/Settings Icon -->
      <svg v-else class="w-6 h-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
    <h3 class="text-lg md:text-xl font-display font-bold text-dark-800 mb-2 group-hover:text-brand-600 transition-colors duration-300">
      {{ title }}
    </h3>
    <p class="text-dark-400 leading-relaxed text-sm md:text-base">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
}

const props = defineProps<Props>()

const iconColors: Record<string, { bg: string; color: string }> = {
  'credit-card': { bg: 'bg-brand-50', color: 'text-brand-500' },
  'food': { bg: 'bg-orange-50', color: 'text-orange-500' },
  'device-mobile': { bg: 'bg-violet-50', color: 'text-violet-500' },
  'table': { bg: 'bg-blue-50', color: 'text-blue-500' },
  'users': { bg: 'bg-emerald-50', color: 'text-emerald-500' },
  'target': { bg: 'bg-pink-50', color: 'text-pink-500' },
  'fire': { bg: 'bg-amber-50', color: 'text-amber-500' },
  'chart-bar': { bg: 'bg-cyan-50', color: 'text-cyan-500' },
  'cog': { bg: 'bg-dark-50', color: 'text-dark-500' },
}

const iconBgClass = iconColors[props.icon]?.bg || 'bg-dark-50'
const iconColorClass = iconColors[props.icon]?.color || 'text-dark-500'
</script>
