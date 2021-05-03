const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.body = '服务器有点问题，你等一下'
  }
}

module.exports = catchError
