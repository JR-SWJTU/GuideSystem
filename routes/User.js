var express = require('express');
var router = express.Router();
var ErrorCode = require('../ErrorCode');

var User = require('../models/User').User;
var Admin = require('../models/Admin').Admin;

//主页
router.get('/mainPage', function(req, res) {
	console.log("FindPage");
	res.render('foreground/mainPage', { title: '主页' ,userName:req.query.userName});
});

// 登陆功能的路由
router.get('/login', function(req, res) {
	console.log(req.session.user);
	res.render('login', { title: '登录' });
});
router.post('/login', function(req, res, next) {
	
	var email = req.body.email;
	var password = req.body.password;
	var userType = req.body.userType;

	console.log(email);
	console.log(password);
	console.log(req.body.userType);

	if(userType == 0){
		var user = new User({
			email : email,
			password : password
		});

		User.findOne({ 'email' : email}, function(err,result){
			if(err){
				req.session()
				// res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
				console.log('服务器异常');
				return;
			}

			if (result) {
				if (password == result.password) {
					console.log(result.name);
					console.log("用户登录");
					var data = eval("(  { res: '1', userType : userType, userName: result.name} )");
					res.send(data);
				};			
			}
			else{
				console.log('该账号不存在，请重新输入。');
			}

		});
	}

	if(userType == 1){
		var admin = new Admin({
			email : email,
			password : password
		});

		Admin.findOne({ 'email' : email}, function(err,result){
			if(err){
				req.session()
				// res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
				console.log('服务器异常');
				return;
			}

			if (result) {
				if (password == result.password) {
					console.log(result.name);
					console.log("用户登录");
					res.send("1");
					// res.render('mainPage',{ 'adminName': result.name});
					// res.redirect('/mainPage');
				};			
			}
			else{
				console.log('该账号不存在，请重新输入。');
			}

		});
	}
	
});


// 注册功能的路由
router.get('/register', function(req, res) {
	res.render('register', { title: '注册' });
});
router.post('/register',function(req,res){

	var email = req.body.email;
	console.log(email);
	if ( !email || email.length < 10) {
		// res.error(ErrorCode.ILLEGAL_ARGUMENT_ERROR_CODE,'学号不能为空');
		console.log('邮箱不能为空');
		return;
	};

	var name = req.body.name;
	if( !name ){
		console.log('姓名不能为空');
		return;
	}

	var password = req.body.password;
	console.log(password);
	if ( !password || password.length < 0) {
		// res.error(ErrorCode.ILLEGAL_ARGUMENT_ERROR_CODE,'密码长度不能少于6位');
		console.log('密码长度不能少于六位');
		return;
	};

	var password_confirm = req.body.password_confirm;
	console.log(password_confirm);
	if (password != password_confirm) {
		// res.error(ErrorCode.ILLEGAL_ARGUMENT_ERROR_CODE,'两次输入的密码不一致');
		console.log('两次输入的密码不一致');
		return;
	};

	User.findOne({ email : email}, function(err,user){
		if(err){
			//res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
			console.log('服务器异常');
			return;
		}
		console.log('use:' + user);
		if (user) {
			//res.error(ErrorCode.BUSINESS_ERROR_CODE,'邮箱已经注册');
			console.log('该邮箱已经注册！');
			return;
		};

		var user = new User({
			email : email,
			name : name,
			password : password
		});

		user.save(function(err,res){
			if (err) {
				//res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
				console.log('服务器异常');
				return;
			};
		});
		res.redirect('/mainPage');
	});
});

module.exports = router;
