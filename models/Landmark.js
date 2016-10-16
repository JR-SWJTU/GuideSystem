var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var LandmarkSchema = new mongoose.Schema({

	longitude : { type: Number, unique:true },
	latitude : { type: Number, unique:true },
	name : { type: String, unique:true },
	category : { type: String, unique:true },
	describe : String,
	comment : String,
	content : String,
	aud_pass : { type: String, unique:true }
});


// 将该Schema发布为模型
var Landmark = mongoose.model('Landmark',LandmarkSchema,'landmark');//指定在数据库中的collection名称为user
exports.Landmark  = Landmark;
