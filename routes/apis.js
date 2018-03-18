const express = require('express');
const router = express.Router();

// get home page
router.get('/', (req, res, next) => {
    res.render('index', {
		title: 'Home'
    });
});

router.get('/views/home', (req, res) => {
	res.render('home', {
		title: 'Home'
	});
});

// playlists
router.get('/views/playlists', (req, res) => {
	res.render('playlists', {
		title: 'Playlists'
	});
});

// support
router.get('/views/support', (req, res) => {
	res.render('support', {
		title: 'Support'
	});
});

// contact
router.get('/views/contact', (req, res) => {
	res.render('contact', {
		title: 'Contact'
	});
});

module.exports = router;