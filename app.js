const express = require('express');
const path = require('path');

const app = express();

// routing
const index = require('./routes/index');

// setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.listen(3000, function() {
    console.log("Listening on Port 3000")
});
