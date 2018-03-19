$(document).ready(function() {
	window.loadCorrectPage();

	/************************************************************************/
	/*                          Button Handlers                             */
	/************************************************************************/
	$('#homeButton').on('click', () => {
		window.location = '/?location=home';
	});

	$('#playlistsButton').on('click', () => {
		window.location = '/?location=playlists';
	});

	$('#supportButton').on('click', () => {
		window.location = '/?location=support';
	});

	$('#contactButton').on('click', () => {
		window.location = '/?location=contact';
	});
	/************************************************************************/
	/*                         End Button Handlers                          */
	/************************************************************************/



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
