$(function() {
	var $carousel = $('#demo');
	$carousel.bind('slide.bs.carousel', function (e) {
	    if($(".myitem .mydropdown").hasClass("scale-dropdown")) {
	    	$(this).removeClass("scale-dropdown");
	    }
	});

	scrollDown();
	carousel();

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
	if(width<768) {
		$(".mycarousel").addClass("margin-top");
	} else {
		$(".mycarousel").removeClass("margin-top").removeAttr("style");
	}
}