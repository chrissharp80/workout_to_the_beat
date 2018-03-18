$(document).ready(function() {
	// put initial JS call here
	$('#submitInfoForm').on('click', (() => {
		console.log($('#warmup')[0].value);
		// alert('form will be handled');
	}));

});
