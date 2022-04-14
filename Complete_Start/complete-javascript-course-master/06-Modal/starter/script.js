'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  // remove class hidden in css
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].addEventListener('click', openModal));
}

const closeMoodal = function () {
  // add class hidden in css
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsCloseModal.addEventListener('click', closeMoodal);

overlay.addEventListener('click', closeMoodal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    if (!modal.classList.contains('hidden')) {
      closeMoodal();
    }
  }
});
