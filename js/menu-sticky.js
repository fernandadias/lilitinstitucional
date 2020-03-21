(() => {
  'use strict';

  let refOffset = 0;
  const bannerHeight = 20;
  const bannerWrapper = document.querySelector('#menu');

  const newMenu = 120;

  const handler = () => {
    const newOffset = window.scrollY || window.pageYOffset;

    if (newOffset > bannerHeight) {
      if (newOffset > refOffset) {
        bannerWrapper.classList.remove('animateIn');
        bannerWrapper.classList.add('animateOut');
      } else {
        bannerWrapper.classList.remove('animateOut');
        bannerWrapper.classList.add('animateIn');
      }
      refOffset = newOffset;
    } else {
        console.log('aasd');
    }
  };

  window.addEventListener('scroll', handler, false);
})();