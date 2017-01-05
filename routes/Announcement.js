var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

var Information = require('../models/Information').Information;

router.get('/mainPage/announcement', function(req, res) {
	Information.find({ 'info_category':0}, null, {sort: {'_id' : -1 } },function(err,result){
	 	if(err){
			// res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
			console.log("find  " + err);
			return;
		}
		if (result) {
			console.log("服务公告");
			res.render('foreground/announcement', { result: result });
		};			
	});
});

router.get('/mainPage/announcement/detail', function(req, res) {
	var id = req.query.id;
	console.log(id +"aaa");
	Information.findById(id,function(err,result){
	 	if(err){
			// res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
			console.log("find  " + err);
			return;
		}
		if (result) {
			console.log(id +"aaa");
			res.render('foreground/announcement_detail', { result: result });
		};	
	});
});


module.exports = router;
