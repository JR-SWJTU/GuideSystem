var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var InformationSchema = new mongoose.Schema({

	pub_name : String,	//发布者姓名
	title : String,		//公告题目
	info_content : { type: String, unique:true },
	date : { type: String, unique:true },
	// info_category : type : NumberInt   //0为公告，1为评论

});


// 将该Schema发布为模型
var Information = mongoose.model('Information',InformationSchema,'information');//指定在数据库中的collection名称为user
exports.Information  = Information;
