var OPEN = document.querySelector("#button-menu-open");
var CLOSE = document.querySelector("#button-menu-close");

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

var tl = gsap.timeline({paused: true})
tl.from(".container__left-menu", { x: '-100vw', duration: 1 }, 0)
.fromTo(".container__left-menu", { opacity: 0 }, { opacity: 1 }, 0)
.to(".container__left-menu", { display:'block', duration: 0 }, 0)
.to(".button-menu-close", { rotation: 1800, duration: 1.2 }, 0)
.to(".icon-close", { display:'block', duration: 0 }, 0.7)
.set(".icon-menu-2", { display:'none', duration: 0 }, 0.7);

var t2 = gsap.timeline({paused: true})
t2.to(".container__left-menu", { x: '-100vw', duration: 1 }, 0)
.fromTo(".container__left-menu", { opacity: 1 }, { opacity: 0 }, 0)
.to(".button-menu-close", { rotation: 1800, duration: 1.2 }, 0)
.to(".icon-close", { display:'none', duration: 0 }, 0.7)
.set(".icon-menu-2", { display:'block', duration: 0 }, 0.7)
.to(".container__left-menu", { display:'none' }, ">");

OPEN.onclick = function() {
  tl.restart();
}
CLOSE.onclick = function() {
  t2.restart();
}

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 2.05,
		effects: true
	})

  gsap.fromTo('.web-site-heade__text', 
    { opacity: 1 }, 
    { opacity: 0, scrollTrigger: { trigger: '.web-site-heade__text', start: "center center", end: "120% center", scrub: true }}
  )
  gsap.fromTo('.delimiter__line-left', 
    { width: '25%' }, 
    { width: '0%', scrollTrigger: { trigger: '.web-site-heade__text', start: "center center", end: "120% center", scrub: true }}
  )
  gsap.fromTo('.delimiter__line-right', 
    { width: '25%' }, 
    { width: '0%', scrollTrigger: { trigger: '.web-site-heade__text', start: "center center", end: "120% center", scrub: true }}
  )
  gsap.fromTo('.section-2__header__text', 
    { opacity: 0 }, 
    { opacity: 1, scrollTrigger: { trigger: '.section-2__header', start: 'center 100%', end: 'center 75%', scrub: true }}
  )
  gsap.fromTo('.section-2__header__text', 
    { opacity: 1 }, 
    { opacity: 0, scrollTrigger: { trigger: '.section-2__header', start: 'center 20%', end: 'center 5%', scrub: true }}
  )
  gsap.fromTo('.section-3__header__text', 
    { opacity: 0 }, 
    { opacity: 1, scrollTrigger: { trigger: '.section-3__header', start: 'center 100%', end: 'center 75%', scrub: true }}
  )
  gsap.fromTo('.section-3__header__text', 
    { opacity: 1 }, 
    { opacity: 0, scrollTrigger: { trigger: '.section-3__header', start: 'center 20%', end: 'center 5%', scrub: true }}
  )
  gsap.fromTo('.section-4__header__text', 
    { opacity: 0 }, 
    { opacity: 1, scrollTrigger: { trigger: '.section-4__header', start: 'center 100%', end: 'center 75%', scrub: true }}
  )
  gsap.fromTo('.section-4__header__text', 
    { opacity: 1 }, 
    { opacity: 0, scrollTrigger: { trigger: '.section-4__header', start: 'center 20%', end: 'center 5%', scrub: true }}
  )
  gsap.fromTo('.section-5__header__text', 
    { opacity: 0 }, 
    { opacity: 1, scrollTrigger: { trigger: '.section-5__header', start: 'center 100%', end: 'center 75%', scrub: true }}
  )
  gsap.fromTo('.section-5__header__text', 
    { opacity: 1 }, 
    { opacity: 0, scrollTrigger: { trigger: '.section-5__header', start: 'center 20%', end: 'center 5%', scrub: true }}
  )
  gsap.fromTo('.section-6__header__text', 
  { opacity: 0 }, 
  { opacity: 1, scrollTrigger: { trigger: '.section-6__header', start: 'center 100%', end: 'center 75%', scrub: true }}
)
gsap.fromTo('.section-6__header__text', 
  { opacity: 1 }, 
  { opacity: 0, scrollTrigger: { trigger: '.section-6__header', start: 'center 20%', end: 'center 5%', scrub: true }}
)
gsap.fromTo('.section-7__header__text', 
{ opacity: 0 }, 
{ opacity: 1, scrollTrigger: { trigger: '.section-7__header', start: 'center 100%', end: 'center 75%', scrub: true }}
)
gsap.fromTo('.section-7__header__text', 
{ opacity: 1 }, 
{ opacity: 0, scrollTrigger: { trigger: '.section-7__header', start: 'center 20%', end: 'center 5%', scrub: true }}
)
  
  var t3 = gsap.timeline()
  t3.fromTo(".web-site-header__h2", { opacity: 0, y: '10vh', scale: 2, duration: 0.35 }, { opacity: 1, y: '0vh', scale: 1 })
  t3.fromTo(".web-site-header__h1", { opacity: 0, y: '10vh', scale: 0, duration: 0.45 }, { opacity: 1, y: '0vh', scale: 1 })
  t3.fromTo(".delimiter__i", { opacity: 0, duration: 0.3 }, { opacity: 1})
  t3.to(".delimiter__i", { rotation: 1800, duration: 0.6 })
  t3.fromTo(".delimiter__line-left", { opacity: 0, width: '0%', duration: 0.5 }, { opacity: 1, width: '25%' }, 1.1)
  t3.fromTo(".delimiter__line-right", { opacity: 0, width: '0%', duration: 0.5 }, { opacity: 1, width: '25%' }, 1.1)
  t3.fromTo(".web-site-header__p", { opacity: 0, y: '-5vh', duration: 0.6 }, { opacity: 1, y: '-5vh' }, 1.4);
}
else {
  gsap.to('.web-site-header__h1', { opacity: 1 });
  gsap.to('.web-site-header__h2', { opacity: 1 });
  gsap.to('.delimiter__line-left', { opacity: 1 });
  gsap.to('.delimiter__line-right', { opacity: 1 });
  gsap.to('.delimiter__i', { opacity: 1 });
  gsap.to('.web-site-header__p', { opacity: 1 });
}