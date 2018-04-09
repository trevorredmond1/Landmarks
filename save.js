const fs = require('fs');

module.exports.add = function(name, location) {
	var read = fs.readFileSync('data.JSON');
	var parse = JSON.parse(read);
	var add = {"email": name, "location": location};
	parse.push(add);
	fs.writeFileSync('filetest.json', JSON.stringify(parse));
};
