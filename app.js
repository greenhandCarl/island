const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middleware/exception')

const app = new Koa()

app.use(catchError)

app.use(bodyParser())

InitManager.initCore(app) // 注册所有的路由

app.listen(3000)
