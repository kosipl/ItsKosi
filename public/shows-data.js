(function () {
  document.documentElement.classList.add('shows-motion-ready');

  // Store full dates so shows keep their original year as the calendar advances.
  const shows = [
    {
      date: '2026-09-04',
      venue: 'Comet Tavern · Capitol Hill',
      location: 'Seattle',
      url: 'https://www.instagram.com/comet_tavern/'
    },
    {
      date: '2026-09-05',
      venue: "Big Mario's Pizza · Capitol Hill",
      location: 'Seattle',
      url: 'https://www.instagram.com/bigmariospizza/'
    },
    {
      date: '2026-09-11',
      venue: 'Private Event',
      location: 'Seattle'
    },
    {
      date: '2026-09-12',
      venue: "Big Mario's Pizza · Capitol Hill",
      location: 'Seattle',
      url: 'https://www.instagram.com/bigmariospizza/'
    },
    {
      date: '2026-09-18',
      venue: 'Public House',
      location: 'Seattle',
      url: 'https://www.instagram.com/publichouseseattle/'
    },
    {
      date: '2026-09-19',
      venue: "Big Mario's Pizza · Capitol Hill",
      location: 'Seattle',
      url: 'https://www.instagram.com/bigmariospizza/'
    },
    {
      date: '2026-09-25',
      venue: 'Private Event',
      location: 'Atlanta',
      timeZone: 'America/New_York'
    },
    {
      date: '2026-09-30',
      venue: 'Vice',
      location: 'Seattle',
      url: 'https://www.instagram.com/viceseattle/?hl=en'
    },
    {
      date: '2026-10-03',
      venue: 'Barboza',
      location: 'Seattle',
      url: 'https://www.instagram.com/barboza206/'
    },
    {
      date: '2026-10-08',
      venue: 'El Malo',
      location: 'Atlanta',
      timeZone: 'America/New_York',
      url: 'https://www.instagram.com/p/Dd3_52JtjwR/'
    },
    {
      date: '2026-10-08',
      venue: 'The Listening Room',
      location: 'Atlanta',
      timeZone: 'America/New_York',
      url: 'https://posh.vip/e/the-listening-room-26'
    },
    {
      date: '2026-10-10',
      venue: 'Soulfest: Morehouse Homecoming',
      location: 'Atlanta',
      timeZone: 'America/New_York',
      url: 'https://posh.vip/e/soulfest-4th-edition?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeVVgtpHgEvhnXpckov_tjoNcaxPLJplfLOUzuGrs4kZ4-Yk0KYoL-TQfFLSQ_aem_AGqf6a22UPgTe-zcbjcWmw'
    },
    {
      date: '2026-10-16',
      venue: 'Late Night R&B',
      location: 'Bellevue',
      url: 'https://www.instagram.com/latenightsrnb/'
    },
    {
      date: '2026-10-17',
      venue: 'Wheres The Love',
      location: 'Tacoma',
      url: 'https://www.instagram.com/p/Dd8wFoqCxSP/'
    },
    {
      date: '2026-10-18',
      venue: 'Jahm Session',
      location: 'Seattle',
      url: 'https://www.instagram.com/jahmsessions/'
    },
    {
      date: '2026-10-23',
      venue: 'Private Event'
    },
    {
      date: '2026-10-24',
      venue: 'Private Event'
    },
    {
      date: '2026-10-27',
      venue: 'Creative Economy Career Day',
      location: 'Seattle',
      url: 'https://creativeeconomycareerday.com/'
    }
  ];

  const dateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'short', day: '2-digit', timeZone: 'UTC'
  });
  const calendars = new Map();
  const localDate = (now, timeZone) => {
    if (!calendars.has(timeZone)) {
      calendars.set(timeZone, new Intl.DateTimeFormat('en-US', {
        year: 'numeric', month: '2-digit', day: '2-digit', timeZone
      }));
    }
    const parts = Object.fromEntries(calendars.get(timeZone).formatToParts(now)
      .map(({ type, value }) => [type, value]));
    return `${parts.year}-${parts.month}-${parts.day}`;
  };
  const groupShows = (now) => {
    const upcoming = [], archive = [];
    shows.forEach((show) => {
      // Keep a show upcoming through its entire local calendar date.
      const today = localDate(now, show.timeZone || 'America/Los_Angeles');
      (show.date < today ? archive : upcoming).push(show);
    });
    upcoming.sort((a, b) => a.date.localeCompare(b.date));
    archive.sort((a, b) => b.date.localeCompare(a.date));
    return { upcoming, archive };
  };

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

  const fill = (list, groups) => {
    const isArchive = list.dataset.showsList === 'archive';
    const entries = isArchive ? groups.archive : groups.upcoming;
    const requestedLimit = Number.parseInt(list.dataset.limit || '', 10);
    const visibleShows = Number.isFinite(requestedLimit) ? entries.slice(0, requestedLimit) : entries;
    const stamp = (isArchive ? 'archive:' : 'upcoming:') +
      visibleShows.map((show) => show.date + ':' + show.venue).join('|');
    if (list.dataset.showsRendered === stamp) return visibleShows.length;

    const fragment = document.createDocumentFragment();
    visibleShows.forEach((show, index) => {
      const row = make('div', 'event-row');
      row.style.setProperty('--event-index', index);
      const date = make('time', 'event-date', dateFormat.format(new Date(show.date + 'T00:00:00Z')).toUpperCase() +
        (isArchive ? ' · ' + show.date.slice(0, 4) : ''));
      date.dateTime = show.date;
      row.append(date);
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

    if (!visibleShows.length) {
      const message = make('p', 'shows-empty', isArchive
        ? 'No past shows yet.'
        : 'More shows coming soon. Check back for new dates.');
      message.style.padding = '24px 0';
      fragment.append(message);
    }
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

    const groups = groupShows(new Date());
    const rowsPerSection = new Map();
    lists.forEach((list) => {
      const rows = fill(list, groups);
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
  addEventListener('pageshow', schedule);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) schedule();
  });
  // Refresh even when someone leaves the page open across midnight.
  setInterval(schedule, 60 * 1000);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sync, { once: true });
  } else {
    sync();
  }
})();
