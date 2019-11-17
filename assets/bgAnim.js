const bgAnim = document.querySelector(".vid-div");
const video = bgAnim.querySelector("video");
//END SECTION
const section = document.querySelector("section");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: bgAnim,
  triggerHook: 0
})
  .setPin(bgAnim)
  .addTo(controller);


//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);
