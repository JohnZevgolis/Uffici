$(function() {
	var $carousel = $('#demo');
	$carousel.bind('slide.bs.carousel', function (e) {
	    if($(".myitem .mydropdown").hasClass("scale-dropdown")) {
	    	$(this).removeClass("scale-dropdown");
	    }
	});

	scrollDown();
	carousel();
	textFadeOut();
	backgroundParallax();

	$(window).resize(function() {
		carousel();
		textFadeOut();
	})
})

function scrollDown() {
	$(".scroll-down").click(function() {
		$("html,body").animate({scrollTop: $(".favorites").offset().top-headerHeight},500,"linear");
	})
}

function carousel() {
	if(width<768) {
		$(".mycarousel").addClass("margin-top");
	} else {
		$(".mycarousel").removeClass("margin-top").removeAttr("style");
	}
}

function textFadeOut() {
	$("#demo").on('slid.bs.carousel', function () {
	   skrollr.init().refresh();
	});

	if (width > 768) {
      skrollr.init({forceHeight: false});
    } else {
      skrollr.init().destroy();
    }
}

function backgroundParallax() {
	$.stellar({
		horizontalScrolling: false,
	    verticalOffset: 0,
	    horizontalOffset: 0
	});
}	