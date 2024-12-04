console.clear();

const root = document.documentElement;
const switchToggle = document.querySelector('.switch');
const switchInner = document.querySelector('.switch__inner');

const circleTransition = () => {
  const circle = document.querySelector("button");
  circle.classList = 'circle-transition';
  setTimeout(function () {
circle.classList = '';
  }, 1000);
};

const moonIcon = '<svg class="switch__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

const sunIcon = '<svg class="switch__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

switchToggle.addEventListener('click', () => {
  const activeClass = 'switched-on';
  circleTransition();
  document.body.classList.toggle(activeClass);
  if (!document.body.classList.contains(activeClass)) {
    root.style.setProperty('--bg', `var(--dark-bg-gradient)`);
    root.style.setProperty('--switch-color', `var(--dark-switch-gradient)`);
    root.style.setProperty('--switch-icon-color', `var(--dark-gray)`);
    switchInner.innerHTML = moonIcon;
  } else {
    root.style.setProperty('--bg', `var(--light-bg-gradient)`);
    root.style.setProperty('--switch-color', `var(--light-switch-gradient)`);
    root.style.setProperty('--switch-icon-color', `var(--blue)`);
    switchInner.innerHTML = sunIcon;
  }
});

// Credits
const credits = document.createElement('footer');
credits.innerHTML = '<p><small>Icons from <a href="https://feathericons.com" target="_blank" class="link--feather">Feather</a> &#8226; Designed and inspired by <a href="https://dribbble.com/shots/3966176-Daily-UI-Challenge-015-On-Off-Switch" target="_blank" class="link--dribbble">devinvm\'s dribbble shot</a></small></p>';
credits.classList = 'credits';
document.body.appendChild(credits);