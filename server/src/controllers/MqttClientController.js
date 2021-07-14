/* eslint-disable */
// save value sensor to Database
const mqtt = require('mqtt')
const {Sensor} = require('../models')
var mqttClient = mqtt.connect('mqtt://localhost', {port: 1883})
// var mqttClient = mqtt.connect('mqtt://localhost:1883')
const sensorTopic = 'thanh/sensor'

// recv data json to broker in topic
mqttClient.on('message', (topic, payload) => {
    if (topic == sensorTopic){
        try {
            const message = JSON.parse(payload.toString())
            // save to Database Sqlite
            const sensor =  Sensor.create({
                temperature: message.temperature,
                humidity: message.humidity
            })
            console.log(sensor);
        } 
        catch(err) {
            console.log(err);
        }
    }
})

// sub topic
mqttClient.on('connect', () => {
    console.log("Connected and listening");
    mqttClient.subscribe(sensorTopic)
})
