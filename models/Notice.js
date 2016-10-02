var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var NoticeSchema = new mongoose.Schema({

	title
	Email : { type: String, index: true },
	Name : String,
	Password : String,
	Date : datetime
});


// 将该Schema发布为模型
var User = mongoose.model('User',UserSchema,'user');//指定在数据库中的collection名称为user
exports.User  = User;//导出User模型（User类）