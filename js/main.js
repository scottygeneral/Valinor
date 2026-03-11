/* ============================
   VALINOR RANCH — MAIN JS
   ============================ */

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


// ---- HERO SLIDESHOW ----
(function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 5500);
})();


// ---- HERO VIDEO (YouTube IFrame API) ----
// Configure these values when adding a video:
const HERO_VIDEO = {
  id: 'gkkmYXLvdPQ',  // Valinor Ranch hero footage
  start: 500,          // 8:20
  end: 511,            // 8:31
};

let player;

// This function is called automatically by the YouTube IFrame API
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
        // Fallback to static image on error
        heroEl.classList.add('hero--fallback');
      },
    },
  });
}
