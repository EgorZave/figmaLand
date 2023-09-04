const btn = document.querySelector(".header-menu-btn")
const nav = document.querySelector('.header-nav')
btn.addEventListener('click', function () {
   nav.classList.toggle("active")
   document.body.classList.toggle("body-active")
})

