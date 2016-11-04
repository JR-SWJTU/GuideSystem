var mongodb = require('../config/DBConfig');
var mongoose = mongodb.mongoose;

// 定义一个Schema
var InformationSchema = new mongoose.Schema({

	pub_name : String,	//发布者姓名
	title : String,		//公告题目
	info_content : { type: String },
	date : { type: String },
	// info_content : { type: String, unique:false },
	// date : { type: String, unique:false },
	// info_category : type : NumberInt   //0为公告，1为评论

});


// 将该Schema发布为模型
// var Information = mongoose.model('Information',InformationSchema,'information');//指定在数据库中的collection名称为user
// exports.Information  = Information;

// var infoEntity = new Information({	pub_name : 'Jakarta1',	title : '紧急停水通知',	info_content : 	'因鸿哲斋地下室水泵房出现故障，导致犀浦校区鸿哲斋8-11号楼停水。因故障原因不明，且抢修过程较长，恢复供水时间待定。在鸿哲斋8-11号住宿的人员可到附近的天佑斋1楼值班室取水，以解决简单的生活所需.另后勤保障处从10月28晚8：00-10：00及次日上午10：30和下午4：00在鸿哲斋10号楼侧用洒水车提供非饮用水。后勤保障处正集中力量进行抢修，对此造成的不便敬请谅!',  	date : new Date()})
// infoEntity.save();
// var a;
// for(a = 0;a < 20;a++ ){
// 	infoEntity.save();
// 	console.log(infoEntity);
// }
	
