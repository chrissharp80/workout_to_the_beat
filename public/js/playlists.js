function showPlaylists() {
	$('li.nav-item').removeClass('active');
	$('#playlistsNav').addClass('active');
	$.get('/views/playlists', (view) => {
		$('#main').html(view);
	});
}
