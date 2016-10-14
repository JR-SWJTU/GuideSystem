var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var InformationSchema = new mongoose.Schema({

	pub_name : type: String,
	info_content : { type: String, unique:true },
	date : { type: String, unique:true },
	info_category : type : int

});


// 将该Schema发布为模型
var Information = mongoose.model('Information',InformationSchema,'information');//指定在数据库中的collection名称为user
exports.Information  = Information;
