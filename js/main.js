/* ============================================
   VALINOR RANCH — MAIN JS
   ============================================ */

// ---- SCROLL REVEAL ANIMATIONS ----
(function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
})();


// ---- NAV SCROLL BEHAVIOUR ----
(function initNav() {
  const nav = document.querySelector('.site-nav');
  const hero = document.querySelector('.hero');
  if (!nav || !hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle('nav-scrolled', !entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(hero);
})();


// ---- HERO SCROLL INDICATOR FADE ----
(function initScrollIndicator() {
  const indicator = document.querySelector('.hero__scroll');
  if (!indicator) return;

  window.addEventListener('scroll', () => {
    indicator.style.opacity = window.scrollY > 100 ? '0' : '0.4';
  }, { passive: true });
})();


// ---- HERO VIDEO (YouTube IFrame API) ----
// Set HERO_VIDEO.id to a YouTube video ID to enable the video hero.
// Set start/end to the desired loop segment in seconds.
const HERO_VIDEO = {
  id: 'gkkmYXLvdPQ',
  start: 500,
  end: 511,
};

let player;

// Called automatically by the YouTube IFrame API script
function onYouTubeIframeAPIReady() {
  if (!HERO_VIDEO.id) return;

  const heroEl = document.querySelector('.hero');
  const videoContainer = document.getElementById('hero-video');
  if (!videoContainer) return;

  // Skip video on mobile — autoplay is unreliable
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    heroEl.classList.add('hero--fallback');
    videoContainer.remove();
    return;
  }

  player = new YT.Player('hero-video', {
    videoId: HERO_VIDEO.id,
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      loop: 0,
      modestbranding: 1,
      playsinline: 1,
      start: HERO_VIDEO.start,
      end: HERO_VIDEO.end,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
    },
    events: {
      onReady: function (e) {
        e.target.playVideo();
      },
      onStateChange: function (e) {
        if (e.data === YT.PlayerState.ENDED) {
          player.seekTo(HERO_VIDEO.start);
          player.playVideo();
        }
      },
      onError: function () {
        heroEl.classList.add('hero--fallback');
      },
    },
  });
}


// ---- INQUIRY FORM SUBMISSION ----
(function initForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  const WEBHOOK_URL = form.dataset.webhook || '';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    const note = form.querySelector('.form-note');

    btn.disabled = true;
    btn.textContent = 'Sending...';

    const data = Object.fromEntries(new FormData(form));

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }

      form.reset();
      btn.textContent = 'Sent';
      if (note) {
        note.textContent = 'Your message has been received. We will be in touch within 48 hours.';
      }
    } catch {
      btn.disabled = false;
      btn.textContent = 'Send';
      if (note) {
        note.textContent = 'Something went wrong. Please try again or reach us directly.';
      }
    }
  });
})();


// ---- BOOKING MODAL ----
(function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const openBtn = document.getElementById('open-booking');
  const closeBtn = document.getElementById('close-booking');
  const overlay = document.getElementById('booking-modal-overlay');
  if (!modal || !openBtn) return;

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();


// ---- HERO SLIDESHOW ----
(function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;

  let current = 0;
  setInterval(function () {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 6000);
})();


// ---- MOBILE NAV TOGGLE ----
(function initMobileNav() {
  const toggle = document.querySelector('.site-nav__toggle');
  const links = document.querySelector('.site-nav__links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    toggle.classList.toggle('is-open');
    links.classList.toggle('is-open');
  });
})();
