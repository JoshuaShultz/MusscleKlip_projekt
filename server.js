const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
require("./routes/routeIndex")(app);
app.listen(app.get('port'), function () {
	console.log('Listening on port ' + app.get('port'));
});