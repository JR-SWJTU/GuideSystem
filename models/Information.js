var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var InformationSchema = new mongoose.Schema({
	pub_id : String,	//发布者的id（评论和反馈意见用）
	pub_name : String,	//发布者姓名
	title : String,		//公告题目
	info_type : String, //反馈意见的类型
	info_content : String ,
	date : String, 
	info_category : Number   //0为公告，1为评论,2为反馈意见
});


// 将该Schema发布为模型
var Information = mongoose.model('Information',InformationSchema,'information');//指定在数据库中的collection名称为user
exports.Information  = Information;

var date = new Date();
var strDate = date.toLocaleString( ); 
console.log(strDate);
var title = "计划停电通知";
var info = "接四川郫县供电有限责任公司通知，因供电局变电站检修，定于2016年10月27日上午7：30-晚上21：00犀浦校区北区主体育场、音乐系、体育馆、西一门岗亭、西二门岗亭、北区BOT商业街、北区开水房、北区二次加压站、游泳池、游泳馆、天佑斋15-22号楼，鸿哲斋8-11号楼、4食堂、5食堂、保卫处办公区、招生就业处等区域停电。请在停电前10分钟关闭停止使用电梯及其他需要做停电保护的用电设备，请各单位及用户做好停电准备。";

var infoEntity = new Information(
{
	pub_id: null,
	pub_name : "Jakarta",
	title : "停水通知",
	info_type: null,
	info_content : info,
	date : "2016-11-29 22:35:08",
	info_category : 0
});

// infoEntity.save(function( err,result){
// 		if (err) {
// 			//res.error(ErrorCode.SERVER_EXCEPTION_ERROR_CODE,'服务器异常');
// 			console.log('服务器异常');
// 			return;
// 		};
// 	});


	
