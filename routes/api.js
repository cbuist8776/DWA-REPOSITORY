//router and path variables set to work with express and the path being required

module.exports = function (express) {
  var router = express.Router();
  var path = require("path");


// Endpoint of api/v1/urls set to post with the requirement and resportions set in the function. Console.log to check

  router.post('/api/v1/urls', function(req, res){
    console.log('test');

//Variable string set to strSource to make the shortened link from.

 var strSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'

//For Loop set to have i = 0 and to increment with Math.round and Math.random functions to help shorten the url.

var strReturn = '';
for (var i=0 ; i<strLength; i++){
	var rand = Math.round(Math.random() * (strSource.length - 1))
	strReturn += strSource.charAt(rand);

//json information set to accept the url that is entered and return the variable strReturn for shortned url.


	res.json({URLLink:'http://' + strReturn});

	};

//router set to get the file path api/v1/urls to show the shortned url.


	router.get('/api/v1/urls', function (req, res) {
		res.sendFile(path.join(__dirname+'/views/index.html'));

	});
