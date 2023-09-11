gsap.registerPlugin(ScrollTrigger);


gsap.from('.section-title', {
   opacity: 0,
   duration: 1,
   delay: 0.4,
   x: 70,
});
gsap.from('.section-text', {
   opacity: 0,
   duration: 1,
   delay: 0.6,
   x: -70,
});
gsap.from('.btns-wrap', {
   opacity: 0,
   duration: 1,
   delay: 0.8,
   y: -70,
});
const animation = gsap.from('.header-nav', {
   opacity: 0,
   duration: 1,
   y: 70,
   paused: true,
});
// Создайте ScrollTrigger для элемента
ScrollTrigger.create({
   trigger: '.header-nav',
   start: 'top 80%',
   onEnter: () => {
      animation.play();
   },
   onLeave: () => {
      animation.reverse();
   },
   onEnterBack: () => {
      animation.play();
   },
   onLeaveBack: () => {
      animation.reverse();
   },
});


const featuresAnimation = gsap.from('.features-section', {
   opacity: 0,
   duration: 1,
   delay: 1,
   x: 90,
   paused: true,
});
const contentsAnimation = gsap.from('.contents-section', {
   opacity: 0,
   duration: 1,
   delay: 1,
   x: -90,
   paused: true,
});
const galleryAnimation = gsap.from('.gallery', {
   opacity: 0,
   duration: 1,
   delay: 1,
   x: 90,
   paused: true,
});
const partnersAnimation = gsap.from('.partners', {
   opacity: 0,
   duration: 1,
   delay: 1,
   x: -90,
   paused: true,
});
const testimonialsAnimation = gsap.from('.testimonials', {
   opacity: 0,
   duration: 1,
   delay: 1,
   x: 90,
   paused: true,
});



ScrollTrigger.create({
   trigger: '.features-section',
   start: 'top 90%',
   onEnter: () => {
      featuresAnimation.play();
   },
   onLeave: () => {
      featuresAnimation.reverse();
   },
   onEnterBack: () => {
      featuresAnimation.play();
   },
   onLeaveBack: () => {
      featuresAnimation.reverse();
   },
});
ScrollTrigger.create({
   trigger: '.contents-section',
   start: 'top 90%',
   onEnter: () => {
      contentsAnimation.play();
   },
   onLeave: () => {
      contentsAnimation.reverse();
   },
   onEnterBack: () => {
      contentsAnimation.play();
   },
   onLeaveBack: () => {
      contentsAnimation.reverse();
   },
});
ScrollTrigger.create({
   trigger: '.gallery',
   start: 'top 90%',
   onEnter: () => {
      galleryAnimation.play();
   },
   onLeave: () => {
      galleryAnimation.reverse();
   },
   onEnterBack: () => {
      galleryAnimation.play();
   },
   onLeaveBack: () => {
      galleryAnimation.reverse();
   },
});
ScrollTrigger.create({
   trigger: '.partners',
   start: 'top 90%',
   onEnter: () => {
      partnersAnimation.play();
   },
   onLeave: () => {
      partnersAnimation.reverse();
   },
   onEnterBack: () => {
      partnersAnimation.play();
   },
   onLeaveBack: () => {
      partnersAnimation.reverse();
   },
});

ScrollTrigger.create({
   trigger: '.testimonials',
   start: 'top 90%',
   onEnter: () => {
      testimonialsAnimation.play();
   },
   onLeave: () => {
      testimonialsAnimation.reverse();
   },
   onEnterBack: () => {
      testimonialsAnimation.play();
   },
   onLeaveBack: () => {
      testimonialsAnimation.reverse();
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


