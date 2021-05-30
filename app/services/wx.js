const util = require('util')
const axios = require('axios')
const { User } = require('../models/user')
const { generateToken } = require('../../core/util')
const { Auth } = require('../../middleware/auth')

class WXManager {
  static async codeToToken (code) {
    const { loginUrl, appId, appSecret } = global.config.wx
    console.log('loginUrl', loginUrl)
    console.log('appId', appId)
    console.log('appSecret', appSecret)
    const url = util.format(loginUrl, appId, appSecret, code)
    console.log('url', url)
    const result = await axios(url)
    console.log('WXManager result.data', result.data)
    if (result.status !== 200) {
      throw new global.errors.AuthFailed('openId获取失败')
    }
    const openid = result.data.openid
    if (!openid) {
      const errcode = result.data.errcode
      throw new global.errors.AuthFailed(`openId获取失败 ${errcode}`)
    }
    let user = await User.getUserIdByOpenId(result.data.openid)
    if (!user) {
      user = await User.registerByOpenId(result.data.openid)
    }
    return generateToken(user.id, Auth.USER)
  }
}

module.exports = { WXManager }
