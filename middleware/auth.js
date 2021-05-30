const basicAuth = require('basic-auth')
const jwt = require('jsonwebtoken')

class Auth {
  static USER = 8
  static ADMIN = 16
  static SUPER_ADMIN = 32
  constructor (level = 1) {
    this.level = level
  }

  get m () {
    return async (ctx, next) => {
      const userToken = basicAuth(ctx.req)
      let errMsg = 'token不合法'
      let jwtPayload = {}
      if (!userToken || !userToken.name) {
        throw new global.errors.Forbbiden(errMsg)
      }
      try {
        jwtPayload = jwt.verify(userToken.name, global.config.security.secretKey) // 如果不通过，会throw错误
      } catch (error) {
        if (error.name == 'TokenExpiredError') {
          errMsg = 'token已过期'
        }
        throw new global.errors.Forbbiden(errMsg)
      }

      if (jwtPayload.scope < this.level) {
        errMsg = '权限不足'
        throw new global.errors.Forbbiden(errMsg)
      }
      ctx.auth = {
        uid: jwtPayload.uid,
        scope: jwtPayload.scope
      }
      await next()
    }
  }

  static verifyToken (token) {
    try {
      jwt.verify(token, global.config.security.secretKey) // 如果不通过，会throw错误
      return true
    } catch (err) {
      return false
    }
  }
}

module.exports = { Auth }
