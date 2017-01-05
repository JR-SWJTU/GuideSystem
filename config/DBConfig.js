/**
 * Created by Jr on 16/8/30.
 */

var mongoose = require('mongoose');//引入mongoose库
//mongodb连接地址,demo为数据库名称,默认mongodb连接不需要密码
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/guidesystem');
exports.mongoose = mongoose;//导出mongoose对象


// //配置需要登陆认证的访问路径
// exports.needLoginUrlRegs = [
//     /^(\/)+app(\/)+status(\/)+compose_status/,
// ];
