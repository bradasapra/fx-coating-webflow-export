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
})();
