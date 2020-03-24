'use strict';

function toggleNav() {  
    document.getElementById('js-btn-icon').onclick = function() {
      document.body.classList.toggle('nav-open');
    };
  }
  
  toggleNav();