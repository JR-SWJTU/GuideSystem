var ErrorCode = function(){
    this.errorCode = ErrorCode.NO_ERROR ;
    this.returnValue = {};
    this.errorReason = "";
};

ErrorCode.NO_ERROR = 0;//无错误
ErrorCode.ILLEGAL_ARGUMENT_ERROR_CODE = 1;//无效参数错误
ErrorCode.BUSINESS_ERROR_CODE = 2;//业务错误
ErrorCode.AUTH_ERROR_CODE = 3;//认证错误
ErrorCode.SERVER_EXCEPTION_ERROR_CODE = 5;//服务器未知错误
ErrorCode.TARGET_NOT_EXIT_ERROR_CODE = 6;//目标不存在错误

module.exports = ErrorCode;