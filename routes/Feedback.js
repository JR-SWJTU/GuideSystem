var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

var Information = require('../models/Information').Information;

router.get('/mainPage/feedback', function(req, res) {
	res.render('foreground/feedback',{user : req.session.user});
});

router.post('/mainPage/feedback', function(req, res) {
	var title = req.body.title;
	var info_type = req.body.type;
	var info_content = req.body.content;
	var date = new Date();
	var strDate = date.toLocaleString( ); 

	var information = new Information({
		pub_id : req.session.user._id,
		pub_name: req.session.user.name,
		title :title,
		info_type : info_type,
		info_content : info_content,
		date : strDate,
		info_category : 2
	});

	var data;
	information.save(function( err,result){
		if (err != null) {
			//res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
			console.log('服务器异常');
			data = eval("(  { res: '0' } )");
			res.send(data);
			return;
		};
		data = eval("(  { res: '1' } )");
		res.send(data);
	});
});

module.exports = router;
