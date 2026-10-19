// Shared design tokens for the Tailwind Play CDN. Loaded right after the CDN script.
// Before launch this moves to tailwind.config.js with a real build (see README).
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        cream: { DEFAULT: '#FAF7F2', 100: '#F3EEE6', 200: '#E8E1D5' },
        ink: { DEFAULT: '#1F1D1A', 600: '#4A463F', 400: '#7A746A' },
        sage: { DEFAULT: '#2F5D50', 600: '#264C41', 100: '#E3ECE8' },
        clay: { DEFAULT: '#C2703D', 100: '#F6E7DC' },
      },
      maxWidth: { content: '72rem' },
    },
  },
};
