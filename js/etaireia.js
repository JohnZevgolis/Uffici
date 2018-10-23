$(function() {
	if (width > 992) {
      skrollr.init({forceHeight: false});
    } else {
      skrollr.init().destroy();
    }

    $(window).resize(function() {
    	if (width > 992) {
	      skrollr.init({forceHeight: false});
	    } else {
	      skrollr.init().destroy();
	    }
    })
})