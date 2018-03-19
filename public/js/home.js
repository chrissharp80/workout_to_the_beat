function showHome () {
	$('li.nav-item').removeClass('active');
	$('#homeNav').addClass('active');
	$.get('/views/home', (view) => {
		$('#main').html(view);
	});
}
