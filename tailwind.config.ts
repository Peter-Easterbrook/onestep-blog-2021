import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          600: '#fff900',
        },
        blue: {
          600: '#3929eb',
        },
        green: {
          600: '#08ff08',
        },
        purple: {
          600: '#7730db',
        },
        red: {
          600: '#e10600',
        },
        orange: {
          600: '#ff6600',
        },
      },
    },
  },
} satisfies Config
