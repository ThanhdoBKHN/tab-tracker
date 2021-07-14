'use strict'

/* eslint-disable */
var mqtt = require('mqtt');

var deviceTopic = 'thanh/device'; // pub mess on or off recviced from Vuejs frontend to device ( LED )

module.exports = {
  sendCommand: function sendCommand(req, res) {
    var mqttClient, command;
    return regeneratorRuntime.async(function sendCommand$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              //const mqttClient = mqtt.connect('mqtt://test.mosquitto.org')
              mqttClient = mqtt.connect('mqtt://localhost:1883');
              command = null;

              if (req.body.command == '0') {
                command = 'off';
              }

              if (req.body.command == '1') {
                command = 'on';
              }

              mqttClient.on('connect', function () {
                console.log("publish here");
                mqttClient.publish(deviceTopic, command);
              });
              console.log(command); // dang code do luc 11:01 day 10/7

              res.send(command);
            } catch (err) {
              console.log(err);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};