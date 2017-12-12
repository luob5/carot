
import sequelize from '@/service/sequelize'

export default (sequelize, DataTypes) => sequelize.define('title', {
  title: DataTypes.STRING,
  text: DataTypes.STRING
});