
import sequelize from '@/service/sequelize'

export default (sequelize, DataTypes) => sequelize.define('user', {
  name: DataTypes.STRING,
  password: DataTypes.STRING
});