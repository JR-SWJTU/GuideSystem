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
		
		var landmark = new Landmark({
			longitude : req.body.lon,
			latitude : req.body.lan,
			name : req.body.name,
			category : req.body.cate,
			aud_pass : "1"
		});

		if(!(req.body.describe==null||req.body.describe==undefined||req.body.describe==""))
			landmark.describe = req.body.describe;
		if(!(req.body.content==null||req.body.content==undefined||req.body.content==""))
			landmark.content = req.body.content;
		
		console.log(landmark.longitude);
		console.log(landmark.latitude);
		console.log(landmark.name);
		console.log(landmark.category);
		console.log(landmark.describe);
		console.log(landmark.comment);
		console.log(landmark.content);
		console.log(landmark.aud_pass);

		var temp_flag = 1;
		Landmark.findOne({name: landmark.name }, function(err,res){
			if(!res){
				landmark.save(function(err,res){
					
					if (err) {
						console.log(err);
						temp_flag = 0;
						return;
					}
				});
			}
		});
		if(temp_flag == 1)
			res.send("yes");
		 
		
	}
});

module.exports = router;
