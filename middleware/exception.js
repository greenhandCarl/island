const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    const isHttpException = err instanceof HttpException
    const isDev = global.config.enviroment === 'dev'

    if (isDev && !isHttpException) throw err

    if (isHttpException) {
      ctx.body = {
        message: err.message,
        errorCode: err.errorCode,
        requestUrl: `${ctx.method} ${ctx.path}`
      }
      ctx.status = err.status
    } else {
      ctx.body = {
        message: 'we made a mistake',
        errorCode: 999,
        requestUrl: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError
