import type { Config } from 'tailwindcss';

const tailwindConfig = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
        },
        dark: 'var(--dark)',
      },
      fontSize: {
        title: ['24px', '29.17px'],
        description: ['16px', '24px'],
        text1: ['12px', '14.58px'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default tailwindConfig;
