// ----------------- Burger-nav --------------->

let burgerBtn = document.querySelector('.burger .burger__btn');
let burgerNav = document.querySelector('.burger .burger__navigation');

document.addEventListener ('click', (e) => {
  target = e.target;
  if(target === burgerBtn) {
    burgerBtn.classList.add('active')
    burgerNav.classList.add('active')
  } else if (target !== burgerBtn || burgerNav) {
    burgerBtn.classList.remove('active')
    burgerNav.classList.remove('active')
  }
})