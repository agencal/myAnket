//definitions
var express = require('express');
var Cloudant = require('cloudant');
var cfenv = require('cfenv');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

//add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CLOUDANT//
var cloudant_url = "https://da69f23e-a0a7-47f6-87d7-cd75809455a6-bluemix:c16d68bed237d15f6147dc4b458f168ee7373d9676d77930163d6c5e070d142b@da69f23e-a0a7-47f6-87d7-cd75809455a6-bluemix.cloudant.com:443";
var cloudant = Cloudant({url: cloudant_url});

//DB//
var db;
db = cloudant.db.use("anketsonuc");

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();


//create schema
var nameSchema = new mongoose.Schema({
	anketisim: String,
	tarih: String,
    isim: String,
	soru1: Number,
	soru2: Number,
	soru3: Number,
	soru4: Number,
	soru5: Number,
	soru6: Number,
	soru7: Number,
	soru8: Number,
	ek1: String,
	ek2: String,
},
	{
		versionKey: false,
	});

//create User
var User = mongoose.model("User", nameSchema);

//Get&Post the results to the database
app.post("/success", function (req, res){
    var myData = new User(req.body);
    db.insert(myData);
    res.send("Ankete katıldığınız için teşekkür ederiz");
});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});


