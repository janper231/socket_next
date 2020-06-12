module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// importamos Component de React\n // importamos el client de socket.io\n\n // importamos fetch\n\n\n\nclass HomePage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      field: '',\n      messages: this.props.messages\n    });\n\n    _defineProperty(this, \"handleMessage\", message => {\n      this.setState(state => ({\n        messages: state.messages.concat(message)\n      }));\n    });\n\n    _defineProperty(this, \"handleChange\", event => {\n      this.setState({\n        field: event.target.value\n      });\n    });\n\n    _defineProperty(this, \"handleSubmit\", event => {\n      event.preventDefault(); // creamos un objeto message con la fecha actual como ID y el valor del input\n\n      const message = {\n        id: new Date().getTime(),\n        value: this.state.field\n      }; // enviamos el objeto por socket al servidor\n\n      this.socket.emit('message', message); // lo agregamos a nuestro estado para que se muestre en pantalla y limpiamos el input\n\n      this.setState(state => ({\n        field: '',\n        messages: state.messages.concat(message)\n      }));\n    });\n  }\n\n  // acá pedimos los datos de los mensajes viejos, esto se ejecuta tanto en el cliente como en el servidor\n  static async getInitialProps({\n    req\n  }) {\n    const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000/messages');\n    const messages = await response.json();\n    return {\n      messages\n    };\n  }\n\n  // una vez que el componente se montó en el navegador nos conectamos al servidor de sockets\n  // y empezamos a recibimos el evento `message` del servidor\n  componentDidMount() {\n    this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()('http://localhost:3000/');\n    this.socket.on('message', this.handleMessage);\n  } // cuando el componente se va a desmontar es importante que dejemos de escuchar el evento\n  // y que cerremos la conexión por sockets, esto es para evitar problemas de que lleguen mensajes\n\n\n  componentWillUnmount() {\n    this.socket.off('message', this.handleMessage);\n    this.socket.close();\n  } // cuando llega un mensaje del servidor lo agregamos al estado de nuestra página\n\n\n  render() {\n    return __jsx(\"main\", null, __jsx(\"div\", null, __jsx(\"ul\", null, this.state.messages.map(message => __jsx(\"li\", {\n      key: message.id\n    }, __jsx(\"span\", {\n      className: \"hljs-name\"\n    }, message.value)))), __jsx(\"form\", {\n      onSubmit: this.handleSubmit\n    }, __jsx(\"input\", {\n      onChange: this.handleChange,\n      type: \"text\",\n      placeholder: \"Hola Platzi!\",\n      value: this.state.field\n    }), __jsx(\"button\", null, \"Enviar\"))));\n  }\n\n}\n\n_defineProperty(HomePage, \"defaultProps\", {\n  messages: []\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiQ29tcG9uZW50IiwiZmllbGQiLCJtZXNzYWdlcyIsInByb3BzIiwibWVzc2FnZSIsInNldFN0YXRlIiwic3RhdGUiLCJjb25jYXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpZCIsIkRhdGUiLCJnZXRUaW1lIiwic29ja2V0IiwiZW1pdCIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29tcG9uZW50RGlkTW91bnQiLCJpbyIsIm9uIiwiaGFuZGxlTWVzc2FnZSIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwib2ZmIiwiY2xvc2UiLCJyZW5kZXIiLCJtYXAiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7O0FBQ0E7O0FBRUEsTUFBTUEsUUFBTixTQUF1QkMsK0NBQXZCLENBQWlDO0FBQUE7QUFBQTs7QUFBQSxtQ0FhckI7QUFDSkMsV0FBSyxFQUFFLEVBREg7QUFFSkMsY0FBUSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0Q7QUFGakIsS0FicUI7O0FBQUEsMkNBaUNaRSxPQUFELElBQWE7QUFDekIsV0FBS0MsUUFBTCxDQUFjQyxLQUFLLEtBQUs7QUFBRUosZ0JBQVEsRUFBRUksS0FBSyxDQUFDSixRQUFOLENBQWVLLE1BQWYsQ0FBc0JILE9BQXRCO0FBQVosT0FBTCxDQUFuQjtBQUNILEtBbkM0Qjs7QUFBQSwwQ0FzQ2RJLEtBQUssSUFBSTtBQUNwQixXQUFLSCxRQUFMLENBQWM7QUFBRUosYUFBSyxFQUFFTyxLQUFLLENBQUNDLE1BQU4sQ0FBYUM7QUFBdEIsT0FBZDtBQUNILEtBeEM0Qjs7QUFBQSwwQ0EyQ2RGLEtBQUssSUFBSTtBQUNwQkEsV0FBSyxDQUFDRyxjQUFOLEdBRG9CLENBR3BCOztBQUNBLFlBQU1QLE9BQU8sR0FBRztBQUNaUSxVQUFFLEVBQUcsSUFBSUMsSUFBSixFQUFELENBQWFDLE9BQWIsRUFEUTtBQUVaSixhQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXTDtBQUZOLE9BQWhCLENBSm9CLENBU3BCOztBQUNBLFdBQUtjLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixTQUFqQixFQUE0QlosT0FBNUIsRUFWb0IsQ0FZcEI7O0FBQ0EsV0FBS0MsUUFBTCxDQUFjQyxLQUFLLEtBQUs7QUFDcEJMLGFBQUssRUFBRSxFQURhO0FBRXBCQyxnQkFBUSxFQUFFSSxLQUFLLENBQUNKLFFBQU4sQ0FBZUssTUFBZixDQUFzQkgsT0FBdEI7QUFGVSxPQUFMLENBQW5CO0FBSUgsS0E1RDRCO0FBQUE7O0FBQzdCO0FBQ0EsZUFBYWEsZUFBYixDQUE2QjtBQUFFQztBQUFGLEdBQTdCLEVBQXNDO0FBQ2xDLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyx1REFBSyxDQUFDLGdDQUFELENBQTVCO0FBQ0EsVUFBTWxCLFFBQVEsR0FBRyxNQUFNaUIsUUFBUSxDQUFDRSxJQUFULEVBQXZCO0FBQ0EsV0FBTztBQUFFbkI7QUFBRixLQUFQO0FBQ0g7O0FBWUQ7QUFDQTtBQUNBb0IsbUJBQWlCLEdBQUc7QUFDaEIsU0FBS1AsTUFBTCxHQUFjUSx1REFBRSxDQUFDLHdCQUFELENBQWhCO0FBQ0EsU0FBS1IsTUFBTCxDQUFZUyxFQUFaLENBQWUsU0FBZixFQUEwQixLQUFLQyxhQUEvQjtBQUNILEdBdkI0QixDQXlCN0I7QUFDQTs7O0FBQ0FDLHNCQUFvQixHQUFHO0FBQ25CLFNBQUtYLE1BQUwsQ0FBWVksR0FBWixDQUFnQixTQUFoQixFQUEyQixLQUFLRixhQUFoQztBQUNBLFNBQUtWLE1BQUwsQ0FBWWEsS0FBWjtBQUNILEdBOUI0QixDQWdDN0I7OztBQThCQUMsUUFBTSxHQUFHO0FBQ0wsV0FDSSxvQkFDSSxtQkFDSSxrQkFFSyxLQUFLdkIsS0FBTCxDQUFXSixRQUFYLENBQW9CNEIsR0FBcEIsQ0FBd0IxQixPQUFPLElBQzVCO0FBQUksU0FBRyxFQUFFQSxPQUFPLENBQUNRO0FBQWpCLE9BQ0k7QUFBTSxlQUFTLEVBQUM7QUFBaEIsT0FDS1IsT0FBTyxDQUFDTSxLQURiLENBREosQ0FESCxDQUZMLENBREosRUFZSTtBQUFNLGNBQVEsRUFBRSxLQUFLcUI7QUFBckIsT0FDSTtBQUNJLGNBQVEsRUFBRSxLQUFLQyxZQURuQjtBQUVJLFVBQUksRUFBQyxNQUZUO0FBR0ksaUJBQVcsRUFBQyxjQUhoQjtBQUlJLFdBQUssRUFBRSxLQUFLMUIsS0FBTCxDQUFXTDtBQUp0QixNQURKLEVBT0ksK0JBUEosQ0FaSixDQURKLENBREo7QUEwQkg7O0FBekY0Qjs7Z0JBQTNCRixRLGtCQVFvQjtBQUNsQkcsVUFBUSxFQUFFO0FBRFEsQzs7QUFvRlhILHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRhbW9zIENvbXBvbmVudCBkZSBSZWFjdFxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnRhbW9zIGVsIGNsaWVudCBkZSBzb2NrZXQuaW9cbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuLy8gaW1wb3J0YW1vcyBmZXRjaFxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBhY8OhIHBlZGltb3MgbG9zIGRhdG9zIGRlIGxvcyBtZW5zYWplcyB2aWVqb3MsIGVzdG8gc2UgZWplY3V0YSB0YW50byBlbiBlbCBjbGllbnRlIGNvbW8gZW4gZWwgc2Vydmlkb3JcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2VzJylcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZXMgfVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG1lc3NhZ2VzOiBbXVxuICAgIH1cblxuICAgIC8vIGVuIGVsIGVzdGFkbyBndWFyZGFtb3MgdW4gc3RyaW5nIHZhY8OtbyAoZWwgY2FtcG8gZGVsIGZvcm11bGFyaW8pIHkgbG9zIG1lbnNhamVzIHF1ZSByZWNpYmltb3MgZGVsIEFQSVxuICAgIHN0YXRlID0ge1xuICAgICAgICBmaWVsZDogJycsXG4gICAgICAgIG1lc3NhZ2VzOiB0aGlzLnByb3BzLm1lc3NhZ2VzXG4gICAgfVxuXG4gICAgLy8gdW5hIHZleiBxdWUgZWwgY29tcG9uZW50ZSBzZSBtb250w7MgZW4gZWwgbmF2ZWdhZG9yIG5vcyBjb25lY3RhbW9zIGFsIHNlcnZpZG9yIGRlIHNvY2tldHNcbiAgICAvLyB5IGVtcGV6YW1vcyBhIHJlY2liaW1vcyBlbCBldmVudG8gYG1lc3NhZ2VgIGRlbCBzZXJ2aWRvclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvJylcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ21lc3NhZ2UnLCB0aGlzLmhhbmRsZU1lc3NhZ2UpXG4gICAgfVxuXG4gICAgLy8gY3VhbmRvIGVsIGNvbXBvbmVudGUgc2UgdmEgYSBkZXNtb250YXIgZXMgaW1wb3J0YW50ZSBxdWUgZGVqZW1vcyBkZSBlc2N1Y2hhciBlbCBldmVudG9cbiAgICAvLyB5IHF1ZSBjZXJyZW1vcyBsYSBjb25leGnDs24gcG9yIHNvY2tldHMsIGVzdG8gZXMgcGFyYSBldml0YXIgcHJvYmxlbWFzIGRlIHF1ZSBsbGVndWVuIG1lbnNhamVzXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9mZignbWVzc2FnZScsIHRoaXMuaGFuZGxlTWVzc2FnZSlcbiAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKVxuICAgIH1cblxuICAgIC8vIGN1YW5kbyBsbGVnYSB1biBtZW5zYWplIGRlbCBzZXJ2aWRvciBsbyBhZ3JlZ2Ftb3MgYWwgZXN0YWRvIGRlIG51ZXN0cmEgcMOhZ2luYVxuICAgIGhhbmRsZU1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlcy5jb25jYXQobWVzc2FnZSkgfSkpXG4gICAgfVxuXG4gICAgLy8gY3VhbmRvIGVsIHZhbG9yIGRlbCBpbnB1dCBjYW1iaWEgYWN0dWFsaXphbW9zIGVsIGVzdGFkbyBkZSBudWVzdHJhIHDDoWdpbmFcbiAgICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWVsZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgfVxuXG4gICAgLy8gY3VhbmRvIHNlIGVudsOtYSBlbCBmb3JtdWxhcmlvIGVudmlhbW9zIGVsIG1lbnNhamUgYWwgc2Vydmlkb3JcbiAgICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyBjcmVhbW9zIHVuIG9iamV0byBtZXNzYWdlIGNvbiBsYSBmZWNoYSBhY3R1YWwgY29tbyBJRCB5IGVsIHZhbG9yIGRlbCBpbnB1dFxuICAgICAgICBjb25zdCBtZXNzYWdlID0ge1xuICAgICAgICAgICAgaWQ6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5maWVsZFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW52aWFtb3MgZWwgb2JqZXRvIHBvciBzb2NrZXQgYWwgc2Vydmlkb3JcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpXG5cbiAgICAgICAgLy8gbG8gYWdyZWdhbW9zIGEgbnVlc3RybyBlc3RhZG8gcGFyYSBxdWUgc2UgbXVlc3RyZSBlbiBwYW50YWxsYSB5IGxpbXBpYW1vcyBlbCBpbnB1dFxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICAgICAgICBmaWVsZDogJycsXG4gICAgICAgICAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXMuY29uY2F0KG1lc3NhZ2UpXG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBhY8OhIHJlbmRlcml6YW1vcyBjYWRhIG1lbnNhamUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAobWVzc2FnZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e21lc3NhZ2UuaWR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGxqcy1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICB7LyogbnVlc3RybyBmb3JtdWxhcmlvICovfVxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0hvbGEgUGxhdHppISdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkVudmlhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jaencarlosaponte/Documents/Proyects/next_with_socket/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCI/NzNhOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJpc29tb3JwaGljLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-fetch\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCI/OGJjNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzb2NrZXQuaW8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///socket.io-client\n");

/***/ })

/******/ });