/* eslint-disable */
const mqtt = require('mqtt')
const deviceTopic = 'thanh/device'
// pub mess on or off recviced from Vuejs frontend to device ( LED )
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