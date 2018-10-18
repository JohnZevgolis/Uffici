$(function() {
	productPageButton();
})

function productPageButton() {
	$(".content.product-content button.slideToggle").click(function() {
		if($(this).find("i").first().is(":visible")) {
			$(this).find("i").first().fadeOut(100);
			$(this).find("i").last().fadeIn(100);
		} else {
			$(this).find("i").first().fadeIn(100);
			$(this).find("i").last().fadeOut(100);
		}
		
	})
}