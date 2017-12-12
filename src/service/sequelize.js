import Sequelize from 'sequelize'

const sequelize = new Sequelize(
  'caroty', //database
  'root', //username
  'nibushiRENA12.', //password
  {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false // might be an error with sequelize, i donnot understand it
  }
)

sequelize.import('../model/User')

export default sequelize