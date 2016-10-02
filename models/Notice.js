var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var NoticeSchema = new mongoose.Schema({
 	title:String,
	centent:String,
	author:String,
	postDate : {
		type:Date,
		default:Date.now()
	}
});


// 将该Schema发布为模型
var Notice = mongoose.model('Notice',NoticeSchema,'Notice');//指定在数据库中的collection名称为Notice
exports.Notice  = Notice;//导出Notice模型（Notice类）