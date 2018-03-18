$(document).ready(function() {
	// put initial JS call here
	function showHome () {
		$.get('/views/home', (view) => {
			$('#main').html(view);
		});
	}

	showHome();

	$('#homeButton').on('click', () => {
		$('li.nav-item').removeClass('active');
		$('#homeNav').addClass('active');
		$.get('/views/home', (view) => {
			$('#main').html(view);
		});
	});

	$('#playlistsButton').on('click', () => {
		$('li.nav-item').removeClass('active');
		$('#playlistsNav').addClass('active');
		$.get('/views/playlists', (view) => {
			$('#main').html(view);
		});
	});

	$('#supportButton').on('click', () => {
		$('li.nav-item').removeClass('active');
		$('#supportNav').addClass('active');
		$.get('/views/support', (view) => {
			$('#main').html(view);
		});
	});

	$('#contactButton').on('click', () => {
		$('li.nav-item').removeClass('active');
		$('#contactNav').addClass('active');
		$.get('/views/contact', (view) => {
			$('#main').html(view);
		});
	});

	$('#submitInfoForm').on('click', (() => {
		// const data = $('#userInputForm').text($('#workout').serialize());
		// console.log(data);

		// $.get('/views/playlist', (view) => {
		// 	$('#main').html(view);
		// });

		// $.ajax({
		// 	url: '/playlists',
		// 	type: 'GET',
		// 	error: function () {
		// 		console.log("could not get playlists.pug");
		// 	},
		// 	success: function (data) {
		// 		$('#playlists_content').html(data);
		// 		console.log(data);
		// 	}
		// });
		// console.log($('#workout')[0].value);
		// console.log($('#warmup')[0].value);
		// console.log($('#inputFile')[0].value);
		// // alert('form will be handled');
	}));

	// $('#userInputForm').on( "submit", (event) => {
	// 	const str = $('#userInputForm').serialize();
	// 	event.preventDefault();
	// 	console.log( $(this).serialize() );
	// 	$.ajax({
	// 		url: '/playlists',
	// 		type: 'GET',
	// 		// data: new FormData(this),
	// 		error: function () {
	// 			console.log("could not get playlists.pug");
	// 		},
	// 		success: function (data) {
	// 			console.log(data);
	// 		}
	// 	});
	// });
});
