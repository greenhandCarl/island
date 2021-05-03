const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore (app) {
    InitManager.app = app
    InitManager.initLoadRouter()
  }

  static initLoadRouter () {
    const whenLoadModule = (module) => {
      if (module instanceof Router) {
        InitManager.app.use(module.routes())
      }
    }
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, { visit: whenLoadModule })
  }
}

module.exports = InitManager
