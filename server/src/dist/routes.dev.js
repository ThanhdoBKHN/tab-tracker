'use strict'

/* eslint-disable */
var AuthenticationController = require('./controllers/AuthenticationController');

var AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

var MqttClientController = require('./controllers/MqttClientController');

var SensorController = require('./controllers/SensorController');

var DeviceController = require('./controllers/DeviceController'); // const isAuthenticated = require('./policies/isAuthenticated')


module.exports = function (app) {
  app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
  app.post('/login', AuthenticationController.login), app.get('/sensor', SensorController.show);
  app.post('/device', DeviceController.sendCommand);
};