$(document).ready(function () {
  // ...................LIGHT MODE.....................................
  $(".switch").on("click", function (e) {
    $("body").toggleClass("backgroundColorWhite");
    $(".phone").toggleClass("phoneColorWhite");
  });
  // ...................CARDS POPOVER.................................
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
  // ................. PAGE TRANSITION................................
  var tl = gsap.timeline();

  tl.to("ul.transition li", {
    backgroundColor: "black",
  })
    .to(".hello", {
      opacity: 1,
      duration: 2,
    })
    .to("ul.transition li", {
      backgroundColor: "white",
    })
    .to(".hello", {
      opacity: 0,
      duration: 1,
    })
    .to("ul.transition li", {
      scaleY: 0,
      stagger: 0.23,
      transformOrigin: "10% 10%",
      delay: 0.2,
    });
});
