var fs = require('fs');

var email = 'linden@email.com';
var location = 'CN Tower';

var object = {
  name: 'Name',
  location: []
}

var add = (name) => {
	object.name = name;
	fs.writeFileSync('data.json', JSON.stringify(object));
};

//module.exports.add = function(name) {

add(email);
