(function () {
  document.documentElement.classList.add('home-motion-ready');

  // Card stagger below, meta delays in home-motion.css. Past the longer of the
  // two the entrance has been watched, so a restore lands on the end state.
  const CARD_DELAY = 220;
  const CARD_STEP = 165;
  const CARD_RUN = 1420;
  const META_END = 2520;

  // Held here rather than on the section: the page component re-renders and
  // hands back new elements, taking any class or flag written on them with it.
  let enteredAt = 0;
  let settled = false;
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  const visibleCards = (section) => Array.from(section.querySelectorAll('.mix-card'))
    .filter((card) => Math.abs(Number(card.dataset.mixDelta)) <= 2);

  const settleAfter = (cards) =>
    Math.max(META_END, CARD_DELAY + Math.max(0, cards - 1) * CARD_STEP + CARD_RUN);

  const flyCardsIn = (section) => {
    if (reduced() || typeof Element.prototype.animate !== 'function') return;

    const cards = visibleCards(section)
      .filter((card) => card.dataset.mixFlown !== '1')
      .sort((a, b) => Math.abs(Number(b.dataset.mixDelta)) - Math.abs(Number(a.dataset.mixDelta)));

    cards.forEach((card, order) => {
      card.dataset.mixFlown = '1';
      const delta = Number(card.dataset.mixDelta) || 0;
      const finalTransform = card.style.transform;
      const finalOpacity = card.style.opacity || '1';
      const startRotation = Math.max(-6, Math.min(6, delta * 2));
      const cardAnimation = card.animate([
        { opacity: 0, transform: `translateX(-50%) translateY(72px) rotate(${startRotation}deg) scale(.64)` },
        { opacity: finalOpacity, transform: finalTransform }
      ], {
        duration: CARD_RUN,
        delay: CARD_DELAY + order * CARD_STEP,
        easing: 'cubic-bezier(.16,.84,.44,1)',
        fill: 'both'
      });

      const sleeve = card.querySelector('.mix-card-sleeve');
      const sleeveAnimation = sleeve && sleeve.animate([
        { transform: 'perspective(900px) rotateX(-68deg)', filter: 'brightness(.72)' },
        { offset: .72, transform: 'perspective(900px) rotateX(5deg)', filter: 'brightness(1.03)' },
        { transform: 'perspective(900px) rotateX(0deg)', filter: 'brightness(1)' }
      ], {
        duration: CARD_RUN,
        delay: CARD_DELAY + order * CARD_STEP,
        easing: 'cubic-bezier(.16,.84,.44,1)',
        fill: 'both'
      });

      // The deck re-renders on every step and drag, so the fill must not be
      // left holding a transform the carousel has since moved on from.
      cardAnimation.finished.then(() => cardAnimation.cancel()).catch(() => {});
      if (sleeveAnimation) sleeveAnimation.finished.then(() => sleeveAnimation.cancel()).catch(() => {});
    });
  };

  // The mixes section rides a pinned layer that stays visibility:hidden until
  // the scroll track reveals it, so its rect is on screen from the first frame.
  const onScreen = (section) => {
    if (getComputedStyle(section).visibility === 'hidden') return false;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const rect = section.getBoundingClientRect();
    const visible = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    return visible >= Math.min(rect.height, viewportHeight) * .18;
  };

  const sync = () => {
    const section = document.getElementById('mixes');
    if (!section) return;

    if (!enteredAt) {
      if (!reduced() && !onScreen(section)) return;
      enteredAt = performance.now();
    }

    section.classList.add('mixes-entered');
    // Past the entrance this runs on every scroll frame, so it stops at two
    // idempotent classList writes rather than re-measuring the deck.
    if (settled) {
      section.classList.add('mixes-settled');
      return;
    }
    if (reduced() || performance.now() - enteredAt > settleAfter(visibleCards(section).length)) {
      settled = true;
      section.classList.add('mixes-settled');
      return;
    }
    flyCardsIn(section);
  };

  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      sync();
    });
  };

  window.__kosiMixes = { sync, schedule };

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sync, { once: true });
  } else {
    sync();
  }
})();
