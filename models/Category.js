var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var CategorySchema = new mongoose.Schema({

	top_level : { type: String, unique:true },
	inc_level : { type: String, unique:true },

});


// 将该Schema发布为模型
var Category = mongoose.model('Category',CategorySchema,'category');
exports.Category  = Category;
