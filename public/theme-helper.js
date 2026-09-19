/**
 * Malamai Circle - Theme Helper (Step 3)
 * Runs early in document head to prevent flash of wrong theme.
 * Safely reads/writes 'light', 'dark', or 'system' with try/catch fallback for blocked storage.
 */
(function() {
  function applyInitialTheme() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'light' || theme === 'dark') {
        document.documentElement.setAttribute('data-theme', theme);
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    } catch (e) {
      // Storage access blocked or restricted on shared phone; fallback to system
      document.documentElement.removeAttribute('data-theme');
    }
  }
  applyInitialTheme();
})();

function setTheme(theme) {
  try {
    if (theme === 'light' || theme === 'dark') {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      localStorage.setItem('theme', 'system');
      document.documentElement.removeAttribute('data-theme');
    }
  } catch (e) {
    // Graceful fallback if localStorage is blocked
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
}

function getStoredTheme() {
  try {
    return localStorage.getItem('theme') || 'system';
  } catch (e) {
    return 'system';
  }
}
