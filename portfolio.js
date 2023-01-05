$(document).ready(function () {
  // if(window.innerWidth > 425){
  //   setTimeout(()=>{
  //     window.location.replace("https://luwafemi.herokuapp.com")

  //   }, 4000)
  // }
  // ............REMOVE HASH...........................
  $(".home").on("click", function () {
    setTimeout(function () {
      let stateObj = { id: "100" };
      window.history.replaceState(stateObj, "#home", " ");
    }, 1);
  });
  $(".projectss").on("click", function () {
    setTimeout(function () {
      let stateObj = { id: "100" };
      window.history.replaceState(stateObj, "#projects", " ");
    }, 1);
  });
  $(".contact").on("click", function () {
    setTimeout(function () {
      let stateObj = { id: "100" };
      window.history.replaceState(stateObj, "#contact", " ");
    }, 1);
  });
  $(".about").on("click", function () {
    setTimeout(function () {
      let stateObj = { id: "100" };
      window.history.replaceState(stateObj, "#about", " ");
    }, 1);
  });
  // ...................LIGHT MODE......................................................
  $(".switch").on("click", function (e) {
    $("body").toggleClass("backgroundColorWhite");
    $(".navvv").toggleClass("navColorWhite");
    $(".fill").toggleClass("telegramFillWhite");
    $("footer").toggleClass("footerColorWhite");
    $(".phone").toggleClass("phoneColorWhite");
    // $(".card").toggleClass("cardShadowWhite");
  });
  // ............................NAVBAR.............................................
  $("#root").on("click", function (e) {
    var el = $(e.target);
    // console.log(el);
    var loo = $(".menu");

    if (el.is(loo)) {
      $(".navvv").show();
    } else {
      $(".navvv").hide();
    }
  });
  // ...........................CARDS POPOVER..........................
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  $(function () {
    $('[data-toggle="popover"]').popover();
  });
  $(".popover-dismiss").popover({
    trigger: "focus",
  });
  // .....................................TRANSITIONS...............................................

  // ................. PAGE TRANSITION..........................
  var tl = gsap.timeline();

  tl.to("ul.transition li", {
    backgroundColor: "hsla(192, 95%, 50%, 1)",
    repeat: 4,
  })
    .to("ul.transition li", {
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

  // ...................NAV TRANSITION..............................
  $(".menu").on("click", () => {
    var menu = gsap.timeline();
    menu
      .to(".navvv", {
        translateX: -40,
        duration: 1,
      })
      .to(".navvv", {
        translateX: 0,
        duration: 1,
      });
  });
  // ...............SCROLL TRIGGERED TRANSITIONS...................
  gsap.registerPlugin(ScrollTrigger);

  // var tl = gsap.timeline({
  //   defaults: { duration: 1, repeat: 0 },
  //   ScrollTrigger: {
  //     trigger: "",
  //   },
  // });
  gsap.from(".profile", {
    scrollTrigger: {
      trigger: ".profile",
      // toggleActions: "play restart none none",
      // end: "end 90px",
      // markers: true,
    },
    rotate: 360,
    duration: 2,
    delay: 7,
  });
  gsap.from(".about", {
    scrollTrigger: {
      trigger: ".about",
      toggleActions: "play",
      end: "top top",
      // markers: true,
    },
    rotateY: -50,

    duration: 3,
    delay: 7,
  });
  gsap.from(".projects", {
    scrollTrigger: {
      trigger: ".projects",
      toggleActions: "restart none restart pause",
      end: "top top",
      // start: "top center",
      // markers: true,
    },
    translateY: 50,
    duration: 2,
  });
  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".numberOne",
      toggleActions: "restart none restart pause",
      end: "top top",
    },
    translateY: 50,
    duration: 2,
    stagger: 1,
  });
  gsap.from(".tools", {
    scrollTrigger: {
      trigger: ".tools",
      toggleActions: "restart none restart reverse",
      end: "top top",
    },
    rotate: 360,
    translateY: -50,
    duration: 2,
    stagger: 0.4,
  });
});
