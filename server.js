const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const session    = require('express-session');


server.use(express.static("public"));
server.set("view engine", "ejs");
server.set("port", process.env.PORT || 3000);
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 5 * 60 * 1000 } // 5 minutter
}));
// Import routes
require("./routes/index")(server);

var url = "http://localhost:",
    port = server.get('port'),
    name = "Muskel Klip";

server.listen(3000, function () {
    console.log('Server listening at: ' + url+port+"/", '\n' + 'Server name: ' + name);
});