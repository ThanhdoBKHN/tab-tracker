'use strict'

/* eslint-disable */
// save value sensor to Database
var mqtt = require('mqtt');

var _require = require('../models'),
    Sensor = _require.Sensor;

var mqttClient = mqtt.connect('mqtt://localhost', {
  port: 1883
}); // var mqttClient = mqtt.connect('mqtt://localhost:1883')

var sensorTopic = 'thanh/sensor'; // recv data json to broker in topic

mqttClient.on('message', function (topic, payload) {
  if (topic == sensorTopic) {
    try {
      var message = JSON.parse(payload.toString()); // save to Database Sqlite

      var sensor = Sensor.create({
        temperature: message.temperature,
        humidity: message.humidity
      });
      console.log(sensor);
    } catch (err) {
      console.log(err);
    }
  }
}); // sub topic

mqttClient.on('connect', function () {
  console.log("Connected and listening");
  mqttClient.subscribe(sensorTopic);
});