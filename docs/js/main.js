/* FX Coating Ltd. — Main JS */

(function () {
  'use strict';

  /* --- Mobile Nav Toggle --- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('is-active');
      nav.classList.toggle('is-open');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  /* --- Mobile Dropdown Toggle --- */
  var dropdownParents = document.querySelectorAll('.main-nav__item--has-dropdown');
  dropdownParents.forEach(function (item) {
    var link = item.querySelector('.main-nav__link');
    if (!link) return;
    link.addEventListener('click', function (e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        item.classList.toggle('is-open');
      }
    });
  });

  /* --- FAQ Accordion --- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-item__question');
    if (!question) return;
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      // Close all
      faqItems.forEach(function (other) { other.classList.remove('is-open'); });
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* --- Contact Form Step Toggle --- */
  var formNextBtn = document.querySelector('.form-next');
  var formBackBtn = document.querySelector('.form-back');
  var formSubmitBtn = document.querySelector('.form-submit');
  var step1 = document.querySelector('.form-step--1');
  var step2 = document.querySelector('.form-step--2');
  var formSuccess = document.querySelector('.form-success');

  if (formNextBtn && step1 && step2) {
    formNextBtn.addEventListener('click', function () {
      step1.classList.remove('is-active');
      step2.classList.add('is-active');
    });
  }

  if (formBackBtn && step1 && step2) {
    formBackBtn.addEventListener('click', function () {
      step2.classList.remove('is-active');
      step1.classList.add('is-active');
    });
  }

  if (formSubmitBtn && step2 && formSuccess) {
    formSubmitBtn.addEventListener('click', function (e) {
      e.preventDefault();
      step2.classList.remove('is-active');
      formSuccess.classList.add('is-active');
    });
  }

  /* --- Systems Tab Filter --- */
  var categoryLabels = {
    all: 'All: Our Complete Product Line',
    standard: 'Standard: Reliable, everyday protection systems',
    waterproof: 'Waterproofing: Moisture barriers and roof membranes',
    protective: 'Protective: Heavy-duty industrial defence',
    decorative: 'Decorative: Aesthetics meets performance'
  };

  var tabs = document.querySelectorAll('.systems-tab');
  var cards = document.querySelectorAll('.system-card');
  var heading = document.getElementById('systems-category-heading');

  if (tabs.length && cards.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var cat = tab.getAttribute('data-category');

        tabs.forEach(function (t) {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');

        cards.forEach(function (card) {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.classList.remove('is-hidden');
          } else {
            card.classList.add('is-hidden');
          }
        });

        if (heading && categoryLabels[cat]) {
          heading.textContent = categoryLabels[cat];
        }
      });
    });
  }

  /* --- Systems Modal --- */
  var modal = document.getElementById('system-modal');
  var modalOverlay = modal ? modal.querySelector('.system-modal__overlay') : null;
  var modalClose = modal ? modal.querySelector('.system-modal__close') : null;
  var modalImg = document.getElementById('modal-img');
  var modalTitle = document.getElementById('modal-title');
  var modalDesc = document.getElementById('modal-desc');
  var modalUse = document.getElementById('modal-use');
  var modalBenefits = document.getElementById('modal-benefits');
  var modalDetailLink = document.getElementById('modal-detail-link');
  var modalFlyerLink = document.getElementById('modal-flyer-link');

  function openModal(card) {
    if (!modal) return;
    var imgEl = card.querySelector('.system-card__image img');
    if (modalImg && imgEl) {
      modalImg.src = imgEl.src;
      modalImg.alt = imgEl.alt;
    }
    if (modalTitle) modalTitle.textContent = card.getAttribute('data-name') || '';
    if (modalDesc) modalDesc.textContent = card.getAttribute('data-desc') || '';
    if (modalUse) modalUse.textContent = card.getAttribute('data-use') || '';
    if (modalBenefits) modalBenefits.textContent = card.getAttribute('data-benefits') || '';
    if (modalDetailLink) modalDetailLink.href = (card.getAttribute('data-slug') || '') + '.html';
    if (modalFlyerLink) modalFlyerLink.href = card.getAttribute('data-flyer') || '#';

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cards.forEach(function (card) {
    card.addEventListener('click', function () { openModal(card); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
    });
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
})();
