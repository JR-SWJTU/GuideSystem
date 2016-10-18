var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

var Landmark = require('../models/Landmark').Landmark;

//新建地标
router.get('/back_mainPage', function(req, res) {
	res.render('background/back_mainPage', { title: '新建' });
});

router.post('/background/back_mainPage',function(req,res){


	if(req.body.type == "1"){
		console.log(req.body.cate);
		console.log(req.body.des);
		console.log(req.body.poctu);
		var landmark = new Landmark({
			longitude : req.body.lon,
			latitude : req.body.lan,
			name : req.body.name,
			category : req.body.cate,
			describe : req.body.des,
			content : req.body.poctu,
			aud_pass : "1"
		});
		console.log("111");
		Landmark.findOne({ }, function(err,landmark){
			landmark.save(function(err,res){
				console.log("222");
				if (err) {
					console.log('服务器异常');
					return;
				};
			});
		});
		console.log("333");
		 res.send("yes");
	}
});

module.exports = router;
