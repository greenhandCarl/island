const bcrypt = require('bcryptjs')
const { sequelize } = require('../../core/db')
const { Sequelize, Model } = require('sequelize')
const { STRING, INTEGER } = Sequelize
const { NotFound, AuthFailed } = require('../../core/http-exception')

class User extends Model {
  static async vertifyEmailPassword (email, plainPassword) {
    const user = await User.findOne({
      where: { email }
    })
    if (!user) throw new NotFound('账号不存在')
    const correct = bcrypt.compareSync(plainPassword, user.password)
    if (!correct) throw new AuthFailed('密码不正确')
    return user
  }

  static async getUserIdByOpenId (openid) {
    const user = await User.findOne({
      where: {
        openid // 这里i小写，因为数据库是小写
      }
    })
    return user
  }

  static async registerByOpenId (openid) {
    return await User.create({
      openid // 这里i小写，因为数据库是小写
    })
  }
}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true, // 主键
    autoIncrement: true // 自动增长
  },
  nickname: STRING,
  email: {
    type: STRING(128),
    unique: true
  },
  password: {
    type: STRING,
    set (val) {
      const salt = bcrypt.genSaltSync(10)
      const psd = bcrypt.hashSync(val, salt)
      this.setDataValue('password', psd)
    }
  },
  openid: {
    type: STRING(64),
    unique: true
  }
}, { sequelize, tableName: 'user' })

module.exports = { User }
