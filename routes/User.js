var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

var UserEntity = require('../models/User').UserEntity;

// 测试用
router.get('/', function(req, res) {
	res.render('layout', { title: '测试用' });
});


//主页
router.get('/mainPage', function(req, res) {
	res.render('mainPage', { title: '主页' });
});

router.get('/map', function(req, res) {
	res.render('map', {  title: '主页'  });
});

// 登陆功能的路由
router.get('/login', function(req, res) {
	res.render('login', { title: '登录' });
});
router.post('/login', function(req, res, next) {
	
	var Student_id = req.body.Student_id;
	var Password = req.body.Password;

	console.log(Student_id);
	console.log(Password);

	UserEntity.findOne({ Student_id : Student_id}, function(err,user){
		if(err){
			req.session()
			// res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
			console.log('服务器异常');
			return;
		}

		if (user) {
			res.redirect('mainPage');
			res.success();
		};

	});
});




// 注册功能的路由
router.get('/register', function(req, res) {
	res.render('register', { title: '注册' });
});
router.post('/register',function(req,res){

	var Student_id = req.body.Student_id;
	if ( !Student_id || Student_id.length < 10) {
		// res.error(ErrorCode.ILLEGAL_ARGUMENT_ERROR_CODE,'学号不能为空');
		return;
	};

	var Password = req.body.Password;
	if ( !Password || Password.length < 6) {
		// res.error(ErrorCode.ILLEGAL_ARGUMENT_ERROR_CODE,'密码长度不能少于6位');
		return;
	};

	var password_confirm = req.body.password_confirm;
	if (Password != password_confirm) {
		// res.error(ErrorCode.ILLEGAL_ARGUMENT_ERROR_CODE,'两次输入的密码不一致');
		console.log('两次输入的密码不一致');
		return;
	};

	console.log(Student_id);
	console.log(Password);
	console.log(password_confirm);

	UserEntity.findOne({ Student_id : Student_id}, function(err,user){
		if(err){
			res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
			return;
		}

		if (user) {
			res.error(ErrorCode.BUSINESS_ERROR_CODE,'学号已经注册');
			return;
		};

		var registerEntity = new UserEntity({
			Student_id : Student_id,
			Password : Password
		});
		registerEntity.save(function(err,row){
			if (err) {
				res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
				return;
			};
			res.redirect('/login',{title : '登录'});
		});
	});
});

module.exports = router;
