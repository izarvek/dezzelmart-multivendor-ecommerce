  export const scrollToTop = (duration = 500) => {
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easing function (easeInOutQuad)
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, start * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };