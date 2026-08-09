/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0F',
        surface: '#14141C',
        surface2: '#1C1C27',
        border: '#26262F',
        indigo: { DEFAULT: '#6366F1', 400: '#818CF8', 500: '#6366F1', 600: '#4F46E5' },
        cyan: { DEFAULT: '#22D3EE', 400: '#22D3EE', 500: '#06B6D4' },
        ink: '#F4F4F6',
        muted: '#8B8B9A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
