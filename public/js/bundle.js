(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServersActions = function () {
  function ServersActions() {
    _classCallCheck(this, ServersActions);

    this.generateActions('getServersInfoSuccess', 'getServersInfoFail');
  }

  _createClass(ServersActions, [{
    key: 'getServersInfo',
    value: function getServersInfo() {
      var _this = this;

      $.ajax({ url: '/api/servers' }).done(function (data) {
        _this.actions.getServersInfoSuccess(data);
      }).fail(function (jqXhr) {
        _this.actions.getServersInfoFail(jqXhr);
      });
    }
  }]);

  return ServersActions;
}();

exports.default = _alt2.default.createActions(ServersActions);

},{"../alt":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _JumboTron = require('./JumboTron');

var _JumboTron2 = _interopRequireDefault(_JumboTron);

var _NoJavaScript = require('./NoJavaScript');

var _NoJavaScript2 = _interopRequireDefault(_NoJavaScript);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_NavBar2.default, null),
                _react2.default.createElement(_JumboTron2.default, null),
                _react2.default.createElement(_NoJavaScript2.default, null),
                this.props.children,
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":5,"./JumboTron":8,"./NavBar":9,"./NoJavaScript":10,"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Documents = function (_React$Component) {
    _inherits(Documents, _React$Component);

    function Documents() {
        _classCallCheck(this, Documents);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Documents).apply(this, arguments));
    }

    _createClass(Documents, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "documents", className: "app-section panel panel-default" },
                _react2.default.createElement(
                    "header",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "documents"
                    )
                ),
                _react2.default.createElement("div", { className: "panel-body" })
            );
        }
    }]);

    return Documents;
}(_react2.default.Component);

exports.default = Documents;

},{"react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        { id: "footer", className: "container" },
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "a",
            { href: "http://npmjs.org/package/atilla" },
            "Atilla"
          ),
          ", by ",
          _react2.default.createElement(
            "a",
            { href: "http://andrefs.com" },
            "André Santos"
          ),
          "."
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert alert-info' },
        'Hello from Home Component'
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"react":"react"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indexes = function (_React$Component) {
    _inherits(Indexes, _React$Component);

    function Indexes() {
        _classCallCheck(this, Indexes);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Indexes).apply(this, arguments));
    }

    _createClass(Indexes, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "indexes", className: "app-section panel panel-default" },
                _react2.default.createElement(
                    "header",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Indexes"
                    )
                ),
                _react2.default.createElement("div", { className: "panel-body" })
            );
        }
    }]);

    return Indexes;
}(_react2.default.Component);

exports.default = Indexes;

},{"react":"react"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JumboTron = function (_React$Component) {
    _inherits(JumboTron, _React$Component);

    function JumboTron() {
        _classCallCheck(this, JumboTron);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(JumboTron).apply(this, arguments));
    }

    _createClass(JumboTron, [{
        key: "render",
        value: function render() {
            return(
                // Main jumbotron for a primary marketing message or call to action
                _react2.default.createElement(
                    "div",
                    { className: "jumbotron epic" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "This is"
                    ),
                    _react2.default.createElement(
                        "h1",
                        null,
                        "Atilla"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "The browser-based GUI for ElasticSearch."
                    ),
                    _react2.default.createElement(
                        "ul",
                        { className: "welcome-links" },
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "http://npmjs.com/package/atilla" },
                                "Homepage"
                            )
                        ),
                        _react2.default.createElement(
                            "li",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "https://github.com/andrefs/node-atilla/issues" },
                                "Issues"
                            )
                        ),
                        _react2.default.createElement("li", null)
                    )
                )
            );
        }
    }]);

    return JumboTron;
}(_react2.default.Component);

exports.default = JumboTron;

},{"react":"react"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(NavBar).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "nav",
                { className: "navbar navbar-default navbar-fixed-top" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "navbar-header" },
                        _react2.default.createElement(
                            "button",
                            { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar" },
                            _react2.default.createElement(
                                "span",
                                { className: "sr-only" },
                                "Toggle navigation"
                            ),
                            _react2.default.createElement("span", { className: "icon-bar" }),
                            _react2.default.createElement("span", { className: "icon-bar" }),
                            _react2.default.createElement("span", { className: "icon-bar" })
                        ),
                        _react2.default.createElement(
                            "a",
                            { className: "navbar-brand", href: "#" },
                            "Atilla"
                        )
                    )
                )
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

exports.default = NavBar;

},{"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoJavaScript = function (_React$Component) {
  _inherits(NoJavaScript, _React$Component);

  function NoJavaScript() {
    _classCallCheck(this, NoJavaScript);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NoJavaScript).apply(this, arguments));
  }

  _createClass(NoJavaScript, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'noscript',
        null,
        '<h1>You won&#146;t get far in life without JavaScript&hellip;</h1>'
      );
    }
  }]);

  return NoJavaScript;
}(_react2.default.Component);

