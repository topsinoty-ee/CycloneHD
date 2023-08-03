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
    },
  },
  plugins: [],
};
