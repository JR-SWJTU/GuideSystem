var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var LandmarkSchema = new mongoose.Schema({

	longitude : { type: Number, default: 0.0, required:true},
	latitude : { type: Number, default: 0.0, required:true},
	name : { type: String, unique:true, default: "0", required:true},
	category : { type: String, default: "0", required:true},
	describe : { type: String, default: "无."},
	comment : { type: String, default: "无."},
	content : { type: String, default: "无."},
	aud_pass : { type: String, default: "0", required:true}
});


// 将该Schema发布为模型
var Landmark = mongoose.model('Landmark',LandmarkSchema,'landmark');//指定在数据库中的collection名称为user
exports.Landmark  = Landmark;
