/* ============================================
   FX Coating Ltd. — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Mobile Nav Toggle ---
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-active');
      mainNav.classList.toggle('is-open');
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // --- Mobile Dropdown Toggles ---
  var dropdownParents = document.querySelectorAll('.main-nav__item');
  dropdownParents.forEach(function (item) {
    var link = item.querySelector('.main-nav__link');
    var dropdown = item.querySelector('.dropdown');
    if (!link || !dropdown) return;

    link.addEventListener('click', function (e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        item.classList.toggle('is-open');
      }
    });
  });

  // --- FAQ Accordion ---
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-item__question');
    if (!question) return;

    question.addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');

      // Close all others in same parent
      var siblings = item.parentElement.querySelectorAll('.faq-item');
      siblings.forEach(function (sibling) {
        sibling.classList.remove('is-open');
      });

      if (!wasOpen) {
        item.classList.add('is-open');
      }
    });
  });

  // --- Contact Form Multi-Step ---
  var form = document.getElementById('contact-form');
  if (form) {
    var step1 = document.getElementById('form-step-1');
    var step2 = document.getElementById('form-step-2');
    var successMsg = document.getElementById('form-success');
    var nextBtn = document.getElementById('form-next');
    var backBtn = document.getElementById('form-back');
    var submitBtn = document.getElementById('form-submit');

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (step1) step1.classList.remove('is-active');
        if (step2) step2.classList.add('is-active');
      });
    }

    if (backBtn) {
      backBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (step2) step2.classList.remove('is-active');
        if (step1) step1.classList.add('is-active');
      });
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (step2) step2.classList.remove('is-active');
        if (successMsg) successMsg.classList.add('is-active');
      });
    }
  }
})();
