(function () {
  'use strict';

  // ── Sticky nav ──
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── Scroll reveal with stagger ──
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const parent = e.target.closest('.solutions-grid, .benefits');
          if (parent) {
            const siblings = [...parent.querySelectorAll('.fade-up')];
            const idx = siblings.indexOf(e.target);
            if (idx >= 0) {
              e.target.style.transitionDelay = `${idx * 0.1}s`;
            }
          }
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  fadeEls.forEach((el) => {
    if (!el.closest('.hero-copy')) observer.observe(el);
  });

  // Hero form uses CSS load animation; mark visible so scroll logic stays consistent
  document.querySelectorAll('.hero-form-wrap.fade-up').forEach((el) => el.classList.add('visible'));

  // Button ripple on click
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // ── Carousel ──
  class Carousel {
    constructor(wrap) {
      this.wrap = wrap;
      this.track = wrap.querySelector('.carousel-track');
      this.slides = [...wrap.querySelectorAll('.carousel-slide')];
      this.prevBtn = wrap.querySelector('.carousel-btn.prev');
      this.nextBtn = wrap.querySelector('.carousel-btn.next');
      this.progressBar = wrap.querySelector('.carousel-progress-bar');
      this.index = 0;
      this.autoplayMs = 5000;
      this.timer = null;
      this.progressTimer = null;
      this.progressStart = 0;

      this.prevBtn.addEventListener('click', () => this.go(-1));
      this.nextBtn.addEventListener('click', () => this.go(1));

      wrap.addEventListener('mouseenter', () => this.pause());
      wrap.addEventListener('mouseleave', () => this.play());

      this.update();
      this.play();
    }

    go(dir) {
      this.index = (this.index + dir + this.slides.length) % this.slides.length;
      this.update();
      this.play();
    }

    update() {
      const slide = this.slides[this.index];
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const offset = window.innerWidth / 2 - slideCenter;
      this.track.style.transform = `translateX(${offset}px)`;
    }

    startProgress() {
      this.progressStart = Date.now();
      clearInterval(this.progressTimer);
      this.progressTimer = setInterval(() => {
        const pct = Math.min(((Date.now() - this.progressStart) / this.autoplayMs) * 100, 100);
        this.progressBar.style.width = pct + '%';
        if (pct >= 100) clearInterval(this.progressTimer);
      }, 30);
    }

    play() {
      clearTimeout(this.timer);
      this.progressBar.style.width = '0%';
      this.startProgress();
      this.timer = setTimeout(() => this.go(1), this.autoplayMs);
    }

    pause() {
      clearTimeout(this.timer);
      clearInterval(this.progressTimer);
    }
  }

  const carousels = [];
  document.querySelectorAll('[data-carousel]').forEach((wrap) => carousels.push(new Carousel(wrap)));

  window.addEventListener('resize', () => {
    carousels.forEach((c) => c.update());
  });

  function setSubmitLabel(btn, text) {
    const label = btn.querySelector('.btn-submit-text');
    if (label) label.textContent = text;
    else btn.textContent = text;
  }

  const CONTACT_API = 'api/contact.php';
  const THANK_YOU_URL = 'thank-you.php';

  function redirectToThankYou(form) {
    const source = form.id === 'heroContactForm' ? 'hero' : 'modal';
    window.location.href = `${THANK_YOU_URL}?from=${encodeURIComponent(source)}`;
  }

  async function sendContactForm(form) {
    const formData = new FormData(form);
    if (form.id === 'heroContactForm') {
      formData.set('source', 'hero');
    } else if (form.id === 'modalContactForm') {
      formData.set('source', 'modal');
    }

    const res = await fetch(CONTACT_API, {
      method: 'POST',
      body: formData,
    });

    let data = {};
    try {
      data = await res.json();
    } catch {
      throw new Error('Invalid server response.');
    }

    if (!res.ok || !data.ok) {
      throw new Error(data.message || 'Could not send your message.');
    }

    return data;
  }

  function bindFormSubmit(form, btnSelector, doneLabel) {
    if (!form) return;
    const resetLabel = doneLabel || 'Submit';
    const sendingLabel = 'Sending…';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const btn = form.querySelector(btnSelector);
      btn.classList.add('is-loading');
      btn.disabled = true;
      setSubmitLabel(btn, sendingLabel);

      try {
        await sendContactForm(form);
        redirectToThankYou(form);
      } catch (err) {
        btn.classList.remove('is-loading');
        btn.disabled = false;
        setSubmitLabel(btn, resetLabel);
        alert(err.message || 'Could not send. Please call 888-980-7422.');
      }
    });
  }

  const heroForm = document.getElementById('heroContactForm');
  if (heroForm) {
    const messageField = heroForm.querySelector('#message');
    const messageCount = document.getElementById('messageCount');
    const maxMsg = 500;

    if (messageField && messageCount) {
      messageField.setAttribute('maxlength', String(maxMsg));
      messageField.addEventListener('input', () => {
        const len = messageField.value.length;
        messageCount.textContent = `${len} / ${maxMsg}`;
        messageCount.classList.toggle('is-near-limit', len > maxMsg * 0.85);
      });
    }

    heroForm.addEventListener('heroformreset', () => {
      if (messageCount) messageCount.textContent = `0 / ${maxMsg}`;
    });

    bindFormSubmit(heroForm, '.btn-submit', 'Book Free Demo');
  }

  // ── Contact popup modal ──
  const contactModal = document.getElementById('contactModal');

  function closeContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove('is-open');
    contactModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function openContactModal() {
    if (!contactModal) return;
    contactModal.classList.add('is-open');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    const firstInput = contactModal.querySelector('input, select, textarea');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  document.querySelectorAll('.js-open-contact').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openContactModal();
    });
  });

  document.querySelectorAll('.js-close-contact').forEach((el) => {
    el.addEventListener('click', closeContactModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal?.classList.contains('is-open')) {
      closeContactModal();
    }
  });

  if (contactModal) {
    setTimeout(() => {
      if (!contactModal.classList.contains('is-open')) {
        openContactModal();
      }
    }, 3000);
  }

  const modalForm = document.getElementById('modalContactForm');
  if (modalForm) {
    const modalMessage = modalForm.querySelector('#modalMessage');
    const modalMessageCount = document.getElementById('modalMessageCount');
    const maxMsg = 500;

    if (modalMessage && modalMessageCount) {
      modalMessage.setAttribute('maxlength', String(maxMsg));
      modalMessage.addEventListener('input', () => {
        const len = modalMessage.value.length;
        modalMessageCount.textContent = `${len} / ${maxMsg}`;
        modalMessageCount.classList.toggle('is-near-limit', len > maxMsg * 0.85);
      });
    }

    modalForm.addEventListener('heroformreset', () => {
      if (modalMessageCount) modalMessageCount.textContent = `0 / ${maxMsg}`;
    });

    bindFormSubmit(modalForm, '.btn-submit', 'Book Free Demo');
  }
})();
