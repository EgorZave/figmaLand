gsap.registerPlugin(ScrollTrigger);

gsap.from('.section-title', {
   opacity: 0,
   duration: 1,
   delay: 0.5,
   x: 70,
   scrollTrigger: {
      trigger: '.section-title',
      toggleActions: 'play none none none',
   },
});

gsap.from('.section-text', {
   opacity: 0,
   duration: 1,
   delay: 0.6,
   x: -80,
   scrollTrigger: {
      trigger: '.section-text',
      toggleActions: 'play none none none',
   },
});

gsap.from('.btns-wrap', {
   opacity: 0,
   duration: 1,
   delay: 0.8,
   y: 50,
   scrollTrigger: {
      trigger: '.btns-wrap',
      toggleActions: 'play none none none',
   },
});
function gsapAnimate() {
   for (let i = 0; i < arguments.length; i++) {
      gsap.fromTo(`.${arguments[i]}`, { opacity: 1 }, {
         opacity: 0,
         scrollTrigger: {
            trigger: `.${arguments[i]}`,
            start: "center",
            scrub: true
         }
      })
   }
}
gsapAnimate("title-section", "features-section", "contents-section", "title-section", "gallery", "partners", "testimonials")


const btn = document.querySelector(".header-menu-btn")
const nav = document.querySelector('.header-nav')
btn.addEventListener('click', function () {
   nav.classList.toggle("active")
   document.body.classList.toggle("body-active")
})


