const express = require('express');
const router = express.Router();

// capture data emitted from Arduino
let message = 'hello';


// get home page
router.get('/', (req, res, next) => {
    res.render('index', {
		title: 'Home',
		message: message
    });
});

router.get('/message', (req, res) => {
    res.status(200).send({message: message});
})

module.exports = router;