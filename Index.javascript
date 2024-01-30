// theme-switcher.js
document.addEventListener('DOMContentLoaded', function() {
  var themeSelector = document.getElementById('themes');
  themeSelector.addEventListener('change', function() {
    document.body.className = this.value;
  });
});
