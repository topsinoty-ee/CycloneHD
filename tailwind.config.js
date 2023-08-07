/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        redhat: '"Red Hat Display"',
        Encode: "'Encode Sans'",
        urbanist: 'urbanist',
      },
      colors: {
        primary: '#FFFFFF',
        secondary: '#423CD1',
      },
      backgroundImage: {
        'hero-background': 'url("/Assets/headphones-hero.jpg")',
        'headphones-1': 'url("/Assets/headphones-1.jpg")',
        'headphones-2': 'url("/Assets/headphones-2.jpg")',
        'headphones-3': 'url("/Assets/headphones-3.jpg")',
      },
      screens: {
        sm: { max: '399px' },
        md: { min: '400px', max: '699px' },
        lg: { min: '700px', max: '1024px' },
        xl: { min: '1025px', max: '1280px' },
        xxl: { min: '1281px' },
        tablet: { min: '641px', max: '1024px', orientation: 'portrait' },
        landscape: { min: '641px', max: '1024px', orientation: 'landscape' },
      },
    },
  },
  plugins: [],
};
