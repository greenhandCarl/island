const Router = require('koa-router')
const { ParameterException } = require('../../../core/httpException')

const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const header = ctx.request.header
  const body = ctx.request.body
  if (!Object.keys(query).length) {
    const error = new ParameterException()
    throw error
  }
  ctx.body = {
    key: 'classic'
  }
})

module.exports = router
