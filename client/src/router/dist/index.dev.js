"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("@/components/HelloWorld"));

var _Register = _interopRequireDefault(require("@/components/Register"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: _HelloWorld["default"]
  }, {
    path: '/register',
    name: 'register',
    component: _Register["default"]
  }]
});

exports["default"] = _default;