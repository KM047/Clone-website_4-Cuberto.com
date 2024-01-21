Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.3,
});

Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".hvr", {
  videos: [
    "/assets/js/video/0.mp4",
    "/assets/js/video/2.mp4",
    "/assets/js/video/3.mp4",
  ],
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 2,
  },

  y: "-300%",
  ease: Power1,
});

let secs = document.querySelectorAll(".fleftelm");

Shery.imageEffect(".images", {
  style: 4, //Select Style
  debug: false, //
  config : {onMouse : {value : 1}},
  slideStyle: (setScroller) => {
    secs.forEach(function (sec, index) {
      ScrollTrigger.create({
        trigger: sec,
        start: "top top",
        scrub: 2,
        onUpdate: function (data) {
          setScroller(data.progress + index)
        },
      });
    });
  },
});
