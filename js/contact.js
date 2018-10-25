$(function() {

	$("#contact-form").validate({
		rules: {
			firstname: "required",
			surname: "required",
			email: {
				required: true,
				email: true
			},
			phone: "required",
			message: "required"
		},
		messages: {
			firstname: "Το πεδίο είναι υποχρεωτικό",
			surname: "Το πεδίο έίναι υποχρεωτικό",
			email: {
				required: "Το πεδίο είναι υποχρεωτικό",
				email: "Το email δεν είναι έγκυρο"
			},
			phone: "Το πεδίο είναι υποχρεωτικό",
			message: "Το πεδίο είναι υποχρεωτικό"
		}
	})

	$("#contact-form").submit(function(e) {
	  if(grecaptcha.getResponse() == "") {
	    e.preventDefault();
	    $("#recaptcha").append("<label class='error'>Το πεδίο είναι υποχρεωτικό</label>");
	  } 
	});
})