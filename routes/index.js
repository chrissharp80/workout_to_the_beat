const express = require('express');
const router = express.Router();

// get home page
router.get('/', (req, res, next) => {
    res.render('index', {
		title: 'Home'
    });
});

module.exports = router;