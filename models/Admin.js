
var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var AdminSchema = new mongoose.Schema({

	email : { type: String, index: true,unique:true },
	name : String,
	password : String
});


// 将该Schema发布为模型
var Admin = mongoose.model('Admin',AdminSchema,'Admin');//指定在数据库中的collection名称为Admin
exports.Admin  = Admin;//导出Admin模型（Admin类）
