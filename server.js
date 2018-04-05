//constants
const hbs = require('hbs');
const express = require('express');
const port = process.env.port || 8080;

//static content
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'hbs');

//main page
app.get('/', (request, response) => {
  response.render('mainapp.hbs');
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
