var fs = require('fs');

var email = 'trevor@email.com';
var location = 'Golden Gate Bridge';

var add = (name) => {
	var read = fs.readFileSync('data.JSON');
	var parse = JSON.parse(read);
	var add = `${name}: {"location": []}`;
	parse.push(add);
	fs.writeFileSync('filetest.json', JSON.stringify(parse));
};

//module.exports.add = function(name) {

add(email);
