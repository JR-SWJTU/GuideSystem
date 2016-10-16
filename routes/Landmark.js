var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

var Landmark = require('../models/Landmark').Landmark;

//新建地标
router.get('/background/back_mainPage', function(req, res) {
	res.render('background/back_mainPage', { title: '新建' });
});

router.post('/background/back_mainPage',function(req,res){
console.log("11111111111111111111111111111111111");

	var landmark = new Landmark({
		longitude : 57.325,
		latitude : 150.268,
		name : "asd",
		category : "1,2,3",
		describe : "qwe",
		comment : "qwe",
		content : "qwe",
		aud_pass : "1"
	});

	console.log("11111111111111111111111111111111111");


	Landmark.findOne({ }, function(err,user){
		console.log("2222222222222222222222222");
		landmark.save(function(err,res){
			console.log("33333333333333333333333333333");
			if (err) {
				//res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
				console.log('服务器异常');
				return;
			};
		});
		res.redirect('/back_mainPage');
	});
});

module.exports = router;
