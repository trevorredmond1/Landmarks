//constants
const hbs = require('hbs');
const express = require('express');
<<<<<<< HEAD
const geocode = require('request');
=======
const port = process.env.port || 8080;
>>>>>>> 256918fa300fc82f4c0079a417de438e3f65341c

//static content
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

//main page
app.get('/', (request, response) => {
  response.render('mainapp.hbs');
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
