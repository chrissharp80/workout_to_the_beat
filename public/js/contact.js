function showContact() {
	$('li.nav-item').removeClass('active');
	$('#contactNav').addClass('active');
	$.get('/views/contact', (view) => {
		$('#main').html(view);
	});
}
