import { extendTheme } from '@chakra-ui/react';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
  weight: ['700', '400'],
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  preload: true,
  subsets: ['latin'],
});

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: 'white',
      },
    }),
  },
  colors: {
    white: '#EFEDEA',
    black: '#9A999E',
  },
  fonts: {
    heading: montSerrat.style.fontFamily,
    body: montSerrat.style.fontFamily,
    mono: montSerrat.style.fontFamily,
  },
});
