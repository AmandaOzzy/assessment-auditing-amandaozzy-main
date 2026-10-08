/**
 * main.js
 * Reverie Records & Coffee
 * WEBD2002 Accessible Web Design | Starter Files
 *
 * Responsibilities:
 *   - Mobile navigation toggle (.is-open on nav, .is-active on button)
 *   - Escape key closes the open menu and returns focus to the toggle button
 *   - Clicking a nav link on mobile closes the menu
 */

(function () {
  'use strict';

  const navToggle  = document.querySelector('.nav-toggle');
  const primaryNav = document.getElementById('primary-nav');

  if (!navToggle || !primaryNav) return;

  navToggle.addEventListener('click', function () {
    primaryNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
      primaryNav.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.focus();
    }
  });

  primaryNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      primaryNav.classList.remove('is-open');
      navToggle.classList.remove('is-active');
    });
  });

}());
