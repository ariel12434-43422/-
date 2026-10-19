// Shared design tokens for the Tailwind Play CDN. Loaded right after the CDN script.
// Before launch this moves to tailwind.config.js with a real build (see README).
// Look: dark, cinematic streaming-class style — black canvas, bold sans, one red accent.
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        night: {
          DEFAULT: '#000000',
          900: '#0A0A0B',
          800: '#141416',
          700: '#1D1D20',
          600: '#2A2A2E',
          500: '#3A3A3F',
        },
        mist: { DEFAULT: '#FFFFFF', 300: '#C9C9CE', 400: '#9A9AA1', 500: '#6E6E75' },
        accent: { DEFAULT: '#E3193B', 600: '#C4122F', soft: 'rgba(227,25,59,0.12)' },
      },
      maxWidth: { content: '80rem' },
      letterSpacing: { eyebrow: '0.2em' },
    },
  },
};
