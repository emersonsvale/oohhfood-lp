import type { DirectiveBinding, ObjectDirective } from 'vue'

interface RevealOptions {
  delay?: number
  distance?: number
  once?: boolean
}

const parseRevealOptions = (binding: DirectiveBinding): RevealOptions => {
  const value = binding.value

  if (typeof value === 'number') {
    return { delay: value }
  }

  if (value && typeof value === 'object') {
    return {
      delay: Number(value.delay) || 0,
      distance: Number(value.distance) || 24,
      once: value.once !== false
    }
  }

  return { delay: 0, distance: 24, once: true }
}

export default defineNuxtPlugin((nuxtApp) => {
  const revealDirective: ObjectDirective<HTMLElement, RevealOptions | number> = {
    mounted(el, binding) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.classList.add('reveal-visible')
        return
      }

      const options = parseRevealOptions(binding)

      el.classList.add('reveal-on-scroll')
      el.style.setProperty('--reveal-delay', `${options.delay}ms`)
      el.style.setProperty('--reveal-distance', `${options.distance}px`)

      const observer = new IntersectionObserver(
        (entries, currentObserver) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue
            }

            entry.target.classList.add('reveal-visible')

            if (options.once) {
              currentObserver.unobserve(entry.target)
            }
          }
        },
        {
          root: null,
          rootMargin: '0px 0px -12% 0px',
          threshold: 0.12
        }
      )

      observer.observe(el)
      ;(el as HTMLElement & { __revealObserver?: IntersectionObserver }).__revealObserver = observer
    },
    unmounted(el) {
      const target = el as HTMLElement & { __revealObserver?: IntersectionObserver }
      target.__revealObserver?.disconnect()
      delete target.__revealObserver
    }
  }

  nuxtApp.vueApp.directive('reveal', revealDirective)
})
