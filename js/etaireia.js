$(function() {
	gift();

	$(window).scroll(function() {
		gift();
	})
})

function gift() {

	var giftFlag = false;

	if(giftFlag==false) {
        var windowBottom = $(window).height() + $(window).scrollTop();

        $(".piato.gift").each(function() {

            var   itemBottom = $(this).offset().top - headerHeight + $(this).outerHeight();

            if(windowBottom>itemBottom) {
                $(this).find("img").addClass("transform-none");
            }

        })
    }

   if($(".piato.gift img").hasClass("transform-none")) {
        giftFlag = true;
    }

}