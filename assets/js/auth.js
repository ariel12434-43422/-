// Auth + progress storage.
// DEV STUB: everything lives in localStorage so the UI can be built and tested now.
// This does NOT protect content. Production swaps these functions for Supabase
// (magic-link auth + a `progress` table) while keeping the same interface.
(() => {
  const SESSION_KEY = 'course.session';
  const PROGRESS_KEY = 'course.progress';

  const read = (key, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  };
  const write = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable: progress just won't persist */
    }
  };

  window.Auth = {
    getSession: () => read(SESSION_KEY, null),
    signIn(email, plan = 'course') {
      const session = { email, plan, since: new Date().toISOString() };
      write(SESSION_KEY, session);
      return session;
    },
    signOut() {
      localStorage.removeItem(SESSION_KEY);
    },
    requireSession() {
      const session = this.getSession();
      if (!session) window.location.replace('login.html');
      return session;
    },
  };

  window.Progress = {
    completed: () => new Set(read(PROGRESS_KEY, [])),
    markComplete(stepId) {
      const done = this.completed();
      done.add(stepId);
      write(PROGRESS_KEY, [...done]);
      return done;
    },
    markIncomplete(stepId) {
      const done = this.completed();
      done.delete(stepId);
      write(PROGRESS_KEY, [...done]);
      return done;
    },
    reset: () => write(PROGRESS_KEY, []),
  };
})();
