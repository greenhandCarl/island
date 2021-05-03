const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middleware/exception')

const app = new Koa()

app.use(catchError)

app.use(bodyParser())

InitManager.initCore(app)

app.listen(3000)
