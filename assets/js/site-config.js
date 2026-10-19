// Central place for every value that changes between environments.
// Fill these in as each service is set up — no other file should hard-code them.
window.SITE = {
  courseName: 'The Twelve Steps for Professionals',

  // Everything shown about Tim on the landing page and certificate.
  // To change his photo, upload a new file to assets/img/ with the same name
  // (or change the path here).
  instructor: {
    name: 'Tim Rudolph',
    role: '27 years clean · Course instructor',
    quote: 'I know this road from the inside. The Steps gave me my life back, and helping others find that path is my life’s work.',
    bio: [
      'Tim Rudolph has been clean for 27 years. For all of that time he has lived and worked the Twelve Steps, not as a theory but as a daily practice.',
      'Over many years in the field, Tim has sat with addicts at every stage, from the first desperate phone call to long-term recovery. That experience has given him a deep, first-hand understanding of the nature of addiction and of what actually helps people change.',
      'Helping other addicts is the mission he has chosen for his life. In this class he shares what he has learned, so that the professionals who walk alongside them can bring the Steps into their work with clarity and confidence.',
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
