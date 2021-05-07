const { sequelize } = require('../../core/db')
const { Sequelize, Model } = require('sequelize')
const { STRING, INTEGER } = Sequelize

class User extends Model {

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
  password: STRING,
  openid: {
    type: STRING(64),
    unique: true
  }
}, { sequelize, tableName: 'user' })

module.exports = { User }
