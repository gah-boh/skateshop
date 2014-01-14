var path = require('path');
var express = require('express');

var app = express();

app.configure(function() {
	app.use(express.static(path.join(__dirname, "./app/")));
});

app.listen(9000);

console.log("Listening for requests on port 9000");