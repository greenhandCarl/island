module.exports = {
  enviroment: 'dev', // dev - 开发环境; prod - 正式环境
  database: {
    dbName: 'island',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
  },
  security: {
    secretKey: 'abcdefg',
    expiresIn: 60*60
  },
  wx: {
    appId: 'wx0569d3b36ca2699c',
    appSecret: '4aa99a293bd385d736c1033476e45eb8',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
}
