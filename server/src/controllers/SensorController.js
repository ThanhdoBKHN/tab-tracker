/* eslint-disable */ 
const {Sensor} = require('../models')

// get data from Database to Vuejs
module.exports = {
    async show (req, res) {
        try {
            let sensors = null
            sensors = await Sensor.findAll({
                limit: 10
            })
            res.send(sensors)
        } catch(err) {
            console.log(err)
        }
    }
}