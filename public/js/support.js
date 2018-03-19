function showSupport() {
	$('li.nav-item').removeClass('active');
	$('#supportNav').addClass('active');
	$.get('/views/support', (view) => {
		$('#main').html(view);
	});
}