exports.default = NoJavaScript;

},{"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ServersStore = require('../stores/ServersStore');

var _ServersStore2 = _interopRequireDefault(_ServersStore);

var _ServersActions = require('../actions/ServersActions');

var _ServersActions2 = _interopRequireDefault(_ServersActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Servers = function (_React$Component) {
    _inherits(Servers, _React$Component);

    function Servers(props) {
        _classCallCheck(this, Servers);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Servers).call(this, props));

        _this.state = _ServersStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Servers, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ServersStore2.default.listen(this.onChange);
            _ServersActions2.default.getServersInfo();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ServersStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {

            var serversInfo = this.state.servers.map(function (server) {
                return;
                _react2.default.createElement('tr', null);
            });

            return _react2.default.createElement(
                'section',
                { id: 'servers', className: 'app-section panel panel-default' },
                _react2.default.createElement(
                    'header',
                    { className: 'panel-heading' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Servers'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'panel-body' },
                    _react2.default.createElement(
                        'table',
                        { className: 'table table-hover table-bordered' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'name'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'indexes'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    'size'
                                ),
                                _react2.default.createElement('th', null)
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: "/servers/andrefs.com" },
                                        'andrefs.com'
                                    )
                                ),
                                _react2.default.createElement('td', null),
                                _react2.default.createElement('td', null),
                                _react2.default.createElement('td', null)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Servers;
}(_react2.default.Component);

exports.default = Servers;

},{"../actions/ServersActions":1,"../stores/ServersStore":15,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Types = function (_React$Component) {
    _inherits(Types, _React$Component);

    function Types() {
        _classCallCheck(this, Types);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Types).apply(this, arguments));
    }

    _createClass(Types, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "types", className: "app-section panel panel-default" },
                _react2.default.createElement(
                    "header",
                    { className: "panel-heading" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Types"
                    )
                ),
                _react2.default.createElement("div", { className: "panel-body" })
            );
        }
    }]);

    return Types;
}(_react2.default.Component);

exports.default = Types;

},{"react":"react"}],13:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _routes2.default
), document.getElementById('app'));

},{"./routes":14,"react":"react","react-dom":"react-dom","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Servers = require('./components/Servers');

var _Servers2 = _interopRequireDefault(_Servers);

var _Indexes = require('./components/Indexes');

var _Indexes2 = _interopRequireDefault(_Indexes);

var _Types = require('./components/Types');

var _Types2 = _interopRequireDefault(_Types);

var _Documents = require('./components/Documents');

var _Documents2 = _interopRequireDefault(_Documents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Servers2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/servers/:serverid', component: _Indexes2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/servers/:serverid/indexes/:indexid', component: _Types2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/servers/:serverid/indexes/:indexid/types/:typeid', component: _Documents2.default }),
  _react2.default.createElement(_reactRouter.Redirect, { from: '/servers', to: '/' }),
  _react2.default.createElement(_reactRouter.Redirect, { from: '/servers/:serversid/indexes', to: '/servers/:serversid' }),
  _react2.default.createElement(_reactRouter.Redirect, { from: '/servers/:serversid/indexes/:indexid/types', to: '/servers/:serversid/indexes/:indexid' }),
  _react2.default.createElement(_reactRouter.Redirect, { from: '/servers/:serversid/indexes/:indexid/types/:typeid/documents', to: '/servers/:serversid/indexes/:indexid/types/:typeid' })
);

},{"./components/App":3,"./components/Documents":4,"./components/Home":6,"./components/Indexes":7,"./components/Servers":11,"./components/Types":12,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ServersActions = require('../actions/ServersActions');

var _ServersActions2 = _interopRequireDefault(_ServersActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServersStore = function () {
  function ServersStore() {
    _classCallCheck(this, ServersStore);

    this.bindActions(_ServersActions2.default);
    this.servers = [];
  }

  _createClass(ServersStore, [{
    key: 'onGetServersInfoSuccess',
    value: function onGetServersInfoSuccess(data) {
      this.servers = data;
    }
  }, {
    key: 'onGetServersInfoFail',
    value: function onGetServersInfoFail(jqXhr) {
      // Handle multiple response formats, fallback to HTTP status code number.
      //toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
    }
  }]);

  return ServersStore;
}();

exports.default = _alt2.default.createStore(ServersStore);

},{"../actions/ServersActions":1,"../alt":2}]},{},[13])


//# sourceMappingURL=bundle.js.map
