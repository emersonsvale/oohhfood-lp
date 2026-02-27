import type { ObjectDirective } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const revealDirective: ObjectDirective = {
    getSSRProps() {
      return {}
    }
  }

  nuxtApp.vueApp.directive('reveal', revealDirective)
})
