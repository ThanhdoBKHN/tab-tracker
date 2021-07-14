/* eslint-disable */ 
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const MqttClientController = require('./controllers/MqttClientController')
const SensorController = require('./controllers/SensorController')
const DeviceController = require('./controllers/DeviceController')
// const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login),
  
  app.get('/sensor',
    SensorController.show)
  app.post('/device',
    DeviceController.sendCommand)
}
