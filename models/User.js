
var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var UserSchema = new mongoose.Schema({

	email : { type: String, index: true,unique:true },
	name : String,
	password : String
});


// 将该Schema发布为模型
var User = mongoose.model('User',UserSchema,'user');//指定在数据库中的collection名称为user
exports.User  = User;//导出User模型（User类）

// var userEntity = new UserModel({
// 	Email : '2014',
// 	Password : '1123'
// })
// console.log(userEntity);
// userEntity.save();

// UserModel.find(function(err,persons){
//      console.log(persons);
//    });

//    db.once('open',function(){
//      //一次打开记录
//    });
