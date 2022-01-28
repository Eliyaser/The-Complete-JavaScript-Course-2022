'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal.length);
// show model
const showmodel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// hide model
const hidemodel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', showmodel);
}

btnCloseModal.addEventListener('click', hidemodel);
overlay.addEventListener('click', hidemodel);

document.addEventListener('keydown', function (e) {
  // console.log(e);
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    hidemodel();
  }
});
