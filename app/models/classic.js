const { sequelize } = require('../../core/db')
const { DataTypes, Model } = require('sequelize')
const { STRING, DATEONLY, INTEGER, TINYINT } = DataTypes

const classicFields = {
  image: STRING,
  content: STRING,
  pubdate: DATEONLY,
  fav_nums: INTEGER,
  title: STRING,
  type: TINTINT
}

class Movie extends Model {}

Movie.init(classicFields, { sequelize, tableName: 'movie' })

class Sentence extends Model {}

Sentence.init(classicFields, { sequelize, tableName: 'sentence' })

class Music extends Model {}

Music.init({ ...classicFields, url: STRING }, { sequelize, tableName: 'music' })
