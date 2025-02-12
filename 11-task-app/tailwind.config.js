// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        keyframes: {
          accordionOpen: {
            '0%': { maxHeight: '0px', opacity: '0' },
            '100%': { maxHeight: '500px', opacity: '1' },
          },
          accordionClose: {
            '0%': { maxHeight: '500px', opacity: '1' },
            '100%': { maxHeight: '0px', opacity: '0' },
          },
        },
        animation: {
          openAccordion: 'accordionOpen 0.5s ease-in-out',
          closeAccordion: 'accordionClose 0.5s ease-in-out',
        },
      },
    },
    plugins: [],
  };


