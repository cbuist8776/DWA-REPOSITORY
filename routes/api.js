module.exports = function (express) {
  var router = express.Router();
  var path = require("path");

  router.post('/api/v1/urls', function(req, res){
    console.log('test');
    
 var strSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'

var strReturn = '';
for (var i=0 ; i<strLength; i++){
	var rand = Math.round(Math.random() * (strSource.length - 1))
	strReturn += strSource.charAt(rand);
	
	
	res.json({URLLink:'http://' + strReturn});
	
	};
	

	router.get('/api/v1/urls', function (req, res) {
		res.sendFile(path.join(__dirname+'/views/index.html'));
		
	});
		
		
		
