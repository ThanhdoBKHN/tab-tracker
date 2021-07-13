/* eslint-disable */
const mosca = require('mosca')
var settings = {
    port: 1883
}
const broker = new mosca.Server(settings)

broker.on('clientConnected', function(client) {
    console.log('client connected: ', client.id)
})

// fired when a message is received
broker.on('published', function(packet, client) {
    console.log('Published', packet.topic);
})

broker.on('ready', ()=> {
    console.log('Broker is ready')
})