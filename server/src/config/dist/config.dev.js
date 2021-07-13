'use strict'

/* eslint-disable */
var path = require('path');

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'smart_home',
    user: process.env.DB_USER || 'smart_home',
    password: process.env.DB_PASS || 'smart_home',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../smart_home.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
};