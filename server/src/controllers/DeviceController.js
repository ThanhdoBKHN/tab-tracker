/* eslint-disable */
const mqtt = require('mqtt')
//var mqttClient = mqtt.connect('mqtt://localhost:1883')
//const deviceTopic = 'iot20201/group2/devices'
const deviceTopic = 'thanh/device'

// // recv data json to broker in topic
// mqttClient.on('message', (topic, payload) => {
//     if (topic == sensorTopic){
//         try {
//             const message = JSON.parse(payload.toString())
//             const sensor =  Sensor.create({
//                 temperature: message.temperature,
//                 humidity: message.humidity
//             })
//             console.log(sensor);
//         } 
//         catch(err) {
//             console.log(err);
//         }
//     }
// })

// // sub topic
// mqttClient.on('connect', () => {
//     mqttClient.subscribe(sensorTopic)
// })

// pub mess on or off recviced to Vuejs frontend 
module.exports = {
    async sendCommand (req, res) {
        try {
            //const mqttClient = mqtt.connect('mqtt://test.mosquitto.org')
            const mqttClient = mqtt.connect('mqtt://localhost:1883')
            let command = null
            if (req.body.command == '0'){
                command = 'off'
            } 
            if (req.body.command == '1') {
                command = 'on'
            }
            
            mqttClient.on('connect', () => {
                console.log("publish here");
                mqttClient.publish(deviceTopic, command)
                
            })
            console.log(command);
            // dang code do luc 11:01 day 10/7
            res.send(command)
        } catch(err) {
            console.log(err)
        }
    }
}