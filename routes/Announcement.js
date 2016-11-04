var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

var Information = require('../models/Information').Information;

router.get('/mainPage/announcement', function(req, res) {
		Information.find({},function(err,result){
	 	if(err){
			req.session()
			// res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
			console.log("find  " + err);
			return;
		}
		if (result) {
			res.render('foreground/announcement', { result: result });
		};			
	});
});


module.exports = router;
