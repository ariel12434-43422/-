// Course structure. When Tim finishes a recording, upload it to Bunny Stream
// and paste its video ID into `videoId`. Workbooks go in /workbooks (later: R2).
(() => {
const pad = (n) => String(n).padStart(2, '0');

const STEP_TITLES = [
  ['Acceptance', 'Helping clients move from denial to honest acknowledgement of the problem.'],
  ['Hope', 'Building belief that change is possible, and how to nurture it in session.'],
  ['Surrender', 'Decision-making, willingness, and letting go of control.'],
  ['Self-Inventory', 'Guiding a fearless, structured personal inventory.'],
  ['Disclosure', 'Creating safety for honest admission with another person.'],
  ['Readiness', 'Working with resistance and readiness for change.'],
  ['Humility', 'Reframing humility as a clinical strength, not weakness.'],
  ['Accountability', 'Mapping harm done and preparing for repair.'],
  ['Amends', 'Facilitating direct amends safely and ethically.'],
  ['Daily Practice', 'Ongoing self-review as a relapse-prevention tool.'],
  ['Reflection', 'Meditation, reflection, and meaning-making in recovery.'],
  ['Service', 'Carrying the message: sponsorship, mentoring, and long-term growth.'],
];

window.COURSE_STEPS = STEP_TITLES.map(([title, summary], i) => {
  const n = i + 1;
  return {
    id: n,
    slug: `step-${pad(n)}`,
    title,
    summary,
    duration: null, // e.g. '42 min' once recorded
    videoId: null, // Bunny Stream video GUID
    workbook: `workbooks/step-${pad(n)}.pdf`,
    proWorkbook: `pro/step-${pad(n)}-extended.pdf`,
    proSlides: `pro/step-${pad(n)}-slides.pdf`,
  };
});
})();
