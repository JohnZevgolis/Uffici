$(function() {

  gift();

})

function gift() {

    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: ".gift-image",
      duration: "100%",
      triggerHook: 1
    })
    .setTween(TweenMax.from(".gift-image",6,{y:"200px",ease:SlowMo.easeOut}))
    .addTo(controller);
}