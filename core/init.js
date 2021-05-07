const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore (app) {
    InitManager.app = app
    InitManager.initLoadRouter()
    // InitManager.loadHttpException()
    InitManager.loadConfig()
  }

  static loadConfig (path = '') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global.config = config
  }

  static initLoadRouter () {
    const whenLoadModule = (module) => { // 加载完文件时的钩子函数
      if (module instanceof Router) {
        InitManager.app.use(module.routes())
      }
    }
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, { visit: whenLoadModule })
  }

  static loadHttpException () { // 挂在所有异常基类到全局变量中 未使用
    const errors = require('./http-exception')
    global.errors = errors
  }
}

module.exports = InitManager
