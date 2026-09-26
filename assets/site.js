const themeToggle = document.querySelector('.theme-toggle');

function updateThemeButton() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'day' : 'night'} mode`);
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀' : '☾';
  themeToggle.querySelector('.theme-label').textContent = isDark ? 'Day' : 'Night';
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#17231f' : '#f6f5ee';
}

if (themeToggle) {
  updateThemeButton();
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem('yu-shi-theme', nextTheme); } catch (_) {}
    updateThemeButton();
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
