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

  sendError();

}

function sendError() {
  const sendCheck = document.getElementsByClassName('send-check');
  const errorWord = '<p class="error-word">必須項目に記入もれがあります。</p>';

  for(let i = 0; i < sendCheck.length; i++) {
    const sendName = sendCheck[i];
    // const sendValue = document.getElementById('js-form').input_message.value;
    sendName.style.marginBottom = '0';
    sendName.insertAdjacentHTML('afterend', errorWord);

    // if(sendValue === null) {

    // }
  }




}



