const Router = require('koa-router')
const { ParameterException } = require('../../../core/http-exception')
const { PositiveIntegerValidator } = require('../../validators/validator')
const { Auth } = require('../../../middleware/auth')

const router = new Router({
  prefix: '/v1/classic'
})

router.get('/latest', new Auth().m, async (ctx, next) => {
  ctx.body = ctx.auth.uid
})

module.exports = router
