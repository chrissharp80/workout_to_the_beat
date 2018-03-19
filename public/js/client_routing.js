window.loadCorrectPage = function () {
	const location = window.location.search;
	if (location !== '?location=home' && (location === null || location === '' || location === undefined)) {
		window.location.search = '?location=home';
	} else {
		const queryParamString = window.location.search.split('?')[1];
		const queryParams = createQueryParamObjects(queryParamString);
		const pageLoc = queryParams.location;

		switch (pageLoc) {
			case 'home':
				showHome();
				break;
			case 'playlists':
				showPlaylists();
				break;
			case 'support':
				showSupport();
				break;
			case 'contact':
				showContact();
				break;
		}
	}
};

function createQueryParamObjects (queryParamString) {
	const queryParamIndividualStrings = queryParamString.split('&');
	const queryParams = {};
	for (const paramSet of queryParamIndividualStrings) {
		const params = paramSet.split('=');
		queryParams[params[0]] = params[1];
	}
	return queryParams;
}
