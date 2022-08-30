let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .fromTo(".back-vid", { y: -30 }, { x: 0, duration: 10 }, "-=8")
  .fromTo(".logocontent", { x: -1400 }, { x: 200, duration: 4 }, "-=1")
  .fromTo(".tagline", { opacity: 0 }, { opacity: 1, duration: 2 })
  .to(".content1", 10, { top: "0%" }, "-=7")
  .fromTo(".content1-images", { opacity: 0 }, { opacity: 1, duration: 4 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 4 })
  .fromTo(".header-text", { opacity: 0 }, { opacity: 1, duration: 4 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "400%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);
