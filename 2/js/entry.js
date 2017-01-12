require('../css/styles.scss');

import Clock from './clock';

document.addEventListener('DOMContentLoaded', () => {
  const clock = new Clock(document.querySelector('.clock'));
});
