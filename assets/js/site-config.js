// Central place for every value that changes between environments.
// Fill these in as each service is set up — no other file should hard-code them.
window.SITE = {
  courseName: 'The Twelve Steps for Professionals',
  instructor: 'Tim',
  supportEmail: 'support@example.com',

  // Lemon Squeezy checkout links (Store → Products → Share → Checkout URL).
  // Empty string = button scrolls to pricing instead of opening checkout.
  checkout: {
    course: '',
    pro: '',
    upgradeToPro: '',
  },

  // Bunny Stream library (Stream → Library → API). Video IDs live in course-data.js.
  video: {
    provider: 'bunny',
    libraryId: '',
  },

  community: {
    enabled: false,
    waitlistUrl: '',
  },
};
