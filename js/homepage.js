$(function() {
	var $carousel = $('#demo');

	$carousel.bind('slide.bs.carousel', function (e) {
	    if($(".myitem .mydropdown").hasClass("scale-dropdown")) {
	    	$(this).removeClass("scale-dropdown");
	    }
	});

	carousel();
	backgroundParallax();
	textFadeOut();
});

$(window).on('resizeend', function(e) {
  	carousel();
});

function carousel() {

	$(".myitem .relative.dropdown-btn > a").click(function() {
		if($(this).next(".dropdown-menu").hasClass("scale-dropdown")) {
			$('#demo').carousel('pause');
		}
	});

	$('body').click(function () {
		if(!$(".myitem .dropdown-menu").hasClass("scale-dropdown")) {
			$('#demo').carousel('cycle');
		}
	});

	if(width<767) {

		$(".mycarousel").addClass("margin-top");

		touchSlide();

		marginTop();

	} else {

		$(".mycarousel").removeClass("margin-top").removeAttr("style");

		$('#demo').carousel({
		    interval: 6000,
		    pause: "false"
		});

		$("#demo").unbind("touchstart, touchend, mousemove, mousemove, mouseup, mousedown");

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

function touchSlide() {

	$('#demo').carousel('pause');

	$("#demo").on("touchstart", function (event) {
	    var xClick = event.originalEvent.touches[0].pageX;
	    $(this).one("touchmove", function (event) {
	        var xMove = event.originalEvent.touches[0].pageX;
	        if (Math.floor(xClick - xMove) > 5) {
	            $(this).carousel('next');
	        }
	        else if (Math.floor(xClick - xMove) < -5) {
	            $(this).carousel('prev');
	        }
	    });

	    $("#demo").on("touchend", function () {
	        $(this).off("touchmove");
	    });
	});

	// Mouse swipe when mouse is dragged to left/right
	var xClick;
	var mouseDown;

	$("#demo").on("mousedown", function (event) {
	    xClick = event.pageX;
	    mouseDown = true;
	});

	$("#demo").on("mousemove", function (event) {
	    if (mouseDown) {
	        var xMove = event.pageX;
	        if (xClick > xMove) {
	            $(this).carousel('next');
	        }
	        else if (xClick < xMove) {
	            $(this).carousel('prev');
	        }
	    }
	});

	$("#demo").on("mouseup", function (event) {
	    mouseDown = false;
	});

}