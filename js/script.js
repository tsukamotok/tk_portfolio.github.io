'use strict';

function toggleNav() {
  const btnIcon = document.getElementById('js-btn-icon');
  const body = document.body;
  const header = document.getElementById('js-header');
  const globalNav = document.getElementById('js-global-nav');

  btnIcon.onclick = function() {
    body.classList.toggle('nav-open');
    body.classList.toggle('fixed');
    header.classList.toggle('header-open');

    if(document.getElementById('js-send-done').classList.contains('send-modal-open')) {
      document.getElementById('js-send-done').classList.toggle('send-modal-open');
    }
    };

    globalNav.onclick = function() {
      body.classList.toggle('nav-open');
      body.classList.toggle('fixed');
      header.classList.toggle('header-open');
    }
  }
  
  toggleNav();

  function closeSend() {
    const backTop = document.getElementById('js-back-top');

    backTop.onclick = function() {
      const send = document.getElementById('js-send-done');
      const body = document.body;
      body.classList.toggle('nav-open');
      body.classList.toggle('fixed');
      send.classList.toggle('send-modal-open');
      document.getElementById('js-header').classList.toggle('header-open');
    }
  }

  closeSend();

// フォームの値を取得
function onButtonClick() {
  const send = document.getElementById('js-send-done');
  const body = document.body;
  body.classList.toggle('nav-open');
  body.classList.toggle('fixed');
  send.classList.toggle('send-modal-open');
  document.getElementById('js-header').classList.toggle('header-open');

  const company = document.getElementsByName('company');
  const name = document.getElementsByName('name');
  const eMail = document.getElementsByName('e-mail');
  const tel = document.getElementsByName('tel');
  const message = document.getElementsByName('message');

  const contact = {
    company: company[0].value,
    name: name[0].value,
    eMail: eMail[0].value,
    tel: tel[0].value,
    message: message[0].value
  };

  for(let p in contact) {
    console.log(p + ':' + contact[p]);
  }
}