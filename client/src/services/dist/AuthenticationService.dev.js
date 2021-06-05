"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Api = _interopRequireDefault(require("@/services/Api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  register: function register(credentials) {
    return (0, _Api["default"])().post('register', credentials);
  }
}; // AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })

exports["default"] = _default;