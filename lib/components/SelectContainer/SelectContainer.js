"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Option = _antd.Select.Option;

var OptionsList = function OptionsList(options) {
  var opts = options.map(function (item) {
    // console.log(item)
    var isDisabled = item.isDisabled; // i'm doing this for the sake of logic. right now we're using label, value.
    // but we should use id and label
    // const key   = item.id;

    var value = item.value;
    var label = item.label;
    return _react.default.createElement(Option, {
      key: value,
      disabled: isDisabled
    }, label);
  });
  return opts;
}; //@TODO we can move select away from this container.


var SelectContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectContainer, _Component);

  function SelectContainer(props) {
    var _this;

    _classCallCheck(this, SelectContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectContainer).call(this, props));
    _this.state = {
      // name       : ( (props.flag) ? 'allowed' : 'excluded' ) + props.placeholder,
      name: 'the_name',
      placeholder: props.placeholder // console.log(props.placeholder)

    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SelectContainer, [{
    key: "handleChange",
    value: function handleChange(items) {
      // console.log(items);
      this.props.onChange(items);
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.props.options;
      return _react.default.createElement(_antd.Select, {
        mode: "multiple",
        style: {
          width: '100%'
        },
        onChange: this.handleChange,
        placeholder: this.state.placeholder
      }, OptionsList(options));
    }
  }]);

  return SelectContainer;
}(_react.Component);

;
var _default = SelectContainer; // https://ant.design/components/select/#components-select-demo-select-users
// @TODO add tests so we cannot pass an empty array to options

exports.default = _default;