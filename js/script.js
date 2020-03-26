'use strict';

function toggleNav() {
  const btnIcon = document.getElementById('js-btn-icon');
  const body = document.body;
  const header = document.getElementById('js-header');
  const globalNav = document.getElementById('js-global-nav');

  btnIcon.onclick = function() {
    body.classList.toggle('nav-open');
    header.classList.toggle('header-open');
    };

    globalNav.onclick = function() {
      body.classList.toggle('nav-open');
      header.classList.toggle('header-open');
    }
  }
  
  toggleNav();