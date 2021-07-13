/* eslint-disable */ 
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const MqttClientController = require('./controllers/MqttClientController')
const SensorController = require('./controllers/SensorController')
const DeviceController = require('./controllers/DeviceController')
//const isAuthenticated = require('./policies/isAuthenticated')
// const SongsController = require('./controllers/SongsController')
// const BookmarksController = require('./controllers/BookmarksController')
// const HistoriesController = require('./controllers/HistoriesController')

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
  // app.get('/songs',
  //   SongsController.index)
  // app.get('/songs/:songId',
  //   SongsController.show)
  // app.put('/songs/:songId',
  //   SongsController.put)
  // app.post('/songs',
  //   SongsController.post)

  // app.get('/bookmarks',
  //   isAuthenticated,
  //   BookmarksController.index)
  // app.post('/bookmarks',
  //   isAuthenticated,
  //   BookmarksController.post)
  // app.delete('/bookmarks/:bookmarkId',
  //   isAuthenticated,
  //   BookmarksController.remove)

  // app.get('/histories',
  //   isAuthenticated,
  //   HistoriesController.index)
  // app.post('/histories',
  //   isAuthenticated,
  //   HistoriesController.post)
}
