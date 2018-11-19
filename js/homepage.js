$(function() {
	var $carousel = $('#demo');

	$carousel.bind('slide.bs.carousel', function (e) {
	    if($(".myitem .mydropdown").hasClass("scale-dropdown")) {
	    	$(this).removeClass("scale-dropdown");
	    }
	});

	scrollDown();
	carousel();
	backgroundParallax();
	textFadeOut();

	$(window).resize(function() {
		carousel();
	})
})

function scrollDown() {
	$(".scroll-down").click(function() {
		$("html,body").animate({scrollTop: $(".favorites").offset().top-headerHeight},500,"linear");
	})
}

function carousel() {
	if(width<767) {
		$(".mycarousel").addClass("margin-top");
	} else {
		$(".mycarousel").removeClass("margin-top").removeAttr("style");
	}
}

function backgroundParallax() {
	$.stellar({
		horizontalScrolling: false,
	    verticalOffset: 0,
	    horizontalOffset: 0
	});
}	

function textFadeOut() {
	$(".myitem").each(function() {
		var controller = new ScrollMagic.Controller();

	    var scene = new ScrollMagic.Scene({
	      triggerElement: $(".height-100",this),
	      duration: "100%",
	      triggerHook: 0
	    })
	    .setTween(TweenMax.fromTo(".height-100",6,{y:"0",opacity:"1"}, {y:"-200px",opacity:"0",ease:SlowMo.easeOut}))
	    .addTo(controller);

	}) 
}