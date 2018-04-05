//constants
const hbs = require('hbs');
const express = require('express');

//static content
var app = express();
app.use(express.static(__dirname + '/public'))

//main page
app.get('/', (request, response) => {
  response.render('mainapp.hbs');
})

app.listen(8080);
