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

class Success extends HttpException {
  constructor (message = 'ok', errorCode = 0) {
    super()
    this.code = 201
    this.message = message
    this.errorCode = errorCode
  }
}

class NotFound extends HttpException {
  constructor (message = '资源未找到', errorCode = 10000) {
    super()
    this.code = 404
    this.message = message
    this.errorCode = errorCode
  }
}

class AuthFailed extends HttpException {
  constructor (message = '授权失败', errorCode = 10004) {
    super()
    this.code = 401
    this.message = message
    this.errorCode = errorCode
  }
}

class Forbbiden extends HttpException {
  constructor (message = '禁止访问', errorCode = 10006) {
    super()
    this.code = 403
    this.message = message
    this.errorCode = errorCode
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
  NotFound,
  AuthFailed,
  Forbbiden
}
