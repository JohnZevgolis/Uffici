$(function() {
	if (width > 992) {
      skrollr.init({forceHeight: false}); // skrollr.init() returns the singleton created above
    } else {
      skrollr.init().destroy(); // skrollr.init() returns the singleton created above
    }

    $(window).resize(function() {
    	if (width > 992) {
	      skrollr.init({forceHeight: false}); // skrollr.init() returns the singleton created above
	    } else {
	      skrollr.init().destroy(); // skrollr.init() returns the singleton created above
	    }
    })
})