const Sequelize = require('sequelize')

const { dbName, host, port, user, password } = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql',
  host,
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    timestamps: true, // 设置是否生产表中默认字段createAt updateAt
    paranoid: true, // 设置是否生产表中默认字段deleteAt
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true // 是否把驼峰转化成下划线形式
  }
})

sequelize.sync({
  force: false
})

module.exports = { sequelize }
