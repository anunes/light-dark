/**
 * Theme Switch Component
 * Handles theme toggling between light and dark modes
 */

class ThemeSwitch {
  constructor(elementId = 'theme-switch') {
    this.element = document.getElementById(elementId);
    this.init();
  }

  init() {
    if (!this.element) {
      console.error('Theme switch element not found');
      return;
    }

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);

    // Add event listener
    this.element.addEventListener('change', () => this.toggleTheme());
  }

  toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      this.element.checked = true;
    } else {
      document.body.classList.remove('dark');
      this.element.checked = false;
    }
    localStorage.setItem('theme', theme);
  }
}

// Initialize the theme switch when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitch();
});
