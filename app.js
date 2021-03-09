'use strict';
const modalOpen = document.querySelector('.modal-open');
const modalClose = document.querySelector('.modal-close');
const modalWindow = document.querySelector('.modal-window');

function closeModal(){
  modalWindow.classList.add('hidden')
};

function openModal(){
  modalWindow.classList.remove('hidden')
};

modalClose.addEventListener('click', closeModal);

modalOpen.addEventListener('click', openModal);
