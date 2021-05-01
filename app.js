const Koa = require('koa')
const Router = require('koa-router')
const requireDirectory = require('require-directory')

const app = new Koa()

const whenLoadModule = (module) => {
  if (module instanceof Router) {
    app.use(module.routes())
  }
}
requireDirectory(module, './api/v1', { visit: whenLoadModule })

app.listen(3000)
