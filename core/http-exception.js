class HttpException extends Error {
  constructor (message = '服务器错误', errorCode = 10000, status = 400) {
    super()
    this.message = message
    this.errorCode = errorCode
    this.status = status
  }
}

class ParameterException extends HttpException {
  constructor (message = '参数错误', errorCode = 10000) {
    super()
    this.code = 400
    this.message = message
    this.errorCode = errorCode
  }
}

module.exports = {
  HttpException,
  ParameterException
}
