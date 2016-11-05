var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

var Landmark = require('../models/Landmark').Landmark;

//新建地标
router.get('/back_mainPage', function(req, res) {
	Landmark.find({},function(err,result){
	 	if(err){
			req.session()
			// res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
			console.log("find  " + err);
			return;
		}
		if (result) {
			// var str="";
			// console.log(result);
			// for(var i=0;i<result.length;i++)
			// {
			// 	str=str+result[i].longitude+'^'+result[i].name+'^'+result[i].latitude+'^'+result[i].describe+'^'+result[i].category+'*';
			// }
			// console.log(str);
			//res.send(result);
			res.render('background/back_mainpage');
		};			
	});
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
		if(!(req.body.des==null||req.body.des==undefined||req.body.des=="")){
			landmark.describe = req.body.des;
		}
		if(!(req.body.pictu==null||req.body.pictu==undefined||req.body.pictu==""))
			landmark.content = req.body.pictu;
		
		

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
		 
		
	}else if(req.body.type == "9"){
		var find_name = req.body.name;
		Landmark.find({name:{$regex:find_name}},function(err,result){
		 	if(err){
				console.log("findByName  " + err);
				return;
			}
			res.send(result);
		});
	}else if(req.body.type=="10"){
		var find_cate = req.body.cate;
		Landmark.find({category:find_cate},function(err,result){
		 	if(err){
				console.log("findByName  " + err);
				return;
			}
			res.send(result);
		});
	}else{

	}




	if(req.body.type == "2"){
		var temp_flag = 1;
		var name=req.body.name;
		console.log(name);
		Landmark.remove({name:name }, function(err,res){
			if(!res){
				console.log('delete error');
			}
		});
		if(temp_flag == 1)
			res.send("yes");		
	}

	if(req.body.type=="3"){
		Landmark.find({aud_pass:"1"},function(err,result){
	 	if(err){
			req.session()
			// res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
			console.log("find  " + err);
			return;
		}
		if (result) {
			res.send(result);			
		}		
	});
	}


	if(req.body.type == "4"){
		
		var landmark = new Landmark({
			name : req.body.name,
			category : req.body.cate,
		});
		if(!(req.body.des==null||req.body.des==undefined||req.body.des=="")){
			landmark.describe = req.body.des;
		}
		if(!(req.body.pictu==null||req.body.pictu==undefined||req.body.pictu==""))
			landmark.content = req.body.pictu;
		
		

		var temp_flag = 1;
		console.log(req.body.oname);
		Landmark.update({name:req.body.oname},{$set: {name:landmark.name,describe:req.body.des,category:landmark.category}}, function(err,res){
			console.log(res);
			if(!res)
			{
				temp_flag=0;
			}
		});
		if(temp_flag == 1)
			res.send("yes");
		 
		
	}

	if(req.body.type == "5"){
		
		var landmark = new Landmark({
			longitude : req.body.lon,
			latitude : req.body.lan,
		});			

		var temp_flag = 1;
		console.log(req.body.oname);
		Landmark.update({name:req.body.oname},{$set: {longitude:landmark.longitude,latitude:landmark.latitude}}, function(err,res){
			console.log(res);
			if(!res)
			{
				temp_flag=0;
			}
		});
		if(temp_flag == 1)
			res.send("yes");		
	}

	if(req.body.type=="6"){
		Landmark.find({aud_pass:"0"},function(err,result){
		 	if(err){
				req.session()
				// res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
				console.log("find  " + err);
				return;
			}
			if (result) {
				res.send(result);			
			}		
		});
	}

	if(req.body.type=="7"){
		if(req.body.aud_pass=="1")
		{
			var temp_flag = 1;
			console.log(111111111);
			Landmark.update({name:req.body.name},{$set:{aud_pass:req.body.aud_pass}}, function(err,res){
				console.log(res);
				if(!res)
				{
					temp_flag=0;
				}
			});
			if(temp_flag == 1)
				res.send("yes");
		}
		else if (req.body.aud_pass=="0")
		{
			var temp_flag = 1;
			console.log(req.body.oname);
			Landmark.remove({name:req.body.name }, function(err,res){
				if(!res){
					temp_flag=0;
				}
			});
			if(temp_flag == 1)
				res.send("yes");
		}
	}

});

module.exports = router;
