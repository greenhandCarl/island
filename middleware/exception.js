const { HttpException } = require('../core/httpException')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (err instanceof HttpException) {
      ctx.body = {
        message: err.message,
        errorCode: err.errorCode,
        requestUrl: `${ctx.method} ${ctx.path}`
      }
      ctx.status = err.status
    }
  }
}

module.exports = catchError
