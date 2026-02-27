/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bricolage Grotesque', 'Georgia', 'serif'],
        body: ['Figtree', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffb8b8',
          300: '#ff8585',
          400: '#ff5252',
          500: '#e63946',
          600: '#c62828',
          700: '#a31d1d',
          800: '#7f1515',
          900: '#5c1010',
        },
        dark: {
          DEFAULT: '#0f0f12',
          50: '#f7f7f8',
          100: '#e8e8ec',
          200: '#d1d1d9',
          300: '#a9a9b8',
          400: '#7c7c91',
          500: '#5a5a6e',
          600: '#44445a',
          700: '#33334a',
          800: '#1e1e2e',
          900: '#0f0f12',
        },
        cream: {
          DEFAULT: '#faf7f2',
          50: '#fefdfb',
          100: '#faf7f2',
          200: '#f5efe5',
          300: '#ede4d4',
          400: '#ddd0b8',
        },
        warm: {
          DEFAULT: '#ff6b35',
          light: '#ff8f65',
          dark: '#e55a25',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 40px rgba(230, 57, 70, 0.15)',
        'glow-lg': '0 0 80px rgba(230, 57, 70, 0.2)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 6px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
