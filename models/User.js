
var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var UserSchema = new mongoose.Schema({

 	_id:Schema.Types.ObjectId,  //主键
	Email : { type: String, index: true },
	Name : String,
	Password : String
});


// 将该Schema发布为Entity
var UserEntity = mongoose.model('UserEntity',UserSchema,'user');//指定在数据库中的collection名称为user
exports.UserEntity  = UserEntity;//导出UserEntity实体

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
