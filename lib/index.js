"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.BackgroundColor = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Icone = _interopRequireDefault(require("../UI/Icone/Icone"));

let _ = t => t,
    _t;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const style = {
    wrapper: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        transition: 'background-color 0.25s ease-in-out'
    }
};

const SwitchCtn = _styledComponents.default.div(_t || (_t = _`
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  left: 20px;
`));

class BackgroundColor extends _react.default.Component {
    constructor(props, ctx) {
        super(props, ctx);
        this.story = props.story;
        this.themeClair = props.themeClair;
        this.themeSombre = props.themeSombre;
        this.state = {
            theme: this.themeClair
        };
    }

    changeTheme() {
        return () => this.setState(c => c === this.themeClair ? this.themeSombre : this.themeClair);
    }

    render() {
        return /*#__PURE__*/_react.default.createElement("div", {
            style: Object.assign({}, style.wrapper, {
                backgroundColor: this.state.theme.body.normal
            })
        }, /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
            theme: this.state.theme
        }, this.story(), /*#__PURE__*/_react.default.createElement(SwitchCtn, null, /*#__PURE__*/_react.default.createElement("button", {
            type: "button",
            onClick: this.changeTheme
        }, "THEME"))));
    }

}

exports.BackgroundColor = BackgroundColor;

var _default = (themeClair, themeSombre) => story => /*#__PURE__*/_react.default.createElement(BackgroundColor, {
    themeClair: themeClair,
    themeSombre: themeSombre,
    story: story
});

exports.default = _default;