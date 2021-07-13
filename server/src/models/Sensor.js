/* eslint-disable */
module.exports = (sequelize, DataTypes) => {
    const Sensor = sequelize.define('Sensor', {
      temperature: DataTypes.STRING,
      humidity: DataTypes.STRING,
    })
  
    Sensor.associate = function (models) {
    }
  
    return Sensor
}