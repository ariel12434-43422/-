// Central place for every value that changes between environments.
// Fill these in as each service is set up — no other file should hard-code them.
window.SITE = {
  courseName: 'The Twelve Steps for Professionals',

  // Everything shown about Tim on the landing page and certificate.
  // To change his photo, upload a new file to assets/img/ with the same name
  // (or change the path here).
  instructor: {
    name: 'Tim',
    role: 'Course instructor',
    quote: 'Recovery work is a craft. This class gives you the tools to practice it well.',
    bio: [
      'Tim has spent years working alongside people in recovery and training the professionals who support them. In this class he distills that experience into a step-by-step framework you can bring straight into your practice.',
      '[Credentials, years of experience, and organizations go here.]',
    ],
    photo: 'assets/img/tim-portrait.jpg', // portrait, 4:5 (e.g. 1200×1500)
    heroPhoto: 'assets/img/tim-hero.jpg', // wide, Tim on the right (e.g. 2400×1350)
  },

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
