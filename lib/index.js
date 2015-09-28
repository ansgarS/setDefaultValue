"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Defaults = (function () {
    function Defaults(value) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, Defaults);

        this.value = value;
        this.checkNull = typeof options.checkNull === "undefined" ? true : options.checkNull;
        this.checkUndefined = typeof options.checkUndefined === "undefined" ? true : options.checkUndefined;
    }

    /**
     * Sets a default value, if null/undefined is given
     *
     * @param  {*} defaultValue replacing null/undefined
     * @return {*}
     */

    _createClass(Defaults, [{
        key: "to",
        value: function to(defaultValue) {
            return this.checkNull && this.value === null || this.checkUndefined && typeof this.value === "undefined" ? defaultValue : this.value;
        }
    }]);

    return Defaults;
})();

exports["default"] = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return Object.freeze(new (_bind.apply(Defaults, [null].concat(args)))());
};

module.exports = exports["default"];
