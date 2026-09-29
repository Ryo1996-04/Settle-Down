(() => {
  const picker = document.getElementById('language');
  if (!picker) return;
  picker.value = document.documentElement.lang === 'en' ? 'en' : 'zh';
  picker.addEventListener('change', () => {
    const target = picker.value === 'en' ? '/en/' : '/';
    location.assign(target + location.hash);
  });
})();
