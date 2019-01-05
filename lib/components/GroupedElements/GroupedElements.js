"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Debug = _interopRequireDefault(require("../Debug"));

var _SelectContainer = _interopRequireDefault(require("../SelectContainer/SelectContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

//@TODO can be updated by combining handleChange methods into one method
// they are similar but i'm to lazy to do it.
var GroupedElements =
/*#__PURE__*/
function (_Component) {
  _inherits(GroupedElements, _Component);

  function GroupedElements(props) {
    var _this;

    _classCallCheck(this, GroupedElements);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupedElements).call(this, props));
    _this.state = {
      selectedOption1: [],
      selectedOption2: [],
      options1: _this.props.options1,
      options2: _this.props.options2
    };
    _this.handleChange2 = _this.handleChange2.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange1 = _this.handleChange1.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GroupedElements, [{
    key: "proceedDataForParent",
    value: function proceedDataForParent() {} // here we need to pack allowed and dissallowed items into one array/object with a name
    // of element/attribute that we have at search form
    //
    // handleChange(items) {
    //   // console.log(items);
    //   this.props.onChange(items)
    // }

  }, {
    key: "handleChange1",
    value: function handleChange1(selected) {
      // really bored, and making names badly. @TODO change it, ple A se
      var clone_of_state_2 = this.state.options2;

      var kle = _lodash.default.map(clone_of_state_2, function (item) {
        console.log(selected.includes(item.value));

        if (selected.includes(item.value)) {
          item.isDisabled = true;
        }
      });

      this.setState({
        selectedOption1: selected
      });
    }
  }, {
    key: "handleChange2",
    value: function handleChange2(selected) {
      var clone_of_state_1 = this.state.options1;

      var kle = _lodash.default.map(clone_of_state_1, function (item) {
        console.log(selected.includes(item.value));

        if (selected.includes(item.value)) {
          item.isDisabled = true;
        }
      });

      this.setState({
        selectedOption2: selected
      });
    } //@TODO cover the case with debug component. right now we show it all the times, but i want to have an ability to hide it without biggest troubles.
    // maybe it's better to have an additional prop - so if we have it set to true - we show debug, if now - we just hide it.

  }, {
    key: "render",
    value: function render() {
      // const options = this.props.options;
      var selectedOption1 = this.state.selectedOption1;
      var selectedOption2 = this.state.selectedOption2;
      var _this$state = this.state,
          options1 = _this$state.options1,
          options2 = _this$state.options2;
      var isDebug = this.props.debug;
      var debugTag = '<p></p>';

      if (isDebug) {
        debugTag = _react.default.createElement(_Debug.default, {
          a: selectedOption1,
          b: selectedOption2
        });
      }

      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_SelectContainer.default, {
        options: options1,
        onChange: this.handleChange1
      }), _react.default.createElement(_SelectContainer.default, {
        options: options2,
        onChange: this.handleChange2
      }), debugTag);
    }
  }]);

  return GroupedElements;
}(_react.Component);

;
var _default = GroupedElements;
exports.default = _default;