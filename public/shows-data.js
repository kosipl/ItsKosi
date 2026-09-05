(function () {
  document.documentElement.classList.add('shows-motion-ready');

  const shows = [
    {
      date: 'SEP 04',
      venue: 'Comet Tavern · Capitol Hill',
      location: 'Seattle · 10 PM — 2 AM',
      url: 'https://www.instagram.com/comet_tavern/'
    },
    {
      date: 'SEP 05',
      venue: "Big Mario's Pizza · Capitol Hill",
      location: 'Seattle · 10 PM — 2 AM',
      url: 'https://www.instagram.com/bigmariospizza/'
    },
    {
      date: 'SEP 11',
      venue: 'Private Event'
    },
    {
      date: 'SEP 12',
      venue: "Big Mario's Pizza · Capitol Hill",
      location: 'Seattle · 10 PM — 2 AM',
      url: 'https://www.instagram.com/bigmariospizza/'
    },
    {
      date: 'SEP 17',
      venue: 'TBA',
      location: 'Details coming soon'
    },
    {
      date: 'SEP 19',
      venue: "Big Mario's Pizza · Capitol Hill",
      location: 'Seattle · 10 PM — 2 AM',
      url: 'https://www.instagram.com/bigmariospizza/'
    }
  ];

  // Row stagger, mirrored from shows-motion.css. Used only to decide when an
  // entrance is old enough that restoring it must not replay it.
  const ROW_DELAY = 300;
  const ROW_STEP = 95;
  const ROW_RUN = 700;

  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  // The page component owns this DOM and re-renders it, so nothing may be
  // cached on the nodes: they are replaced. Entrance state is held here and
  // keyed by section id, and every pass re-reads whatever is on screen now.
  const entered = new Map();
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  const fill = (list) => {
    const requestedLimit = Number.parseInt(list.dataset.limit || '', 10);
    const visibleShows = Number.isFinite(requestedLimit) ? shows.slice(0, requestedLimit) : shows;
    const stamp = shows.length + ':' + visibleShows.length;
    if (list.dataset.showsRendered === stamp) return visibleShows.length;

    const fragment = document.createDocumentFragment();
    visibleShows.forEach((show, index) => {
      const row = make('div', 'event-row');
      row.style.setProperty('--event-index', index);
      row.append(make('span', 'event-date', show.date));
      row.append(make('span', 'event-venue', show.venue));
      if (show.location) row.append(make('span', 'event-location', show.location));

      if (show.url) {
        const link = make('a', 'event-details', 'DETAILS ↗');
        link.href = show.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        row.append(link);
      }

      fragment.append(row);
    });

    list.replaceChildren(fragment);
    list.dataset.showsRendered = stamp;
    return visibleShows.length;
  };

  const settleAfter = (rows) => ROW_DELAY + Math.max(0, rows - 1) * ROW_STEP + ROW_RUN;

  // On the home page these sections sit inside pinned layers that are
  // visibility:hidden until the scroll track reveals them. Their rects are in
  // the viewport from the first frame, so geometry alone would fire the
  // entrance long before anyone could see it.
  const onScreen = (section) => {
    if (getComputedStyle(section).visibility === 'hidden') return false;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const rect = section.getBoundingClientRect();
    const visible = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    return visible >= Math.min(rect.height, viewportHeight) * .18;
  };

  const sync = () => {
    const lists = document.querySelectorAll('[data-shows-list]');
    if (!lists.length) return;

    const rowsPerSection = new Map();
    lists.forEach((list) => {
      const rows = fill(list);
      const section = list.closest('section');
      if (section) rowsPerSection.set(section, Math.max(rowsPerSection.get(section) || 0, rows));
    });

    let index = 0;
    rowsPerSection.forEach((rows, section) => {
      const key = section.id || 'shows-' + index;
      index += 1;
      const at = entered.get(key);

      if (at === undefined) {
        if (!reduced() && !onScreen(section)) return;
        entered.set(key, performance.now());
        section.classList.add('shows-animated');
        if (reduced()) section.classList.add('shows-settled');
        return;
      }

      // Re-assert on the current nodes. Past the stagger the entrance has
      // already been watched, so a restore must land on the finished state
      // rather than run the whole thing again.
      section.classList.add('shows-animated');
      if (reduced() || performance.now() - at > settleAfter(rows)) section.classList.add('shows-settled');
    });
  };

  let frame = 0;
  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      sync();
    });
  };

  window.__kosiShows = { sync, schedule };

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sync, { once: true });
  } else {
    sync();
  }
})();
