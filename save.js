var fs = require('fs');

var email = 'linden@email.com';
var location = 'CN Tower';

var object = {
  email: 'location'

};

var add = (name, location) => {
	object.email = location;
	fs.writeFileSync('data.json', JSON.stringify(object));

    var filelist = []

    filelist.push(object);

    var readthefile = fs.readFileSync('data.json');

    if (readthefile != '') {
        var data = JSON.parse(readthefile);

        for (var i = 0; i < data.length; i++) {
            filelist.push(data[i])
        };
    };

    fs.writeFileSync('data.json', JSON.stringify(filelist));
};


//module.exports.add = function(name) {

add(email, location);
